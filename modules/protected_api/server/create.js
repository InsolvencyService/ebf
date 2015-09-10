ProtectedPostRoutes.route('/protected/ebf/', function(params, req, res, next) {
  HandleCheckedRequest(req.body, res, function(data) {
  var ebf = new EBF(data);
    if (!ebf.validate()) {
      // throw new Meteor.Error(400, "POST data invalid, "+JSON.stringify(ebf.getValidationErrors()));
      ebf.throwValidationException();
    }
    ebf.save();
    return JSON.stringify(_.pick(ebf, '_id'));
  });
});
