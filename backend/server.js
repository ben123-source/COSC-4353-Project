import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
const app = express();

const corsOptions = {
    origin: 'https://main--cosc4353.netlify.app/', // Adjust this to your React app's origin
};

app.use(cors());

app.use(express.json());
const zoodatabase = 'zoodatabase';

const db = mysql.createConnection({
    host: 'zoodatabase.mysql.database.azure.com',
    user: 'team4',
    password: 'Zooproject1',
    database: "zoodatabase"
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.post('/', (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM loginfor4353 WHERE username = ? AND pass = ?";
    db.query(sql, [username, password], (err, data) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json('Internal server error');
        }
        if (data.length > 0) {
            return res.json('Login success');
        } else {
            return res.status(401).json('Invalid credentials');
        }
    });
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const sql = "INSERT INTO loginfor4353 (username, pass) VALUES (?, ?)";
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
    const {fullName, address1, address2, city, state, zipcode} = req.body;
    const sql = "INSERT INTO profile (fullName, address1, address2, city, state, zipcode) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [fullName, address1, address2,city,state,zipcode], (err, result) => {
        if (err) {
            console.error('Error inserting into database:', err);
        }
        console.log('Profile created successfully');
        return res.json('Your profile has been saved successfully!');
    });
});


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});