class TestPage {     

    async goForm() {
        const formsButton = $('accessibility id:Forms');
        await formsButton.click();
    }

    async fieldTest(inputText) {
        const input = $('accessibility id:text-input');
        const result = $('accessibility id:input-text-result');
        await input.setValue(inputText);
        const output = await result.getText();
        return output;
    }

    async switchTest() {
        const switchButton = $('accessibility id:switch');
        await switchButton.click();
        const switchText = $('accessibility id:switch-text');
        const switchResult = await switchText.getText();
        return switchResult
    }

    async dropdownTest() {
            const dropdownButton = await $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText');
            await dropdownButton.click();
            const dropdownEntry = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]')
            await dropdownEntry.click();
            const dropdownText = await dropdownButton.getText();
            return dropdownText
    }

}

module.exports = new TestPage()
