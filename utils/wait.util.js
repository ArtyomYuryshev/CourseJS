const logger = require('./log.util');

class Wait {
    forTrue(action, maxCount, interval, count = 0, callback){
        if(maxCount <= count){
            logger.warning('Was not able to reach expected condition!')
            return callback(false);
        }

        if(action()){
            logger.warning('Was able to reach expected condition!')
            return callback(true); 
        }

        count++;
        setTimeout(() => this.forTrue(action, maxCount, interval, count = 0, callback), interval)

    }
}

module.exports = Wait;