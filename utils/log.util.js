"use strict";

const logWithTag = (tag, text) =>{
    console.log(`[${text}] ${new Date()} | ${text} [${tag}]`);
}

class log{
    info(text){
        let i = 12;
        console.log(i);
        logWithTag('INFO', text)
    
    }
    warning(text){
        logWithTag('WARNING', text)
    
    }
    error(text){
        logWithTag('ERROR', text)
    }
}

module.exports = new log();

/*
class log{
    info(text){
        console.log(`[INFO] ${new Date()} | ${text} [INFO]`);
    
    }
    warning(text){
        console.log(`[WARNING] ${text} [WARNING]`);
    
    }
    error(text){
        console.log(`[ERROR] ${text} [ERROR]`);
    }
}

module.exports = new log();
*/