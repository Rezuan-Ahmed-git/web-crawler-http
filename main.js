const { crawlPage } = require('./crawl');

function main() {
  if (process.argv.length < 3) {
    console.log('No website provided');
    process.exit(1);
  }

  if (process.argv.length > 3) {
    console.log('Too many command line args');
    process.exit(1);
  }

  const baseURL = process.argv[2];

  console.log(`starting crawl of ${baseURL}`);
  crawlPage(baseURL);
}

main();
