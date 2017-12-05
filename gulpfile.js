var gulp = require('gulp')
var watch = require('gulp-watch')
var nsutil = require('netsuite-uploader-util')
var shell = require('shelljs')
var path = require('path')

// "Constants"
var watchFilter = 'output/**/*.js'
var account = '3690872'
var role = 3
var folderPath = 'SuiteScripts'

gulp.task('default', () => {
    var client = new nsutil.SuiteTalk()
    var creds = nsutil.Credentials

    console.log('Configuring SuiteTalk client...')
    client.init(creds.email, creds.password, account, role).then(() => {
        console.log('SuiteTalk client configured.')
        console.log('Watching: ' + watchFilter)

        watch(watchFilter, file => {
            var suiteScriptPath = folderPath + '/' + path.basename(file.path)
            
            console.log(`File changed. Uploading File: ${file.path} to file cabinet ${suiteScriptPath} ...`)

            client.upload(file.path, suiteScriptPath).then(r=>{
                console.log('  Uploaded File: ' + suiteScriptPath)
            }, err => {
                console.log('  Failed to Upload File: ' + err)
            })
        })
        shell.exec('node node_modules/typescript/bin/tsc -w', function(){
            console.log('Exiting typescript watch')
        })
    })
})