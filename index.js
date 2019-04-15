import express from 'express';
import { getInstagramCount, getTwitterCount} from './lib/scrapper';
import db from './lib/db';

const app = express();

app.get('/scrape', async (request, response, next) => {
    console.log('Scraping!');
    const [iCount, tCount] = await Promise.all([
        getInstagramCount(),
        getTwitterCount(),    
    ]);
    console.log(iCount, tCount);
    db.get('twitter')
        .push({
            date: Date.now(),
            count: tCount
        }).write();
    db.get('instagram')
        .push({
            date: Date.now(),
            count: iCount
        })
        .write();
    response.json({iCount, tCount})
});

app.listen(3000, () => {
    console.log('Social Scrapper App is running on port 3000');
});