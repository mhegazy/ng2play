var args = require('yargs').argv;
var gulp = require('gulp');
var path = require('path');
var cp = require('child_process');
var $ = require('gulp-load-plugins')({ lazy: true });
 
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('ts-watcher', function() {
    gulp.watch('./src', ['ts-compile']);
});

gulp.task('ts-compile', function(done) {    
    runTSC('./src', done);
});

function runTSC(directory, done) {
    var tscjs = path.join(process.cwd(), 'node_modules/typescript/bin/tsc.js');
    var childProcess = cp.spawn('node', [tscjs, '-p', directory], { cwd: process.cwd() });
    childProcess.stdout.on('data', function (data) {
        // Ticino will read the output
        console.log(data.toString());
    });
    childProcess.stderr.on('data', function (data) {
        // Ticino will read the output
        console.log(data.toString());
    });
    childProcess.on('close', function () {
        done();
    });
}
