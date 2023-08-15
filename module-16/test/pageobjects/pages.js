class TestPage {     

    async goForm() {
        const formsButton = $('//android.widget.Button[@content-desc="Forms"]');
        await formsButton.click();
    }

    async fieldTest(inputText) {
        const input = $('//android.widget.EditText[@content-desc="text-input"]');
        const result = $('//android.widget.TextView[@content-desc="input-text-result"]');
        await input.setValue(inputText);
        const output = await result.getText();
        return output;
    }

    async switchTest() {
        const switchButton = $('//android.widget.Switch[@content-desc="switch"]');
        await switchButton.click();
        const switchText = $('//android.widget.TextView[@content-desc="switch-text"]');
        const switchResult = await switchText.getText();
        return switchResult;
    }

    async dropdownTest() {
        const dropdownButton = await $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText');
        await dropdownButton.click();
        const dropdownEntry = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]')
        await dropdownEntry.click();
        const dropdownText = await dropdownButton.getText();
        return dropdownText;
    }

    async clickTest(){
        const clickButton = await $('//android.view.ViewGroup[@content-desc="button-Active"]');
        await clickButton.click();
        const clickEntry = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')
        const clickText = await clickEntry.getText();
        return clickText;
    }

}

module.exports = new TestPage()
