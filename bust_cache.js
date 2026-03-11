const fs = require('fs');
const path = require('path');
const dir = path.join('p:', 'Vibe Coding', 'thestreamwebnew');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Replace <script src="components.js"></script> and variations with ?v=2
    if (content.includes('src="components.js"')) {
        content = content.replace(/src="components\.js"/g, 'src="components.js?v=' + Date.now() + '"');
        fs.writeFileSync(path.join(dir, file), content, 'utf8');
        console.log('Fixed cache for', file);
    }
}
console.log('Cache bust complete');
