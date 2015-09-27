if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('listingOn', true);

//begin navbar helpers/events
  Template.navbar.helpers({

  });

  Template.navbar.events({
    'click .seeAll': function(){
      console.log('testing');
      Session.set('listingOn', true)
    },
    'click .contact': function(){
      console.log('testing');
      Session.set('listingOn', false)
    }

  });

// begin bodyContainer helpers/events
  Template.bodyContainer.helpers({
    // listing == + will give us the listview, otherwise the contact page
    listing: function(){
      return Session.get('listingOn');
    }

  });

  Template.bodyContainer.events({

  });

  // begin listview helpers/events
  Template.listview.helpers({

  })

  Template.listview.events({

  })

  // begin contact helpers/events
  Template.contact.helpers({

  })

  Template.contact.events({

  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log('whatup dawg');
  });
}
