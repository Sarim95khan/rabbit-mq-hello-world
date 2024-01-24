const express = require('express');
const amqp = require('amqplib/callback_api');

const port = 3000;
const app = express();

app.get('/products', (req, res) => {
  amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      var queue = 'hello';

      channel.assertQueue(queue, {
        durable: false,
      });

      console.log(
        ' [*] Waiting for messages in %s. To exit press CTRL+C',
        queue
      );

      channel.consume(
        queue,
        function (msg) {
          console.log(' [x] Received %s', msg.content.toString());
        },
        {
          noAck: true,
        }
      );
    });
  });
});

app.listen(port, () => console.log('product Port started at 3000'));
