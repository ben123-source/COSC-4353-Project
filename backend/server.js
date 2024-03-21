const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
const db = mysql.createConnection({
    host: 'zoodatabase.mysql.database.azure.com',
    user: 'team4',
    password: 'Zooproject1',
    database: zoodatabase
})

app.post('/login', (req, res) => {
    const sql = "select * from loginfor4353 where username = ? and pass = ?";
    
    db.query(sql, [req.body.username, req.body.pass], (err, data) => {
        if (err) return res.json("login failed");
        if(data.length > 0) {
            return res.json("login success")
        } else {
            return res.json("no records found");
        }
})
});
app.listen(3000, () => {
    console.log("listening...");
})