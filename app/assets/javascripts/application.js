//= require jquery
//= require turbolinks
//= require semantic-ui
//= require_self
//= require_tree .

scroll_bottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);      
  }
}

submit_message = function() {
  $('#message_body').on('keydown', function(e) {
    if (e.keyCode == 13) {
        $('button').click();
        e.target.value = "";
    };
  });
}

$(document).on('turbolinks:load', function () {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).parent().hide();
  });
  submit_message();
  scroll_bottom();  
})
