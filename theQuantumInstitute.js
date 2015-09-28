if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('listingOn', true);
  Session.setDefault('playerOpen', false);

//begin navbar helpers/events
  Template.navbar.helpers({

  });

  Template.navbar.events({
    'click .seeAll': function(){
      console.log('testing');
      Session.set('listingOn', true);
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

    listItems: function(){
      return [1,2,3,4,4,5,5,5];
    }
  })


  Template.listview.events({
    'click .listItem': function(evt){
      var targEl = evt.currentTarget.childNodes[3];
      if (!Session.get('playerOpen')) {
        $("#"+targEl.id).animate({
          marginTop: '400px',
        }, 800);
        //remove the open text
        var remover = targEl.childNodes[1].id;
        console.log(remover);
        $('#'+remover).remove();
        //change direction of arrow
        var arrowSwitch = targEl.childNodes[3].childNodes[1].innerText;
        console.log(arrowSwitch);
        // console.log(arrowSwitch[3].childNodes[1]);
        // console.log(arrowSwitch[3].childNodes[1].innerText);

        $("#"+targEl.id).css('borderTop', '2px solid gray');
        $("#"+targEl.id).css('background-color', '#273F60');
        $("#"+targEl.id).css('color', 'white');
        Session.set('playerOpen', true)
      } else {
        $('#'+targEl.id).animate({
          marginTop: '0px'
        })
        $("#"+targEl.id).css('border', 0);
        Session.set('playerOpen', false)
      }
    }
    // ,
    // 'click .clickBox': function(evt){
    //   var targEl = evt.currentTarget.id;
    //   if (Session.get('playerOpen')) {
    //       console.log('lets close it up');
    //
    //   } else {
    //     console.log('already closed');
    //   }
    // }
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
