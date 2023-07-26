import Parser from "rss-parser";
let parser = new Parser();

let rssLink = 'https://carlosmv.hashnode.dev/rss.xml';



function AllTheEntries(link) {
    let feed = parser.parseURL(link);

  feed.items.forEach(item => {
    return (item.title + ':' + item.link)
  });
};

export async function LastEntry(link) {
    let feed = await parser.parseURL(link);
    
    let lastEntryLink = feed.items[0].link;
    
    return  lastEntryLink
};

export default LastEntry;

