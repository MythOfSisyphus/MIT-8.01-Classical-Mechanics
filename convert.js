const { Marked } = require('marked');
const fs = require('fs');
const path = require('path');

const inputFile = process.argv[2];
if (!inputFile) process.exit(1);

const parentDir = path.dirname(inputFile);
const outputDir = path.join(parentDir, 'html');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const outputFile = path.join(outputDir, path.basename(inputFile, '.md') + '.html');
const markdown = fs.readFileSync(inputFile, 'utf8');

// --- EXTENSION 1: MATH PROTECTION ---
const mathExtension = {
    name: 'math',
    level: 'inline',
    start(src) { return src.indexOf('$'); },
    tokenizer(src) {
        const match = src.match(/^(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/);
        if (match) return { type: 'text', raw: match[0], text: match[0] };
    }
};

// --- EXTENSION 2: OBSIDIAN IMAGES ![[image.png]] ---
const obsidianExtension = {
    name: 'obsidian',
    level: 'inline',
    start(src) { return src.indexOf('!'); },
    tokenizer(src) {
        const imgMatch = src.match(/^!\[\[(.*?)\]\]/);
        if (imgMatch) {
            const fileName = imgMatch[1];
            // Since HTML is in notes/html/ or PSetsSolutions/html/
            // we go UP two levels (../../) to reach the root images/ folder
            return {
                type: 'html',
                raw: imgMatch[0],
                text: `<img src="../../images/${fileName}" alt="${fileName}" style="max-width:100%; display: block; margin: 1rem auto; border-radius: 8px;">`
            };
        }
    },
    renderer(token) { return token.text; }
};

const marked = new Marked();
marked.use({ extensions: [mathExtension, obsidianExtension] });
const content = marked.parse(markdown);

const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${path.basename(inputFile, '.md')}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
        onload="renderMathInElement(document.body, {
          delimiters: [
              {left: '$$', right: '$$', display: true},
              {left: '$', right: '$', display: false}
          ],
          throwOnError : false
        });"></script>
    <style>
        .katex-display { overflow-x: auto; padding: 10px 0; }
        :root { --container-width: 850px; }
        img { border: 1px solid #ccc; }
    </style>
</head>
<body>
    ${content}
</body>
</html>`;

fs.writeFileSync(outputFile, template);