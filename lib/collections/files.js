EbfFiles = new FS.Collection("EbfFiles", {
  stores: [new FS.Store.FileSystem("EbfFiles", {
    path: "~/uploads"
  })]
});

EbfFiles.allow({
  insert: function() {
    // add custom authentication code here
    return true;
  },
  update: function() {
    return true;
  },
  download: function(userId, fileObj) {
    return true
  }
});
