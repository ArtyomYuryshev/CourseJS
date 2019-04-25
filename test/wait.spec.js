const { describe, it } = require('mocha');
const { assert } = require('chai');
const logger = require('../utils/log.util')
const Wait = require('../ustil/wait.util')

describe('Wait Test', () => {
    it('should wait for true "true"', () => {
        const wait = new Wait();
        wait.forTrue(() => true, 5, 1000, 0, (result) => assert.isTrue(result))
    })

    it('should wait for true "true"', () => {
    const wait = new Wait();
    wait.forTrue(() => false, 5, 1000, 0, () => assert.isTrue(result))
    });
})
