exports.config = {
    hostname: 'locahost',
    port: 4723,
    path: 'wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha'
    capabilities:[{
        "platformName": "Android",
        "platformVersion": "13.0",
        "deviceName": "Pixel3",
        "automationName": "UiAutomator2",
    }]
}