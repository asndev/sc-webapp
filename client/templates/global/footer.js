Template.footer.helpers({
  onlineUsers: function() {
    return Meteor.users.find({ "status.online": true }).count();
  }
})
