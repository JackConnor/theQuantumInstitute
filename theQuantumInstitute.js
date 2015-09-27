if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

//begin navbar helpers/events
  Template.navbar.helpers({

  });

  Template.navbar.events({

  });

//begin listview helpers/events
  Template.hello.helpers({

  });

  Template.hello.events({

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log('whatup dawg');
  });
}
