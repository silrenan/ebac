class TestPage {     

    async goForm() {
        const formsButton = $('accessibility id:Forms');
        await formsButton.click();
    }

    async fieldTest(inputText) {
        const input = $('accessibility id:text-input');
        const result = $('accessibility id:input-text-result')
        await input.setValue(inputText);
        const output = await result.getText();
        return output;
    }

    async switchTest() {
        const switchButton = $('accessibility id:switch');
        await switchButton.click();
        const switchText = $('accessibility id:switch-text');
    }

}

module.exports = new TestPage()
