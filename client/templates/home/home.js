Template.home.events({
  'submit .submit': function(event) {
    var input = event.target.steamId.value;
    Router.go('profile', { _id: input });
    
    return false;
  }
});
