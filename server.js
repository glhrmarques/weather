import dotenv from 'dotenv';
import axios from 'axios';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3003;

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/api/weather', async (req,res) => {

    const key = process.env.API_KEY;
    const location = 'Santiago';
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }


});

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));