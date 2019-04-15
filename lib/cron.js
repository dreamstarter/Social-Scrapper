import cron from 'node-cron';
import { runCron } from './scrapper';

cron.schedule('0 0 * * *', () => {
    // cron will run every day of every month on every day of the week
    console.log('⏲ RUNNING THE CRON');
    runCron();
});