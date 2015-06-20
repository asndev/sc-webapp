Template.userdashboard.helpers({
  username: function() {
    var user = Meteor.user();
    return user && user.profile && user.profile.name;
  },

  avatarUrl: function() {
    var user = Meteor.user();
    if (!user) {
      return;
    }
    var url = user.services.steam.avatar.full;
    return url;
  }
});
