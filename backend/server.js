import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: 'https://main--cosc4353.netlify.app'
}));

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

app.post('/login', (req, res) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});