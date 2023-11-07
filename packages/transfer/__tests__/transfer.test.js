'use strict';

const transfer = require('..');
const assert = require('assert').strict;

assert.strictEqual(transfer(), 'Hello from transfer');
console.info('transfer tests passed');
