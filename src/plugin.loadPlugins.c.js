'use strict';

const nml = require('node-mod-load');

const coml = nml('SHPS4Node').libs.coml;
const libs = nml('SHPS4Node-plugin').libs;
const main = nml('SHPS4Node').libs.main;
const meth = libs.meth;

meth.loadPlugins = function() {
    main.writeLog(main.logLevels.trace, { mod: 'PLUGIN', msg: 'plugin.loadPlugins()' });

    const plugins = nml('SHPS4Node-plugins');

    const task = coml.startTask('Load plugins');
    plugins.on('detect', $mod => task.interim(task.result.ok, `Found plugin "${$mod}"`));
    plugins.on('error', ($mod, $p, $e) => task.interim(task.result.error, `Could not load plugin "${$mod}"\n${$e.toString()}`));
    plugins.on('load', $mod => {
        // todo: check if all loaded plugins export the correct plugin signature
        main.writeLog(main.logLevels.warning, { mod: 'PLUGIN', msg: 'fixme: check plugin signature' });
        // todo: check if the plugin is compatible with this version of SHPS
        main.writeLog(main.logLevels.warning, { mod: 'PLUGIN', msg: 'fixme: check plugin compatibility' });
        // todo: check the dependencies and install everything which is still missing
        main.writeLog(main.logLevels.warning, { mod: 'PLUGIN', msg: 'fixme: install plugin dependencies' });

        task.interim(task.result.ok, `Loaded plugin "${$mod}"`)
    });

    plugins.addDir(main.directories.plugins, true);

    main.writeLog(main.logLevels.trace, { mod: 'PLUGIN', msg: '\\\\ plugin.loadPlugins()' });
};
