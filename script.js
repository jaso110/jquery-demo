// jQuery, extract all Links From a URL

$(document).ready(function() {
    $('a').each(function() {
      console.log($(this).attr('href'));
      $(".link-demo").append("<a href=" + $(this).attr('href') + ">" + $(this).attr('href') + "</a><br><br>");
    });
});
