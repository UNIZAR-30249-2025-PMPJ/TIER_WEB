

const sendToQueue = require("../rabbitmq/rabbitmq");

function processRequest(req, res, entity, operation){
    let msg = { 
        entity: entity,
        operation: operation,
        action: req.method,
        data: req.body,
        header: req.headers,
        params: req.params
      };
      try {
        sendToQueue(msg, function (response) {
          res.send(response);
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
}

module.exports = {
    processRequest
}