class TestPage {     

    async goForm() {
        const formsButton = $('accessibility id:Forms');
        await formsButton.click();
    }

    async inputTest(inputText) {
        const input = $('accessibility id:text-input');
        await input.setValue(inputText);
    }

    async switchTest() {
        const formsButton = $('accessibility id:switch');
        await formsButton.click();
    }

}

module.exports = new TestPage()
