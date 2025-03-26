

const ENTITY = "Person";
const sendToQueue = require("../rabbitmq/rabbitmq");

function processRequest(req, res){
    let msg = { 
        entity: ENTITY,
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