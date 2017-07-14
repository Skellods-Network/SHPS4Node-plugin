'use strict';

const mix = require('mics').mix;
const nml = require('node-mod-load');

const meth = nml('SHPS4Node-plugin').libs.meth;
const mixins = nml('SHPS4Node').libs.main.mixins;

module.exports = mix(mixins.base, mixins.init, superclass => class Plugin extends superclass {

    constructor() { super(); meth._init.call(this); }

    static init() { return meth.init(); }

    loadPlugins() { throw new Error('Not implemented: Plugin.loadPlugins()!'); }
});
