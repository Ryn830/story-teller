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

var SparkPost = require('sparkpost');
var client = new SparkPost('90c369a5fa6897da5ef58c1405bf994b04d94dd3');

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
      Key: {
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
  });

  app.post('/shareVote', function(req, res) {
    console.log('WTF')
    client.transmissions.send({
      options: {
        click_tracking: true,
        open_tracking: true,
      },
      content: {
        from: 'testing@sparkpostbox.com',
        subject: 'Hello, World!',
        html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
      },
      recipients: [
        {address: 'scottzhang235@gmail.com'}
      ]
    }).then(function(data) {
      res.status(200).send('cool')
    });
  });
}
