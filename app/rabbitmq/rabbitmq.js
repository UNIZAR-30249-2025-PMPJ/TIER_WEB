var amqp = require('amqplib/callback_api');

var connection = null;
var channel = null;

const QUEUE = process.env.RABBITMQ_QUEUE || "default_queue";

const rabbitmqUrl = process.env.RABBITMQ_URL;
if (!rabbitmqUrl) {
    throw new Error("RABBITMQ_URL is not defined");
}
amqp.connect(rabbitmqUrl, function (error0, con) {
    if (error0) {
        throw error0;
    }
    connection = con
    con.createChannel(function (error1, ch) {
        if (error1) {
            throw error1;
        }
        channel = ch;
    });
});


sendToQueue = function (msg, callback) {
    try {

        channel.assertQueue('', {
            exclusive: true
        }, function (error2, q) {
            if (error2) {
                throw error2;
            }
            var correlationId = generateUuid();

            console.log(' [x] Requesting ', msg);

            channel.consume(q.queue, function (msg) {
                if (msg.properties.correlationId == correlationId) {
                    console.log(' [.] Got %s', msg.content.toString());
                    callback(JSON.parse(msg.content));
                }
            }, {
                noAck: true
            });

            channel.sendToQueue(QUEUE,
                Buffer.from(JSON.stringify(msg)), {
                correlationId: correlationId,
                replyTo: q.queue
            });
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

function generateUuid() {
    return Math.random().toString() +
        Math.random().toString() +
        Math.random().toString();
}

module.exports = sendToQueue;