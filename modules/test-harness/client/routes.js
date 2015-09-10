var testRoutes = FlowRouter.group({
  prefix: '/test',
  name: 'test'
});

testRoutes.route('/', {
  action: function() {
    BlazeLayout.render('masterLayout', {
      main: 'listEbfs'
    });
   }
});
