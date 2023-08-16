const path = require('path');
exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    specs: ['./test/specs/**/*.js'],
    framework: 'mocha',
    reporters: ['spec'],
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "12",
        "appium:deviceName": "Test",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".MainActivity",
        "appium:app": path.join(__dirname, 'apps', 'wdio.apk')
    }]
}