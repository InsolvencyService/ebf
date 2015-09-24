Template.admin_search.onCreated(function() {
  var self = this;
  var urn = Session.set('urn_query', '');
  Tracker.autorun(function() {
    var urn = Session.get("urn_query");
  self.subscribe('admin_ebfs', urn);
  });

});
Template.admin_search.onRendered(function() {
  $("#urn").focus();
});

Template.admin_search.helpers({
  ebfs: function() {
    var urn = Session.get('urn_query');
    return EBFs.find({
      sourceType: 'BKT',
      sourceId: {
        $regex: urn + ".*",
        $options: 'i'
      }
    }, {
      sort: {
        createdAt: -1
      }
    });
  },
  // ebfsOutstandingActions: function() {
  //   return EBFs.find({sourceType: 'BKT', hasActions: true}, {sort: {createdAt: 1}, limit: 150  });
  // },
  searched: function() {
    var urn = Session.get('urn_query');
    return urn !== '';
  }
});

Template.admin_search.events({
  "keyup  #urn": function(e) {
    e.stopPropagation();
    Session.set('urn_query', $(e.target).val());
    return true;
  }
});
