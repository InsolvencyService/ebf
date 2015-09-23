Template.admin_ebf_details.onCreated(function() {
  var self = this;
  self.subscribe("admin_ebf", FlowRouter.current().params.urn, {
    onReady: function() {
      self.subscribe("ebf_files", EBFs.findOne()._id);
    }
  });
})

Template.admin_ebf_details.helpers({
  ebf: function() {
    return EBFs.findOne();
  },
  ebf_files: function() {
    return EbfFiles.find();
  },
  isNotice: function() {
    return this.documentType == "notice";
  }
});


Template.admin_ebf_details.events({
  "click #upload-btn": function() {
    showDocumentTypePrompt();

  },
  'change #upload-field': FS.EventHandlers.insertFiles(EbfFiles, {
    metadata: function(fileObj) {
      return {
        ebf: EBFs.findOne()._id,
        urn: FlowRouter.current().params.urn,
        documentType: currentDocumentType
      };
    },
    before: function() {

    },
    after: function(error, fileObj) {
      console.log("Inserted", fileObj.name);
    }
  })
});
var currentDocumentType = "document";

var showDocumentTypePrompt = function() {
  bootbox.dialog({
    message: "What type of document is this?",
    title: "Specify a document type",
    buttons: {
      success: {
        label: "Notice",
        className: "btn-success",
        callback: function() {
          currentDocumentType = "notice";
          $("#upload-field").click();
        }
      },
      danger: {
        label: "Document",
        className: "btn-primary",
        callback: function() {
          currentDocumentType = "document";
          $("#upload-field").click();
        }
      }
    }
  });
}
