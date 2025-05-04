

const sendToQueue = require("../rabbitmq/rabbitmq");

function processRequest(req, res, entity, operation){
    let msg = { 
        entity: entity,
        operation: operation,
        action: req.method,
        body: req.body,
        header: req.headers,
        params: req.params,
        query: req.query,
      };
      console.log("Sending message to queue:", msg);
      try {
        sendToQueue(msg, function (response) {
          response = JSON.parse(response);
          res.status(response.status).send(response.data);
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
}

module.exports = {
    processRequest 
}