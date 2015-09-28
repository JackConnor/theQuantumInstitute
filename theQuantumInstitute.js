if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('listingOn', true);
  Session.setDefault('playerOpen', false);

//begin navbar helpers/events
  Template.navbar.helpers({

  });

  Template.navbar.events({
    'click .seeAll': function(){
      Session.set('listingOn', true);
    },
    'click .contact': function(){
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
      var data = [
        {
          'id':1,
          'url':'cDwRY1ny67Q',
          'name': 'Mining Asteroids for fun and profit'
        },
        {
          'id':2,
          'url':'Ylvo33QhBdU',
          'name':
          'The Big Bang Episode'
        },
        {'id':3,
          'url':'7GM3QbsJpUM',
          'name': 'Whats Up With All the Robots'
        },
        {
          'id': 4,
          'url':"K_CVJlvYQs0",
          'name': 'Particle Accelerators'
        },
        {'id':5,
        'url': 'ZwrOe9MRGpg',
        'name': 'Interstellar Travel Planning'
      }
    ];
    for (var i = 0; i < data.length; i++) {
      Session.setDefault("playerOpen"+data[i].id, false);
    }
    return data;
    }
  })


  Template.listview.events({
    'click .clickBox':function(evt){
      //begin popping down div to show player
      var targEl = evt.currentTarget;
      var topTarg = evt.currentTarget.parentNode.childNodes[1];
      var target = evt.currentTarget;
      var playerContainer = target.parentNode.childNodes[3];
      if (!Session.get('playerOpen'+targEl.id)) {
        $("#"+targEl.id).animate({
          backgroundColor: '#516E65',
          color: 'white'
        }, 800);
        $(playerContainer).animate({
          height: '400px'
        }, 800)
        $("#"+topTarg.id).animate({
          backgroundColor: '#516E65',
          color: 'white'
        }, 800)

        $("#"+targEl.childNodes[1].id).animate({
           height: '0px'
         }, 800)

         setTimeout(function(){
            var remover = targEl.childNodes[1];
            remover.childNodes[1].innerText = "";
         }, 500);
        Session.set('playerOpen'+targEl.id, true)
      } else if( Session.get('playerOpen'+targEl.id)){
          var topRow = target.parentNode.childNodes[1];
          var bottomRow = target.parentNode.childNodes[5]
          $(topRow).animate({
            color: 'black',
            backgroundColor: '#7BAFA0',
          }, 800);
          $(playerContainer).animate({
            height: '0px'
          }, 800)
          $(bottomRow).animate({
            color: 'black',
            backgroundColor: '#7BAFA0'
          }, 800)
          $("#"+targEl.childNodes[1].id).animate({
             height: '50px'
           }, 800)
           setTimeout(function(){
              var adder = targEl.childNodes[1];
              var drilled = $(adder)[0].childNodes[1];
              drilled.innerText = "Open Player and Listen Now (opened)"
           }, 500)
          Session.set('playerOpen'+targEl.id, false);
        }
        ////begin player logic
        var player;
        var playerId = 'player'+targEl.id;
        if (Session.get('playerOpen'+targEl.id)) {
          var vidUrl = targEl.className.split(' ')[2];
          console.log(vidUrl);
          var tag = document.createElement('script');

          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          $('#player'+targEl.id).animate({
            height: '400px'
          });

          // 3. This function creates an <iframe> (and YouTube player)
          //    after the API code downloads.
          var player;
          setTimeout(function onYouTubeIframeAPIReady() {
            var playerId = 'player'+targEl.id;
            console.log(playerId);
            player = new YT.Player(playerId, {
              height: '400',
              width: '655',
              videoId: vidUrl,
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          }, 700)
          onYouTubeIframeAPIReady();
          // 4. The API will call this function when the video player is ready.
          function onPlayerReady(event) {
            event.target.playVideo();
          }

          // 5. The API calls this function when the player's state changes.
          //    The function indicates that when playing a video (state=1),
          //    the player should play for six seconds and then stop.
          var done = false;
          function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
              setTimeout(stopVideo, 6000);
              done = true;
            }
          }
          function stopVideo() {
            player.stopVideo();
          }
        }
        else if(!Session.get('playerOpen'+targEl.id)){
          function stopVideo() {
            player.stopVideo();
          }
          $(playerContainer).animate({
            height: '0px'
          })
          $('#player'+targEl.id).animate({
            height: '0px'
          }, 800);
        }
  ///end player logic

      },
      'mouseenter .clickBox': function(evt){
        $("#"+evt.target.id).css('backgroundColor', '#436673');
        var openText = $("#"+evt.target.id)[0].childNodes[1].childNodes[1];
        $(openText).css({
        color: 'white'
      });

      },
      'mouseleave .clickBox': function(evt){
        $("#"+evt.target.id).css('backgroundColor', '#7BAFA0');
        var openText = $("#"+evt.target.id)[0].childNodes[1].childNodes[1];
          $(openText).css({
          color: 'black'
        });
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
