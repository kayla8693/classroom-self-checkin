//Start coding
$(document).ready(function () {
  $("#submit").click(function () {
    $("#myModal").modal();
  });
  // running clock
  setInterval(function () {
    //Code for date in moment.js

    var m = moment();
    var curDay = m.format("dddd, MMMM Do YYYY h:mm:ss A");
    console.log(curDay);

    $("#currentDay").text(curDay);

    // updates clock every 1 second
  }, 1000);

  // var apiKey = 'a06d53a4d8132cb2c57dac5818e92924'


  console.log("ready");

  //Code for date in moment.js

  var m = moment();
  var curDay = m.format("dddd, MMMM Do YYYY h:mm:ss a");
  console.log(m.format("dddd, MMMM Do YYYY h:mm:ss a"));

  $("#currentDay").text(curDay);


  //Weather API Call
  var apiKey = '13002b03031d9418e8a4593147cb8d89';
  var location = "Dallas, US";


  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather",
    dataType: "json",
    method: "GET",
    data: { q: location, appid: apiKey, units: "imperial" },

    success: function (data) {
      console.log(data);
      var forecast = "";

      forecast += "<p><b>" + data.name + " </b><img class='imgWeather' src=\"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png\"></p>" +
        " Temperature: " + data.main.temp + "&deg;F" + " | " + " Wind speed: " + data.wind.speed + " | Humidity: " + data.main.humidity + "%"

      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/uvi",
        dataType: "json",
        method: "GET",
        data: { appid: apiKey, ...data.coord },
        success: function (data) {
          console.log(data);
          console.log(forecast);
          forecast += " |<br> " + "UVI: " + data.value

          $("#current-section").html(forecast);
        }
      })



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
      // }
      // })
      // })

    }
  })
});

