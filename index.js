import { getHTML, getTwitterFollowers } from './lib/scrapper';

async function go() {
    const html = await getHTML('https://www.twitter.com/dreamstarter697');
    const twCount = await getTwitterFollowers(html);
    console.log(`You have ${twCount} Twitter followers`);
}

go();