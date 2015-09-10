var bodyParser = Meteor.npmRequire('body-parser');
Picker.middleware(bodyParser.urlencoded({
  extended: false
}));
Picker.middleware(bodyParser.json());
Picker.middleware(bodyParser.json({
  type: 'application/*+json'
}));


ProtectedPostRoutes = Picker.filter(function(req, res) {
  return req.method == "POST";
});

HandleCheckedRequest = function(data, res, callback) {
  try {
    res.end(callback(data));
  } catch (e) {
    res.statusCode = 400;
    var message = e.message;
    if (e.reason){
      message = JSON.stringify({errors: e.reason});
    }
    res.end(message);
  }
}
