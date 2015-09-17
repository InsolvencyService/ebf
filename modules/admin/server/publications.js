Meteor.publish("admin_ebfs", function() {
  // Meteor._sleepForMs(2000);
  // console.log("")
  // if (urn){
  //   check(urn);
  //   return EBFs.find({sourceType: 'BKT', 'sourceId': urn});
  // }
  return EBFs.find();
});

Meteor.publish("admin_ebf", function(urn) {

  return EBFs.find({
    sourceType: 'BKT',
    sourceId: urn
  });
});
