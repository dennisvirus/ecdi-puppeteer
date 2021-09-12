const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1280,
        height: 1024
    });
    await page.goto('https://www.11st.co.kr/products/2933183678');
    // await page.screenshot({ path: '/Users/dennis/screenshot2.png' }); //스크린샷찍기
    await page.screenshot({
        fullPage: true,
        path: `/Users/dennis/screenshot-${new Date().toISOString().substr(0, 19)}.png`
    })
    await browser.close(); //puppeteer 종료
})();