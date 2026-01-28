const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(publicDir);

const targets = files.filter(file =>
    file.toLowerCase().endsWith('.png') ||
    file.toLowerCase().endsWith('.jpg') ||
    file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${targets.length} images to convert.`);

async function convert() {
    for (const file of targets) {
        const inputPath = path.join(publicDir, file);
        const fileName = path.parse(file).name;
        const outputPath = path.join(publicDir, `${fileName}.webp`);

        try {
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Converted: ${file} -> ${fileName}.webp`);
        } catch (err) {
            console.error(`Error converting ${file}:`, err);
        }
    }
}

convert();
