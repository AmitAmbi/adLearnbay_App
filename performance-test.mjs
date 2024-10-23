import { chromium } from 'playwright';
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher'; // Change to named import
import fs from 'fs';

async function launchChromeAndRunLighthouse(url, opts = {}, config = null) {
    const chrome = await launch({ chromeFlags: ['--headless'] }); // Updated to use the named import
    opts.port = chrome.port;
    const result = await lighthouse(url, opts, config);
    await chrome.kill();
    return result;
}

(async () => {
    const url = 'http://localhost:3000'; // Update with your local Next.js URL
    const opts = {
        logLevel: 'info',
        output: 'json',
        onlyCategories: ['performance'],
    };

    const { lhr } = await launchChromeAndRunLighthouse(url, opts);
    
    // Collect Core Web Vitals
    const metrics = {
        TTFB: lhr.audits['time-to-first-byte'].numericValue,
        FCP: lhr.audits['first-contentful-paint'].numericValue,
        LCP: lhr.audits['largest-contentful-paint'].numericValue,
        CLS: lhr.audits['cumulative-layout-shift'].numericValue,
        FID: lhr.audits['first-input-delay'].numericValue,
        TBT: lhr.audits['total-blocking-time'].numericValue, // Total Blocking Time
    };

    console.log('Core Web Vitals:', metrics);
    
    // Save to JSON for visualization
    fs.writeFileSync('performance-metrics.json', JSON.stringify(metrics, null, 2));

    // Start tracing for advanced metrics
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    await page.tracing.start({ path: 'trace.json', screenshots: true });

    // Wait for some time to capture traces
    await page.waitForTimeout(60000); // Adjust based on your needs
    await page.tracing.stop();
    await browser.close();
})();
