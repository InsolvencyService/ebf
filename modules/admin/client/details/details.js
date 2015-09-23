Template.admin_ebf_details.onCreated(function() {
  var self = this;
  self.subscribe("admin_ebf", FlowRouter.current().params.urn, {onReady: function() {
    self.subscribe("ebf_files",  EBFs.findOne()._id);
  }});
})

Template.admin_ebf_details.helpers({
  ebf: function() {
    return EBFs.findOne();
  },
  ebf_files: function() {
    return EbfFiles.find();
  }
});


Template.admin_ebf_details.events({
  "click #upload-btn": function() {
    $("#upload-field").click();
  },
  'change #upload-field': FS.EventHandlers.insertFiles(EbfFiles, {
     metadata: function (fileObj) {
       return {
         ebf: EBFs.findOne()._id,
         urn: FlowRouter.current().params.urn
       };
     },
     after: function (error, fileObj) {
       console.log("Inserted", fileObj.name);
     }
   })
});
