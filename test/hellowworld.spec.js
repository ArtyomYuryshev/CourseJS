const { describe, it } = require('mocha');
const logger = require('../utils/log.util')
//const { describe, it } = require('chai');
//const logger = require('../utils/dateTime.util')

describe('Hellow World TestSuite', () => {
    it('should write "Hellow World"',() => {
        logger.info('Hellow World');
    });
});
