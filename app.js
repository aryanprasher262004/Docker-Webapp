const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

let connection;

// ✅ Function to connect with retry (important for Docker)
function connectWithRetry() {
    console.log("Trying to connect to MySQL...");

    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    connection.connect(err => {
        if (err) {
            console.log("❌ DB not ready, retrying in 5 seconds...");
            setTimeout(connectWithRetry, 5000);
        } else {
            console.log("✅ Connected to MySQL!");
        }
    });
}

// Start connection attempts
connectWithRetry();

app.get('/', (req, res) => {

    if (!connection) {
        return res.send("Database initializing...");
    }

    connection.query('SELECT NOW() as time', (err, results) => {

        let status = "Connected ✅";
        let time = "";
        let color = "#16a34a";

        if (err) {
            status = "Database Connection Failed ❌";
            color = "#dc2626";
        } else {
            time = results[0].time;
        }

        res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Docker Lab Web App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }

                .card {
                    background: white;
                    padding: 40px;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    text-align: center;
                    width: 400px;
                }

                h1 {
                    margin-bottom: 20px;
                }

                .status {
                    font-size: 20px;
                    font-weight: bold;
                    color: ${color};
                    margin-bottom: 15px;
                }

                .time {
                    font-size: 18px;
                    color: #333;
                }

                .footer {
                    margin-top: 25px;
                    font-size: 14px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>🚀 Docker Lab Web App</h1>
                <div class="status">${status}</div>
                <div class="time">${time ? "🕒 Current DB Time: " + time : ""}</div>
                <div class="footer">
                    Running inside Docker Container 🐳
                </div>
            </div>
        </body>
        </html>
        `);
    });
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});