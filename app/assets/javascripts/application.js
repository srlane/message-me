//= require jquery
//= require turbolinks
//= require semantic-ui
//= require_self
//= require_tree .

$(document).on('turbolinks:load', function () {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).parent().hide();
  });
})
