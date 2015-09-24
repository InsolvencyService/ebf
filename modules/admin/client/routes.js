var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin'
});

adminRoutes.route('/', {
  action: function() {
    BlazeLayout.render('masterLayout', {
      main: 'admin_search'
    });
   }
});

adminRoutes.route('/:urn', {
  name: 'admin-ebf-details',
  action: function() {
    BlazeLayout.render('masterLayout', {
      main: 'admin_ebf_details'
    })
  }
});
