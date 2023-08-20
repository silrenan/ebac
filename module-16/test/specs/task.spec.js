const testPage = require('../pageobjects/pages')
const path = require('path');

describe('module 16 task', function() {

    before(async function() {
        await testPage.goForm();
        await driver.startRecordingScreen();
    });

    after(async function() {
        await driver.saveRecordingScreen(path.join(__dirname, '../evidences', 'results.mp4'));
    });

    it('test input field', async function() { 
        const input = "Teste"; 
        const output = await testPage.fieldTest(input);
        expect(output).toEqual(input);
    });

    it('test switch field', async function() {
        const switchButton = await testPage.switchTest();
        expect(switchButton).toEqual("Click to turn the switch OFF");
    });

    it('test dropdown field', async function() {        
        const dropdownSelector = await testPage.dropdownTest();
        expect(dropdownSelector).toEqual("webdriver.io is awesome"); 
    });

    it('test click button', async function() {
        const buttonClick = await testPage.clickTest();
        expect(buttonClick).toEqual("This button is active")
    });
})
