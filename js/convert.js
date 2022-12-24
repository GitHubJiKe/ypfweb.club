const showdown = require("showdown");
const fs = require("fs");
const Path = require("path");
const util = require("util");
const ejs = require("ejs");
const minify = require("html-minifier").minify;

const rf = util.promisify(fs.readFile);
const wf = util.promisify(fs.writeFile);
const miniOpts = {
  maxLineLength: 0,
  minifyCSS: true,
  minifyJS: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeEmptyElements: false,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeTagWhitespace: true,
  decodeEntities: true,
  html5: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
};
const showdownOpts = {
  strikethrough: true,
  underline: true,
  tasklists: true,
  tables: true,
  tablesHeaderId: true,
  splitAdjacentBlockquotes: true,
  smartIndentationFix: true,
  simplifiedAutoLink: true,
  simpleLineBreaks: true,
  requireSpaceBeforeHeadingText: true,
  parseImgDimensions: true,
  openLinksInNewWindow: true,
  omitExtraWLInCodeBlocks: true,
  ghMentions: true,
  excludeTrailingPunctuationFromURLs: true,
  encodeEmails: true,
  emoji: true,
  backslashEscapesHTMLTags: true,
  metadata: true,
};

const convert = new showdown.Converter(showdownOpts);

async function doConvert() {
  const htmlDirs = require("../articles.json").map((v) => v.title);
  const markdownDirs = fs.readdirSync(Path.resolve(__dirname, "../markdown"));
  const need2Convert = markdownDirs.filter((val) => !htmlDirs.includes(val));
  const list = [];
  for (let index = 0; index < need2Convert.length; index++) {
    const filename = need2Convert[index];
    const filepath = Path.resolve(__dirname, "../markdown", filename);
    const mdContent = (await rf(filepath)).toString();
    const htmlContent = convert.makeHtml(mdContent);
    const metaData = convert.getMetadata();
    list.push(metaData);
    const htmlpath = Path.resolve(
      __dirname,
      "../html",
      `${metaData["title"]}.html`
    );
    const content = await ejs.renderFile(
      Path.resolve(__dirname, "./template.ejs"),
      {
        content: htmlContent,
        title: metaData["title"],
        date: metaData["date"],
      }
    );
    await wf(htmlpath, minify(content, miniOpts));
  }
  // const indexpath = Path.resolve(__dirname, "../index.html");
  // const text = (await rf(indexpath)).toString();
  // const indexContent = minify(text, miniOpts);
  // await wf(indexpath, indexContent);
  await wf(Path.resolve(__dirname, "../articles.json"), JSON.stringify(list));
}

doConvert();
