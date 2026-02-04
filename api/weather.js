export default async function handler(req, res) {
    const key = process.env.API_KEY;
    const location = 'Atacama';
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Weather API error:', error.message);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
}
