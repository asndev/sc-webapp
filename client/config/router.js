Router.configure({
    layoutTemplate: 'default',
    loadingTemplate: 'loading'
});

var OnBeforeActions = {
    userSignedIn: function() {
        if (Meteor.userId()) {
            this.render('home');
        } else {
            this.next();
        }
    }
};

Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/user_profile', {
    name: 'user_profile',
    template: 'user_profile'
});
