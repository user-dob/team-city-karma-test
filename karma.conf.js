module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [
            './test/users.spec.js'
        ],
        exclude: [],
    })
}