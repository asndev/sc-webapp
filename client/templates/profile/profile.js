Template.profile.helpers({
  profileData: function() {
    console.log('SteamAccount in Profile Helper: ', !!this.steamAccount);
    return this.steamAccount;
  },

  appsData: function() {
    console.log('Apps in Profile Helper: ', !!this.appsData);
    return this.appsData;
  }

});
