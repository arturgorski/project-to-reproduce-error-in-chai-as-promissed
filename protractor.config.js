exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['./lib.feature'],
    cucumberOpts: {
        require: './stepDefinitions.js',
        tags: '@dev',
        format: 'pretty'
    }
};
