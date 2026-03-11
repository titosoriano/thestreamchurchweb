const fs = require('fs');
const path = require('path');
const dir = path.join('p:', 'Vibe Coding', 'thestreamwebnew');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.js'));
for (const file of files) {
    if (file === 'fix_nav.js') continue;
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Simple regex to match `<a href="..." class="nav-logo">` where class="nav-logo"
    let newContent = content.replace(/<a[^>]*href=["'][^"']*["'][^>]*class=["']nav-logo["'][^>]*>/g, '<a href="https://thestreamchurch.org/" class="nav-logo">');
    // Also handle components.js string: \"#inicio\" class=\"nav-logo\"
    newContent = newContent.replace(/<a href=\\"[^"]*\\" class=\\"nav-logo\\">/g, '<a href=\\"https://thestreamchurch.org/\\" class=\\"nav-logo\\">');

    if (content !== newContent) {
        fs.writeFileSync(path.join(dir, file), newContent, 'utf8');
        console.log('Fixed', file);
    }
}
console.log('Done');
