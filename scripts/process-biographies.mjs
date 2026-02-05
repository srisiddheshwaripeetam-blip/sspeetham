import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, '..');
const languages = ['en', 'te', 'ta', 'hi'];
const swamiCount = 6;
const outputDir = path.join(baseDir, 'lib', 'data');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function formatToHtml(text) {
    if (!text) return "";

    // Normalize literal \n strings to actual newlines
    const normalizedText = text.replace(/\\n/g, '\n');

    // Normalize line endings and split by double newlines for paragraphs
    const paragraphs = normalizedText.split(/\r?\n\r?\n+/);
    const htmlParts = [];

    for (let p of paragraphs) {
        p = p.trim();
        if (!p) continue;

        // Handle list items
        if (p.startsWith('•') || p.startsWith('- ')) {
            const items = p.split(/\r?\n/);
            let listHtml = '<ul class="list-disc pl-5 space-y-2 mb-4 marker:text-amber-500">';
            for (let item of items) {
                let itemText = item.replace(/^[•-]\s*/, '').trim();
                if (itemText) {
                    // Bold within list items
                    itemText = itemText.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-900">$1</strong>');
                    listHtml += `<li class="pl-1">${itemText}</li>`;
                }
            }
            listHtml += '</ul>';
            htmlParts.append ? htmlParts.push(listHtml) : htmlParts.push(listHtml);
        }
        // Handle headers (like **Title:**)
        else if ((p.startsWith('**') && (p.endsWith('**') || p.endsWith('**:')))) {
            const header = p.replace(/\*\*|:/g, '').trim();
            htmlParts.push(`<h3 class="text-xl font-bold text-amber-900 mt-6 mb-3 font-serif">${header}</h3>`);
        }
        // Standard paragraph
        else {
            // Bold markers
            let processedP = p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-900">$1</strong>');
            // Line breaks within paragraph
            processedP = processedP.replace(/\r?\n/g, '<br/>');
            htmlParts.push(`<p class="leading-relaxed text-neutral-700 mb-4 text-justify">${processedP}</p>`);
        }
    }

    return htmlParts.join("");
}

for (const lang of languages) {
    console.log(`Processing language: ${lang}`);
    const biographies = {};

    for (let i = 1; i <= swamiCount; i++) {
        const filePath = path.join(baseDir, 'public', 'content', 'stories', `swami${i}`, `${lang}.txt`);

        if (fs.existsSync(filePath)) {
            try {
                const rawText = fs.readFileSync(filePath, 'utf-8');
                biographies[`swami${i}`] = formatToHtml(rawText);
                console.log(`  Processed swami${i}`);
            } catch (err) {
                console.error(`  Error reading swami${i}: ${err.message}`);
            }
        } else {
            console.warn(`  Warning: File not found for swami${i} (${lang})`);
        }
    }

    const outputPath = path.join(outputDir, `biographies_${lang}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(biographies, null, 2), 'utf-8');
    console.log(`  Saved to ${outputPath}`);
}

console.log("Biography processing complete.");
