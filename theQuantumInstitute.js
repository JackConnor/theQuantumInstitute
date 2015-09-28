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
      return [1,2,3,4,5,6,7];
    }
  })


  Template.listview.events({
    'click .listItem': function(evt){
      // console.log(evt.currentTarget.childNodes);
      // var targEl = evt.currentTarget.childNodes[3];
      // var topTarg = evt.currentTarget.childNodes[1];
      // if (!Session.get('playerOpen')) {
      //   console.log('in');
      //   $("#"+targEl.id).animate({
      //     marginTop: '400px',
      //     backgroundColor: '#273F60',
      //     color: 'white'
      //   }, 800);
      //   $("#"+topTarg.id).animate({
      //     backgroundColor: '#273F60',
      //     color: 'white'
      //   }, 800)
      //
      //   $("#"+targEl.childNodes[1].id).animate({
      //      height: '0px'
      //    }, 800)
      //
      //    setTimeout(function(){
      //       var remover = targEl.childNodes[1];
      //       var $targ = $(remover);
      //       remover.innerText = ""
      //    }, 500);
      //   Session.set('playerOpen', true)
      // } else {
      //   // $('#'+targEl.id).animate({
      //   //   marginTop: '0px'
      //   // })
      //   // $("#"+targEl.id).css('border', 0);
      //   // Session.set('playerOpen', false)
      // }
    },
    'click .clickBox':function(evt){
      console.log(evt.currentTarget);
      console.log($(evt.currentTarget.parentNode.childNodes[1]));
      console.log(evt.currentTarget.childNodes);
      var targEl = evt.currentTarget;
      console.log(targEl);
      var topTarg = evt.currentTarget.parentNode.childNodes[1];
      console.log(topTarg);
      var target = evt.currentTarget;
      console.log(evt.currentTarget.style.color);
      if (!Session.get('playerOpen')) {
        console.log('in');
        console.log(targEl);
        $("#"+targEl.id).animate({
          marginTop: '400px',
          backgroundColor: '#516E65',
          color: 'white'
        }, 800);
        $("#"+topTarg.id).animate({
          backgroundColor: '#516E65',
          color: 'white'
        }, 800)

        $("#"+targEl.childNodes[1].id).animate({
           height: '0px'
         }, 800)

         setTimeout(function(){
            var remover = targEl.childNodes[1];
            console.log(remover.childNodes);
            console.log(remover.childNodes[0]);
            console.log(remover.childNodes[1]);
            var $targ = $(remover);
            remover.childNodes[1].innerText = ""
         }, 500);
        Session.set('playerOpen', true)
      } else if( Session.get('playerOpen')){
          console.log(target);
          var topRow = target.parentNode.childNodes[1];
          var bottomRow = target.parentNode.childNodes[3]
          console.log($(topRow));
          console.log($(bottomRow));
          console.log(topRow.style.color);
          $(topRow).animate({
            color: 'black',
            backgroundColor: '#7BAFA0',
          }, 800);
          $(bottomRow).animate({
            color: 'black',
            backgroundColor: '#7BAFA0',
            marginTop: '0px',
          }, 800)
          $("#"+targEl.childNodes[1].id).animate({
             height: '50px'
           }, 800)
           setTimeout(function(){
              var adder = targEl.childNodes[1];
              var drilled = $(adder)[0].childNodes[1];
              console.log(adder.innerHtml);
              console.log(adder.innerText);
              drilled.innerText = "Open Player and Listen Now (opened)"
           }, 500);

          Session.set('playerOpen', false);
        }
      }
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
