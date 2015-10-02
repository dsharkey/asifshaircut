function getParameterByName(name) {
	var regexS = "[\\?&]" + name + "=([^&#]*)",
		regex = new RegExp(regexS),
		results = regex.exec(window.location.search);
	if (results == null) {
		return "";
	} else {
		return decodeURIComponent(results[1].replace(/\+/g, " "));
	}
}
var paramString = ""
if (getParameterByName("lead_id")) {
	paramString = "?lead_id=" + getParameterByName("lead_id")
} else if (getParameterByName("page_url")) {
	paramString = "?page_url=" + getParameterByName("page_url")
}
$.get('https://fast-brushlands-4500.herokuapp.com/recent-activities' + paramString, function(data) {
	var source = $("#recent-activities").html();
	var template = Handlebars.compile(source);
	var html = template({
		recentActivities: data.activities
	});
	$('#recent-activities-holder').append(html);
});