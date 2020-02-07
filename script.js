
//Start coding

  
$(document).ready(function(){
    $("#submit").click(function(){
      $("#myModal").modal();
    });
  });

$(document).ready(function () {
    var apiKey = 'a06d53a4d8132cb2c57dac5818e92924'
    console.log("ready");

    //Code for weather with click button
    //Need to download the images for this part of code from openweather website and
    //work on click button code if there is no button in index file. Need to change the names and ids.

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        dataType: "json",
        method: "GET",
        data: { q: city, appid: apiKey, units: "metric" },

        success: function (data) {
            console.log(data);
            var forecast = "";
            $.each(data.weather, function (index, val) {
                forecast += "<p><b>" + data.name + "</b><img src=" + val.icon + ".png></p>" +
                    data.main.temperature + "&deg;C" + "|" + val.main + ", " + val.description
            });

            $("#current-section").html(forecast);
        }
    })
})

//Showing current time using moment.js
//Creating id in index html #currentDay inside header and
//Creating in Gitbash another file as moment.js

$("#currentDay").text(curDay);

//Code for date in moment.js
//link in index file at the bottom pf a page:
// <script src="moment.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>

var m = moment();
var curDay = m.format("dddd, MMMM Do YYYY h:mm:ss a");
console.log(m.format("dddd, MMMM Do YYYY h:mm:ss a"));

//Div class container should have two div ids:
// div id = "start-screen" with a background and button <button id="start" class="start-btn">Go!</button>
$(".start-btn").on("click", function (event) {
    event.preventDefault();
    //div id = "main-screen"
    // $( ".main-screen" ).hide();
})