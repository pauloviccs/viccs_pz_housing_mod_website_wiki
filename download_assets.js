const fs = require('fs');
const path = require('path');
const https = require('https');

const SITE_ROOT = path.resolve(__dirname);
const MOD_MOODLES_DIR = path.resolve('g:/GitHub/Vibecoding/VICCS_Git/VICCS_ProjectZomboid/VICCS_HousingCareSystem/media/ui/Moodles');
const ICONS_DIR = path.join(SITE_ROOT, 'assets', 'icons');
const MOODLES_DIR = path.join(SITE_ROOT, 'assets', 'moodles');

if (!fs.existsSync(ICONS_DIR)) fs.mkdirSync(ICONS_DIR, { recursive: true });
if (!fs.existsSync(MOODLES_DIR)) fs.mkdirSync(MOODLES_DIR, { recursive: true });

// 1. Copy mod moodles
console.log('--- Copiando Moodles do Mod ---');
if (fs.existsSync(MOD_MOODLES_DIR)) {
    const modFiles = fs.readdirSync(MOD_MOODLES_DIR);
    modFiles.forEach(file => {
        if (file.endsWith('.png')) {
            const src = path.join(MOD_MOODLES_DIR, file);
            const dest = path.join(MOODLES_DIR, file.toLowerCase());
            fs.copyFileSync(src, dest);
            console.log(`Copiado: ${file} -> assets/moodles/${file.toLowerCase()}`);
        }
    });
} else {
    console.warn('Pasta do mod não encontrada:', MOD_MOODLES_DIR);
}

// 2. Download items list
const ITEMS_TO_DOWNLOAD = [
    { name: 'toilet_paper.png', url: 'https://pzwiki.net/w/images/c/ce/ToiletPaper.png' },
    { name: 'toothbrush.png', url: 'https://pzwiki.net/w/images/a/a2/Toothbrush.png' },
    { name: 'toothpaste.png', url: 'https://pzwiki.net/w/images/6/61/Toothpaste.png' },
    { name: 'soap.png', url: 'https://pzwiki.net/w/images/6/65/Soap.png' },
    { name: 'broom.png', url: 'https://pzwiki.net/w/images/c/c6/Pushbroom.png' },
    { name: 'mop.png', url: 'https://pzwiki.net/w/images/f/f5/Mop.png' },
    { name: 'bleach.png', url: 'https://pzwiki.net/w/images/e/ea/Bleach.png' },
    { name: 'cleaning_liquid.png', url: 'https://pzwiki.net/w/images/6/64/CleaningLiquid.png' },
    { name: 'sponge.png', url: 'https://pzwiki.net/w/images/a/a0/Sponge.png' },
    { name: 'towel.png', url: 'https://pzwiki.net/w/images/a/a3/Bathtowel.png' },
    { name: 'dishtowel.png', url: 'https://pzwiki.net/w/images/d/d4/Dishtowel.png' },
    { name: 'bucket_water.png', url: 'https://pzwiki.net/w/images/d/d5/Bucket_Water.png' },
    { name: 'bucket.png', url: 'https://pzwiki.net/w/images/5/52/Bucket.png' },
    { name: 'pillow.png', url: 'https://pzwiki.net/w/images/3/36/Pillow.png' },
    { name: 'sheet.png', url: 'https://pzwiki.net/w/images/d/d2/Sheet.png' },
    { name: 'fancy_bed.png', url: 'https://pzwiki.net/w/images/0/0a/FancyBed.png' },
    { name: 'wardrobe.png', url: 'https://pzwiki.net/w/images/1/15/Wardrobe.png' },
    { name: 'fridge.png', url: 'https://pzwiki.net/w/images/6/66/Fridge.png' },
    { name: 'generator.png', url: 'https://pzwiki.net/w/images/c/c2/Generator.png' },
    { name: 'lamp.png', url: 'https://pzwiki.net/w/images/3/37/Lamp.png' },
    { name: 'campfire.png', url: 'https://pzwiki.net/w/images/0/01/Campfire.png' },
    { name: 'painting.png', url: 'https://pzwiki.net/w/images/e/ea/Painting.png' },
    { name: 'mirror.png', url: 'https://pzwiki.net/w/images/b/b8/Mirror.png' },
    { name: 'spiffo.png', url: 'https://pzwiki.net/w/images/7/7e/PlushSpiffo.png' },
    { name: 'book.png', url: 'https://pzwiki.net/w/images/f/f3/Book.png' },
    { name: 'comic_book.png', url: 'https://pzwiki.net/w/images/a/a2/ComicBook.png' },
    { name: 'guitar.png', url: 'https://pzwiki.net/w/images/4/4a/GuitarAcoustic.png' },
    { name: 'canned_corn.png', url: 'https://pzwiki.net/w/images/2/23/CannedCorn.png' },
    { name: 'paintbrush.png', url: 'https://pzwiki.net/w/images/c/c4/Paintbrush.png' },
    { name: 'paint_red.png', url: 'https://pzwiki.net/w/images/5/57/Paint_Red.png' },
    { name: 'paint_blue.png', url: 'https://pzwiki.net/w/images/1/1f/Paint_Blue.png' },
    { name: 'plaster.png', url: 'https://pzwiki.net/w/images/9/90/Plaster_Powder.png' },
    { name: 'radio.png', url: 'https://pzwiki.net/w/images/3/31/Radio.png' },
    { name: 'radio_black.png', url: 'https://pzwiki.net/w/images/f/f9/RadioBlack.png' },
    { name: 'television.png', url: 'https://pzwiki.net/w/images/7/75/Television.png' }
];

