var amqp = require('amqplib/callback_api');

var channel = null;

const rabbitmqUrl = process.env.RABBITMQ_URL;
if (!rabbitmqUrl) {
    throw new Error("RABBITMQ_URL is not defined");
}
amqp.connect(rabbitmqUrl, function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, ch) {
        if (error1) {
            throw error1;
        }
        channel = ch;
    });
});


sendToQueue = function (queue, msg) {
    channel.assertQueue(queue, {
        durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
}

module.exports = sendToQueue;