'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:293343196722:intransit';
const orderItem = 'Recieved';

const order = {
  storeName: 'floral',
  orderItem,
}

const params = {
  TopicArn: topic,
  Message: JSON.stringify(order),
};

sns.publish(params).promise().then(console.log).catch(console.error);
