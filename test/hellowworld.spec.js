const { describe, it } = require('mocha');
const logger = require('../utils/log.util')

describe('Hellow World TestSuite', () => {
    it('should write "Hellow World"',() => {
        logger.info('Hellow World');
    });
});