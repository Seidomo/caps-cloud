'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();
const faker = require('faker');

const topic = 'arn:aws:sns:us-west-2:293343196722:pickup';

let entry = { 
            store: 'Floral',
            orderID: faker.random.uuid(),
            customer: faker.name.findName(),
            address: `${faker.address.stateAbbr()}`,
            vendorId: 'https://sqs.us-west-2.amazonaws.com/293343196722/flowers-queue'
        };
    
  

setTimeout(()=>{
    const params = {
        TopicArn: topic,
        Message: JSON.stringify(entry),
      };
      sns.publish(params).promise().then(console.log).catch(console.error);
}, 3000)




