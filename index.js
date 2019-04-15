import { 
    getHTML, 
    getInstagramCount, 
    getTwitterCount, 
} from './lib/scrapper';

async function go() {
    const [iCount, tCount] = await Promise.all([
        getInstagramCount(),
        getTwitterCount(),    
    ]);
    console.log(iCount, tCount);
}

go();