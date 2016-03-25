// Scripts for Angular To Do List App
$(document).ready(function() {

  // Triggers modal launch
  $('.modal-trigger').leanModal();

  // Activate side-nav for mobile
  $(".button-collapse").sideNav();

  // For messages to appear on page from req.query.msg
  $('.tooltipped').tooltip({delay: 50});

}); //end of doc.ready