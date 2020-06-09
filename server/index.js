var Twit = require('twit')
var config = require('./config')


  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  app.use(bodyParser.urlencoded({extended:true}));
  app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
//   var T1 = new Twit(config)
//   T1.get('search/tweets', { q: 'banana since:2019-07-11', count:5 }, function(err, data, response){
//     if(err){console.log('error bro from g1')
// } else {
//     console.log(data)
// } })

})
  app.post('/', function (req, res) {
      console.log(req.body);
      var T = new Twit(config)
      var tweet =
      { status: req.body.status}
    T.post('statuses/update',tweet,tweeted);
     function tweeted(err, data, response) {
        if(err){console.log('error bro')
    } else {
        console.log("Posted")}
        
        T.get('search/tweets', { q:'vignesh_maverik', count:3,screen_name: 'vignesh_maverik' },  function (err, data, response) {
            if(err){console.log('error bro from g2')
        } else {
            for(i=0;i<data.statuses.length;i++){
                console.log(data.statuses[i]["text"])
                }
        }
          })
          
    
        
      }
      
      res.status(200).send(req.body.status);
    });
  
  var port = process.env.PORT || 7000;
  app.listen(port);
  console.log('Listening on http://localhost:' + port);


