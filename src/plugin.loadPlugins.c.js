'use strict';

const nml = require('node-mod-load');

const coml = nml('SHPS4Node').libs.coml;
const libs = nml('SHPS4Node-plugin').libs;
const main = nml('SHPS4Node').libs.main;
const meth = libs.meth;

meth.loadPlugins = function() {
    const plugins = nml('SHPS4Node-plugins');

    const task = coml.startTask('Load plugins');
    plugins.on('detect', $mod => task.interim(task.result.ok, `Found plugin "${$mod}"`));
    plugins.on('error', ($mod, $p, $e) => task.interim(task.result.error, `Could notload plugin "${$mod}"\n${$e.toString()}`));
    plugins.on('load', $mod => {
        // todo: check if all loaded plugins export the correct plugin signature
        // todo: check if the plugin is compatible with this version of SHPS
        // todo: check the dependencies and install everything which is still missing
        task.interim(task.result.ok, `Loaded plugin "${$mod}"`)
    });

    plugins.addDir(main.directories.plugins, true);
};
