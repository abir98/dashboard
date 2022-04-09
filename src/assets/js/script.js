$(function () {
  $('.navbar-toggle').click(function () {
      $('.navbar-nav').toggleClass('slide-in');
      $('.side-body').toggleClass('body-slide-in');
      $('#search').removeClass('in').addClass('collapse').slideUp(200);

      /// uncomment code for absolute positioning tweek see top comment in css
      //$('.absolute-wrapper').toggleClass('slide-in');

  });

 // Remove menu for searching
 $('#search-trigger').click(function () {
      $('.navbar-nav').removeClass('slide-in');
      $('.side-body').removeClass('body-slide-in');

      /// uncomment code for absolute positioning tweek see top comment in css
      //$('.absolute-wrapper').removeClass('slide-in');

  });
});
$(document).ready(function() {
  var panels = $('.user-infos');
  var panelsButton = $('.dropdown-user');
  panels.hide();

  //Click dropdown
  panelsButton.click(function() {
      //get data-for attribute
      var dataFor = $(this).attr('data-for');
      var idFor = $(dataFor);

      //current button
      var currentButton = $(this);
      idFor.slideToggle(400, function() {
          //Completed slidetoggle
          if(idFor.is(':visible'))
          {
              currentButton.html('<i class="glyphicon glyphicon-chevron-up text-muted"></i>');
          }
          else
          {
              currentButton.html('<i class="glyphicon glyphicon-chevron-down text-muted"></i>');
          }
      })
  });


  $('[data-toggle="tooltip"]').tooltip();

  $('button').click(function(e) {
      e.preventDefault();
      alert("This is a demo.\n :-)");
  });
});
