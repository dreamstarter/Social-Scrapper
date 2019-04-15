import cron from 'node-cron';
import { runCron } from './scrapper';

cron.schedule('* * * * *', () => {
    // cron will run every day of every month on every day of the week
    // 0 0 * * *
    console.log('⏲  RUNNING THE CRON');
    runCron();
});