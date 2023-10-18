# CLI Tool - Simple Web Crawler

### Purpose of the app

The app will take a valid website's URL as an input in the Terminal as it is a CLI tool, we will interact and run it in the terminal.

It will check all the URLs of that given website and crawl the website's html to find out the number of every single URL used on the website.

Example:<br>
Run Command:

```bash
npm start https://xyz.com
```

Output:<br>
Found 7 links of page: xyz.com <br>
Found 2 links of page: xyz.com/contact<br>

It means: URL xyz.com is used on anchor tag 7 times on the whole website.

### Installation

Clone then run:

```bash
npm install
```

### Technology used:

- Nodejs
- JSDom (to get the window object)
- Jest (to test the functions)
