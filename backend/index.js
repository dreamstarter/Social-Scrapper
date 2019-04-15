import express from 'express';
import cors from 'cors';
import { getInstagramCount, getTwitterCount} from './lib/scrapper';
import db from './lib/db';
import './lib/cron';

const app = express();

app.use(cors());

app.get('/scrape', async (request, response, next) => {
    console.log('Scraping!');
    const [iCount, tCount] = await Promise.all([
        getInstagramCount(),
        getTwitterCount(),    
    ]);
    response.json({iCount, tCount});
});

app.get('/data', async(request, response, next) => {
    // get the scrape data
    const twitter = db.value();
    // respond with json
    response.json(twitter);
});

app.listen(2093, () => {
    console.log('Social Scrapper App is running at http://localhost:2093');
});