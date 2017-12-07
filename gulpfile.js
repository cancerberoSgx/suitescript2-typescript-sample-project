var gulp = require('gulp')
var watch = require('gulp-watch')
var nsutil = require('netsuite-uploader-util')
var shell = require('shelljs')
var path = require('path')

// "Constants"
var watchFilter = 'output/**/*.js'//test2.js' // our entry point - you can use globs but upload will currently fail because of concurrent 
var account = '3690872'
var role = 3
var folderPath = 'SuiteScripts'
var applicationId = 'E2B6719E-C000-4769-B60A-89B72FB85E88'
var nsVersion = '2017_2'

gulp.task('default', () => {
    var client = new nsutil.SuiteTalk()
    var creds = nsutil.Credentials

    console.log('Configuring SuiteTalk client...')
    client.init(creds.email, creds.password, account, role, applicationId, nsVersion).then(() => {
        console.log('SuiteTalk client configured.')
        console.log('Watching: ' + watchFilter)

        watch(watchFilter, file => {
            var suiteScriptPath = folderPath + '/' + path.basename(file.path)

            console.log(`File changed. Uploading File: ${file.path} to file cabinet ${suiteScriptPath} ...`)

            client.upload(file.path, suiteScriptPath).then(r => {
                console.log('  Uploaded File: ' + suiteScriptPath)
            }, err => {
                console.log('  Failed to Upload File: ' + err, err, err.stack)
            })
        })
        shell.exec('node node_modules/typescript/bin/tsc -w', () => {
        })
    })
})