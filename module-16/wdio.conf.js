// const path = require('path');
exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: ['./test/specs/**/*.js'],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "12",
        "deviceName": "Test",
        "automationName": "UiAutomator2",
        "appPackage": "com.woocommerce.android",
        "appActivity": ".ui.main.MainActivity",
        "appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
        //"app": path.join(__dirname, 'apps', '*.apk')
    }]
}