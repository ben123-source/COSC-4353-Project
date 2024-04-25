import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: 3306,
  password: '26dosis123',
  database: 'fuelquotadb'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT _id FROM user WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, data) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.status(500).json('Internal server error');
      }
      if (data.length > 0) {
        // Send back the user ID upon successful login
        return res.json({ message: 'Login success', userId: data[0]._id });
      } else {
        return res.status(401).json('Invalid credentials');
      }
    });
  });

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const sql = "INSERT INTO user (username, password) VALUES (?, ?)";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error inserting into database:', err);
      return res.status(500).json('Internal server error');
    }
    console.log('User signed up successfully');
    return res.json('Signup success');
  });
});


  
app.post('/profilepage', (req, res) => {
  const { _id, fullName, address1, address2, city, state, zipcode } = req.body;

  // First check if the profile exists
  const selectSql = "SELECT * FROM profile WHERE _id = ?";
  db.query(selectSql, [_id], (selectErr, selectResults) => {
    if (selectErr) {
      console.error('Error checking for existing profile:', selectErr);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // If profile exists, update it
    if (selectResults.length > 0) {
      let updates = [];
      const values = [];
      if (fullName !== undefined) { updates.push('fullName = ?'); values.push(fullName); }
      if (address1 !== undefined) { updates.push('address1 = ?'); values.push(address1); }
      if (address2 !== undefined) { updates.push('address2 = ?'); values.push(address2); }
      if (city !== undefined) { updates.push('city = ?'); values.push(city); }
      if (state !== undefined) { updates.push('state = ?'); values.push(state); }
      if (zipcode !== undefined) { updates.push('zipcode = ?'); values.push(zipcode); }

      if (values.length > 0) {
        const updateSql = `UPDATE profile SET ${updates.join(', ')} WHERE _id = ?`;
        db.query(updateSql, [...values, _id], (updateErr, updateResult) => {
          if (updateErr) {
            console.error('Error updating profile in database:', updateErr);
            return res.status(500).json({ error: 'Internal server error' });
          }
          return res.json({ message: 'Profile updated successfully!' });
        });
      } else {
        return res.status(400).json({ message: 'No profile information provided to update.' });
      }
    } else {
      // If profile does not exist, insert a new one
      const insertSql = "INSERT INTO profile (_id, fullName, address1, address2, city, state, zipcode) VALUES (?, ?, ?, ?, ?, ?, ?)";
      db.query(insertSql, [_id, fullName, address1, address2, city, state, zipcode], (insertErr, insertResult) => {
        if (insertErr) {
          console.error('Error inserting new profile into database:', insertErr);
          return res.status(500).json({ error: 'Internal server error' });
        }
        return res.json({ message: 'Profile created successfully!' });
      });
    }
  });
});
app.get('/profilepage/:userId', (req, res) => {
  const { userId } = req.params;


  // Fetch profile data from the database
  const sql = "SELECT * FROM profile WHERE _id = ?";
  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error('Error fetching profile from database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('Fetched profile data:', result); // Log the fetched data
    if (result.length > 0) {
      return res.json(result[0]); // Send the profile data
    } else {
      return res.status(404).json({ error: 'Profile not found' });
    }
  });
});

app.post('/fuelformpage', async (req, res) => {
  const { gallonsRequested, deliveryState, userId, deliveryAddress, deliveryCity, deliveryZipcode, deliveryDate } = req.body;

  // Constants
  const currentPricePerGallon = 1.50;
  const companyProfitFactor = 0.10;

  // Input validation
  if (!gallonsRequested || !deliveryState || !userId || !deliveryAddress || !deliveryCity || !deliveryZipcode || !deliveryDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Check for rate history
    const historySql = "SELECT EXISTS(SELECT 1 FROM fuel_quotes WHERE _id = ?) as hasHistory";
    const [historyResult] = await db.promise().query(historySql, [userId]);
    const rateHistoryFactor = historyResult[0].hasHistory ? 0.01 : 0.00;

    // Location Factor
    const locationFactor = deliveryState === 'TX' ? 0.02 : 0.04;

    // Gallons Requested Factor
    const gallonsRequestedFactor = gallonsRequested > 1000 ? 0.02 : 0.03;

    // Calculate Margin
    const margin = currentPricePerGallon * (locationFactor - rateHistoryFactor + gallonsRequestedFactor + companyProfitFactor);

    // Calculate Suggested Price per gallon
    const suggestedPrice = (currentPricePerGallon + margin).toFixed(4); // Rounded to 4 decimal places

    // Calculate Total Amount Due
    const totalAmountDue = (gallonsRequested * suggestedPrice).toFixed(2); // Rounded to 2 decimal places

    // Insert quote details into the database
    const insertSql = `
      INSERT INTO fuel_quotes (
        _id,
        gallons_requested,
        delivery_address,
        delivery_city,
        delivery_state,
        delivery_zipcode,
        delivery_date,
        suggested_price,
        total_amount_due
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await db.promise().execute(insertSql, [
      userId,
      gallonsRequested,
      deliveryAddress,
      deliveryCity,
      deliveryState,
      deliveryZipcode,
      deliveryDate,
      suggestedPrice,
      totalAmountDue
    ]);

    // Return the calculated prices and a success message
    res.json({
      success: true,
      message: "Quote created successfully",
      suggestedPrice,
      totalAmountDue
    });
  } catch (err) {
    console.error('Error processing fuel quote:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.get('/fuelQuotes/:userId', async (req, res) => {
  const { userId } = req.params;
  const historySql = "SELECT * FROM fuel_quotes WHERE _id = ? ORDER BY delivery_date DESC";
  
  try {
    const [history] = await db.promise().query(historySql, [userId]);
    res.json(history);
  } catch (err) {
    console.error('Error fetching quote history:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
