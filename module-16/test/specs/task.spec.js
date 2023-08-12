const testPage = require('../pageobjects/pages')

describe('module 16 task', function() {
    
    beforeEach(async function() {
        await testPage.goForm();
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
})
