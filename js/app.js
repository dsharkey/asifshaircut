$.get('https://fast-brushlands-4500.herokuapp.com/recent-activities', function( data ) {
  var source = $("#recent-activities").html();
  var template = Handlebars.compile(source);
  var html = template({recentActivities: data.result});
  $('#recent-activities-holder').append(html);
});