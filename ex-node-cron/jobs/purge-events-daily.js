var cron = require('cron');

var Config = require('../config');

// Ref: https://github.com/kelektiv/node-cron

/**
 * Create Cron Job - Executes at 12 AM every day
 */
var job = new cron.CronJob({
    cronTime: Config.executeEveryday,
    onTick: () => {
        console.log("===== Job Tick =====");
    },
    start: Config.startJobOnInit,
    timeZone: Config.timezone,
    onComplete: () => {
        console.log("===== Job is Stopped =====");
    }
});

/**
 * Start Cron Job
 */
job.start();
