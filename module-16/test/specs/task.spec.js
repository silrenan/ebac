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
        await testPage.switchTest();
    });
})
