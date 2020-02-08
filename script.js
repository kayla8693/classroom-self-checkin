// variable name  
var name = "randy";
// Creating an AJAX call for the specific name to identify gender
var queryURL = "https://gender-api.com/get?name=" + name + "&country=US&key=uQRWjsZJRjvpRFcAqV";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {

    console.log(response);

});