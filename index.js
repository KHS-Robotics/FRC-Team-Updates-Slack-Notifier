'use strict';

const config = {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    REGION: 'us-east-1',
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    LATEST_TEAM_UPDATE_KEY: process.env.LATEST_TEAM_UPDATE_KEY,
    SLACK_WEBHOOKS: [process.env.SLACK_WEBHOOK_URI]
};

const checkForTeamUpdate = require('./src/checkForTeamUpdate');
checkForTeamUpdate(config)
    .then(updated => console.log('Updated =>', updated))
    .catch(err => console.error(err));
