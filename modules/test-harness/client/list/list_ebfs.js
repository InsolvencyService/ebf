// Meteor.subscribe("EBFs"); Doing a template level sub instead.. Groovy!
Template.listEbfs.onCreated(function() {
  var self = this;
  self.subscribe('EBFs');
});

Template.listEbfs.helpers({
  list: function() {
    return EBFs.find();
  }
});
