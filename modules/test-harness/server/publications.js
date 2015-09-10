Meteor.publish("EBFs", function(){
  // Meteor._sleepForMs(2000);
  return EBFs.find();
});
