Template.home.events({
  'submit .submit': function(event) {
    var input = event.target.steamId.value;
    // TODO: error handling
    Router.go('profile', { _id: input });
    // We return false to prevent default event handling
    return false;
  }
});
