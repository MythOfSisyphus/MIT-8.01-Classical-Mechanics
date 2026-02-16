const fs = require('fs');
const path = require('path');

const foldersToScan = ['notes/html', 'PSetsSolutions/html', 'exploring/html'];
let tocContent = '';

foldersToScan.forEach(folder => {
    if (fs.existsSync(folder)) {
        const categoryName = folder.split('/')[0].toUpperCase();
        tocContent += `<div class="category">${categoryName}</div><ul>`;
        
        const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
        files.forEach(file => {
            const fileName = path.basename(file, '.html');
            // Replaces underscores/dashes with spaces for a cleaner look
            const displayName = fileName.replace(/[_-]/g, ' ');
            tocContent += `<li><a href="${folder}/${file}">${displayName}</a></li>`;
        });
        tocContent += '</ul>';
    }
});

// Update index.html
const indexPath = './index.html';
let indexHtml = fs.readFileSync(indexPath, 'utf8');
const regex = /([\s\S]*?)/;
indexHtml = indexHtml.replace(regex, `\n${tocContent}\n`);

fs.writeFileSync(indexPath, indexHtml);
console.log("Table of Contents updated!");