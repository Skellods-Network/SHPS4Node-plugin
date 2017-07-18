'use strict';

const libs = require('node-mod-load')('SHPS4Node-plugin').libs;

const meth = libs.meth;

meth._init = function() {
    Object.assign(this, meth);
};
