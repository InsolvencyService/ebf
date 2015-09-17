Template.admin_ebf_details.onCreated(function() {
  var self = this;
  self.subscribe("admin_ebf", FlowRouter.current().params.urn);
})



Template.admin_ebf_details.helpers({
  ebf: function(){
     return EBFs.findOne();
  }
});
