var AWS = require('aws-sdk')
var credentials = require('../../aws-creds')

AWS.config.update(credentials)

var docClient = new AWS.DynamoDB.DocumentClient()
var TableName = 'write-with-friends'

var SparkPost = require('sparkpost');
var client = new SparkPost('90c369a5fa6897da5ef58c1405bf994b04d94dd3');

var qs = require('querystring');

module.exports = function(app) {

  app.post('/story', function(req, res) {
    res.json({status: 'in progress'})
  })

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
            res.json(err)
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.json(data)
        }
    });
  })

  app.post('/stories/block', function(req, res) {
    var obj = {
      author: req.body.author,
      pre: req.body.pre,
      content: req.body.content,
      post: req.body.post,
      likes: 0
    }
    var params = {
      TableName: TableName,
      Key:{
          id: req.body.id
      },
      UpdateExpression: "set #attrName = list_append(#attrName, :obj)",
      ExpressionAttributeNames : {
        "#attrName" : "blocks"
      },
      ExpressionAttributeValues: {
        ":obj": [obj]
      },
      ReturnValues:"UPDATED_NEW"
    };

    docClient.update(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            res.json(err)
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
            res.json(data)
        }
    });


  })

  app.get('/stories', function(req, res) {
    var params = {
      TableName: TableName,
      ProjectionExpression: 'title, authors, followers, likes'
    };

    docClient.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            res.json(err)
        } else {
            console.log("Scan succeeded:", JSON.stringify(data, null, 2));
            res.json(data)
        }
    });
  });

  app.get('/commentMetrics', function(req, res) {
    var options = {
      uri: 'metrics/deliverability?from=2016-07-11T08:00&to=2017-07-20T09:00' +
      '&metrics=count_delivered,count_unique_confirmed_opened,count_unique_clicked' +
      '&campaigns=scott'
    };
    client.get(options)
    .then(data => {
      res.status(200).send(data.results);
    })
    .catch(err => {
      console.log(err);
    });
  });

  app.post('/shareVote', function(req, res) {
    client.transmissions.send({
      options: {
        sandbox: false,
        click_tracking: true,
        open_tracking: true,
      },
      campaign_id: req.body.campaignName,
      content: {
        from: 'zhang@sillystorystitcher.com',
        subject: 'Vote on this story!',
        html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
      },
      recipients: req.body.emails.map(function(email) { return { address: email } })
    }).then(function(data) {
      res.status(200).send(data)
    });
  });
}
