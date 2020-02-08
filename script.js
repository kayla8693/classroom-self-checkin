
//Start coding

  
$(document).ready(function(){
    $("#submit").click(function(){
      $("#myModal").modal();
    });
  });

$(document).ready(function () {

    
    var apiKey = 'a06d53a4d8132cb2c57dac5818e92924'
    console.log("ready");

    //Code for date in moment.js

    var m = moment();
    var curDay = m.format("dddd, MMMM Do YYYY h:mm:ss a");
    console.log(m.format("dddd, MMMM Do YYYY h:mm:ss a"));

    $("#currentDay").text(curDay);
})

    //Code for weather with click button
    //Need to download the images for this part of code from openweather website and
    //work on click button code if there is no button in index file. Need to change the names and ids.

//    //$.ajax({
//         url: "https://api.openweathermap.org/data/2.5/weather",
//         dataType: "json",
//         method: "GET",
//         data: { q: city, appid: apiKey, units: "imperial" },

//         success: function (data) {
//             console.log(data);
//             var forecast = "";
//             $.each(data.weather, function (index, val) {
//                 forecast += "<p><b>" + data.name + "</b><img src=" + val.icon + ".png></p>" +
//                     data.main.temperature + "&deg;F" + "|" + val.main + ", " + val.description
//             });

//             $("#current-section").html(forecast);
//         }
//     })
// })


// //Div class container should have two div ids:
// // div id = "start-screen" with a background and button <button id="start" class="start-btn">Go!</button>
// $(".start-btn").on("click", function (event) {
//     event.preventDefault();
//     //div id = "main-screen"
//     // $( ".main-screen" ).hide();
// })

// //Local Storage //Put in the very beginning
// var events = ["", "", "", "", "", "", "", "", ""]
// events = JSON.parse(localStorage.getItem("events")) || {};

// //Local Storage//Can be placed in a different place

// $(document).on("click", ".saveBtn", function (event) {
//     event.preventDefault();
//     console.log(this);
//     var userInput = $(this).siblings(".description").val();

//     var hour = $(this).attr("id");

//     console.log("hour", hour);
//     events[hour] = userInput;
//     console.log("events", events);
//     localStorage.setItem("events", JSON.stringify(events));

// })

