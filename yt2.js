const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    const userDataDir = './youtube-session';

    if (!fs.existsSync(userDataDir)) fs.mkdirSync(userDataDir, { recursive: true });

    const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/120.0.0.0 Safari/537.36';

    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        slowMo: 50,
        executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe', // Windows example
        ignoreDefaultArgs: ['--enable-automation'],
        args: [
            '--no-sandbox',
            '--disable-blink-features=AutomationControlled',
            '--disable-dev-shm-usage',
            '--disable-extensions',
            '--disable-infobars',
        ],
        viewport: { width: 1280, height: 800 },
        userAgent,
    });

    // Anti-detection script omitted here for brevity (add if needed)

    const page = await context.newPage();

    await page.goto('https://www.youtube.com/shorts', { waitUntil: 'networkidle' });

    console.log('🔐 Please log in manually in the opened browser, then press ENTER here to start watching shorts...');

    await new Promise((resolve) => {
        process.stdin.once('data', () => resolve());
    });

    console.log('✅ Starting to watch Shorts!');

    // Shorts watching loop (example: 5 shorts)
    const COUNT = 5000;

    for (let i = 0; i < COUNT; i++) {
        console.log(`▶️ Watching short ${i + 1}/${COUNT}`);

        const watchTime = 20000 + Math.floor(Math.random() * 5000);
        await page.waitForTimeout(watchTime);

        // Try to like the short (adjust selectors as needed)
        try {
            const likeSelector = 'like-button-view-model button[aria-label*="like this video"]';
            const likeBtn = await page.$(likeSelector);
            if (likeBtn) {
                await likeBtn.click({ force: true });
                console.log('❤️ Liked');
            } else {
                console.log('⚠️ Like button not found.');
            }
        } catch (err) {
            console.log('⚠️ Error liking the short:', err.message || err);
        }

        // Move to next short
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(500 + Math.floor(Math.random() * 1500));
    }

    console.log('✅ Done. Closing browser soon...');
    await page.waitForTimeout(2000);
    await context.close();
})();
