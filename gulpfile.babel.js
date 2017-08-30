'use strict';

import gulp from 'gulp';
import path from 'path';
import rename from 'gulp-rename';
import template from 'gulp-template';
import yargs from 'yargs';

let root = 'src';

let resolveToComponents = (glob = '') => {
    return path.join(root, glob);
};

let paths = {
    output: root,
    blankJsTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
};

gulp.task('component', () => {
    const cap = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };
    const name = yargs.argv.name;
    const module = yargs.argv.module;
    const parentPath = yargs.argv.parent || '';
    const destPath = path.join(resolveToComponents(), parentPath, name);

    return gulp.src(paths.blankJsTemplates)
        .pipe(template({
            name: name,
            upName: cap(name),
            module: module,
            upModule: cap(module),
            moduleName: module + cap(name),
            upModuleName: cap(module) + cap(name)
        }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('temp', module + '-' + name);
        }))
        .pipe(gulp.dest(destPath));
});