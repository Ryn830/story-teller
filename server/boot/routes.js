var AWS = require('aws-sdk')
var credentials = require('../../aws-creds')

AWS.config.update(credentials)

var docClient = new AWS.DynamoDB.DocumentClient()
var TableName = 'write-with-friends'
var params = {
  TableName: TableName,
  Item: {
    id: 'hello-world',
    data: 'other stuff'
  }
}

module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {


    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });



    res.json({
      data: 'pong'
    });
  });

  app.get('/story', function(req, res) {
    var params = {
      TableName: TableName,
      Key:{
          id: req.query.id
      }
    };

    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.json(data)
        }
    });
  })
}
