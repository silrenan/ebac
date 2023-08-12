const testPage = require('../pageobjects/pages')

describe('module 16 task', function() {

    
    beforeEach(async function() {
        await testPage.goForm();
    });

    it('test input field', async function() { 
        const input = "Teste"; 
        const result = $('accessibility id:input-text-result')
        await testPage.inputTest(input);
        const output = await result.getText();
        expect(output).toEqual(input)
    });

    it('test switch field', async function() {
        await testPage.switchTest();
        expect
    });
})
