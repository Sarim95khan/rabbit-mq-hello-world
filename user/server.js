const express = require('express');
const amqp = require('amqplib/callback_api');

const port = 3001;
const app = express();

app.get('/users', (req, res) => {
  const data = {
    id: 1,
    name: 'Sarim',
    age: 28,
  };

  amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }
      var queue = 'hello';
      var msg = 'Hello world';

      channel.assertQueue(queue, {
        durable: false,
      });

      channel.sendToQueue(queue, Buffer.from(msg));
      console.log(' [x] Sent %s', msg);
    });
  });

  res.send('I am from user service');
});

app.listen(port, () => console.log('User Port started at 3001'));
