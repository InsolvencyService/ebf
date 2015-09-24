Meteor.publish("admin_ebfs", function(urn) {
  // Meteor._sleepForMs(2000);
  // console.log("")
  if (urn){
    check(urn, String);

    return EBFs.find({sourceType: 'BKT', sourceId: {$regex: urn+".*", $options: 'i'}}, {sort: {createdAt: -1}, limit: 15  });
  }
  return EBFs.find({}, {sort: {createdAt: -1}, limit: 15  });
});

Meteor.publish("admin_ebf", function(urn) {

  return EBFs.find({
    sourceType: 'BKT',
    sourceId: urn
  });
});


Meteor.publish("ebf_files", function(_id) {
  return EbfFiles.find({ebf: _id});
});
