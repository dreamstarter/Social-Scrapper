import { 
    getHTML, 
    getTwitterFollowers, 
    getInstagramFollowers, 
} from './lib/scrapper';

async function go() {
    const iPromise = getHTML('https://www.instagram.com/dreamstarter');
    const tPromise = getHTML('https://www.twitter.com/dreamstarter697');

    const [instagramHTML, twitterHTML] = await Promise.all([iPromise, tPromise]);

    const igCount = await getInstagramFollowers(instagramHTML);
    const twCount = await getTwitterFollowers(twitterHTML);

    console.log(`You have ${twCount} Twitter followers and ${igCount} Instagram followers`);
}

go();