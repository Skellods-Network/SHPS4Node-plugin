'use strict';

const path = require('path');

const nmlComl = require('node-mod-load')('SHPS4Node-plugin');

nmlComl.addMeta('meth', {});
nmlComl.addDir(__dirname + path.sep + 'interface', true);
nmlComl.addDir(__dirname + path.sep + 'src', true);

module.exports = nmlComl.libs['Plugin.h'];
