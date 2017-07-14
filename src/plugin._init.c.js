'use strict';

const libs = require('node-mod-load')('SHPS4Node-plugin').libs;
const VError = require('verror').VError;

const meth = libs.meth;
let initialized = false;

meth._init = function() {
    if (initialized) {
        throw new VError({
            name: 'Already initialized!',
            cause: new Error('Cannot re-initialize module Plugin!'),
            info: {
                errno: 'EALREADYINITIALIZED',
            },
        });
    }

    initialized = true;
    Object.assign(this, meth);
};