// 3. Download moodles list
const MOODLES_TO_DOWNLOAD = [
    { name: 'moodle_bored.png', url: 'https://pzwiki.net/w/images/thumb/b/b1/Mood_Bored.png/64px-Mood_Bored.png' },
    { name: 'moodle_sad.png', url: 'https://pzwiki.net/w/images/thumb/1/13/Mood_Sad.png/64px-Mood_Sad.png' },
    { name: 'moodle_stressed.png', url: 'https://pzwiki.net/w/images/thumb/7/75/Mood_Stressed.png/64px-Mood_Stressed.png' },
    { name: 'moodle_panicked.png', url: 'https://pzwiki.net/w/images/thumb/3/30/Mood_Panicked.png/64px-Mood_Panicked.png' },
    { name: 'moodle_sleepy.png', url: 'https://pzwiki.net/w/images/thumb/c/c3/Mood_Sleepy.png/64px-Mood_Sleepy.png' },
    { name: 'moodle_pained.png', url: 'https://pzwiki.net/w/images/thumb/d/d3/Mood_Pained.png/64px-Mood_Pained.png' },
    { name: 'moodle_bleeding.png', url: 'https://pzwiki.net/w/images/thumb/b/b4/Status_Bleeding.png/64px-Status_Bleeding.png' },
    { name: 'moodle_ill.png', url: 'https://pzwiki.net/w/images/thumb/9/9e/Mood_Ill.png/64px-Mood_Ill.png' },
    { name: 'moodle_nauseous.png', url: 'https://pzwiki.net/w/images/thumb/0/0a/Mood_Nauseous.png/64px-Mood_Nauseous.png' },
    { name: 'moodle_noxious_smell.png', url: 'https://pzwiki.net/w/images/thumb/1/1f/Mood_NoxiousSmell.png/64px-Mood_NoxiousSmell.png' },
    { name: 'moodle_discomfort.png', url: 'https://pzwiki.net/w/images/thumb/5/5a/Mood_Discomfort.png/64px-Mood_Discomfort.png' },
    { name: 'moodle_hot.png', url: 'https://pzwiki.net/w/images/thumb/0/00/Status_TemperatureHot.png/64px-Status_TemperatureHot.png' },
    { name: 'moodle_cold.png', url: 'https://pzwiki.net/w/images/thumb/9/97/Status_TemperatureLow.png/64px-Status_TemperatureLow.png' },
    { name: 'moodle_windchill.png', url: 'https://pzwiki.net/w/images/thumb/0/0a/Status_Windchill.png/64px-Status_Windchill.png' },
    { name: 'moodle_wet.png', url: 'https://pzwiki.net/w/images/thumb/4/48/Status_Wet.png/64px-Status_Wet.png' },
    { name: 'moodle_hunger.png', url: 'https://pzwiki.net/w/images/thumb/f/f6/Status_Hunger.png/64px-Status_Hunger.png' },
    { name: 'moodle_thirst.png', url: 'https://pzwiki.net/w/images/thumb/c/c3/Status_Thirst.png/64px-Status_Thirst.png' },
    { name: 'moodle_heavy_load.png', url: 'https://pzwiki.net/w/images/thumb/9/90/Status_HeavyLoad.png/64px-Status_HeavyLoad.png' },
    { name: 'moodle_drunk.png', url: 'https://pzwiki.net/w/images/thumb/d/d1/Mood_Drunk.png/64px-Mood_Drunk.png' },
    { name: 'moodle_happy.png', url: 'https://pzwiki.net/w/images/thumb/e/e9/Mood_Happy.png/64px-Mood_Happy.png' },
    { name: 'moodle_exhausted.png', url: 'https://pzwiki.net/w/images/thumb/b/b1/Mood_Exhausted.png/64px-Mood_Exhausted.png' },
    { name: 'moodle_concentrating.png', url: 'https://pzwiki.net/w/images/thumb/d/d2/Mood_Concentrating.png/64px-Mood_Concentrating.png' }
];

function downloadFile(url, destPath) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        }, res => {
            if (res.statusCode !== 200) {
                res.resume();
                return reject(new Error(`Status ${res.statusCode} for ${url}`));
            }
            const fileStream = fs.createWriteStream(destPath);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });
            fileStream.on('error', err => {
                fs.unlink(destPath, () => {});
                reject(err);
            });
        });
        req.on('error', reject);
    });
}

async function runDownloads() {
    console.log('\n--- Baixando Ícones de Itens ---');
    for (const item of ITEMS_TO_DOWNLOAD) {
        const dest = path.join(ICONS_DIR, item.name);
        try {
            await downloadFile(item.url, dest);
            const stat = fs.statSync(dest);
            console.log(`[OK] ${item.name} (${stat.size} bytes)`);
        } catch (e) {
            console.error(`[FALHA] ${item.name}: ${e.message}`);
        }
    }

    console.log('\n--- Baixando Moodlets Oficiais ---');
    for (const m of MOODLES_TO_DOWNLOAD) {
        const dest = path.join(MOODLES_DIR, m.name);
        try {
            await downloadFile(m.url, dest);
            const stat = fs.statSync(dest);
            console.log(`[OK] ${m.name} (${stat.size} bytes)`);
        } catch (e) {
            console.error(`[FALHA] ${m.name}: ${e.message}`);
        }
    }
    console.log('\nDownload Concluído com Sucesso!');
}

runDownloads();
