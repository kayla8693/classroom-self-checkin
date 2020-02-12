//Start coding

$(document).ready(function () {

    var students = ['inna', 'randy', 'kayla', 'colby'];
    var currentStudents = [];

    $('#start').on('click', function () {
        $('#start').addClass('hide');

        $("#submit").click(function () {
            $("#myModal").modal();
        });

        function setTime() {

            // Time we want to count down to
            var countDownTime = new Date("Feb 11, 2020 18:15:00").getTime();
            var timeEl = $('#time');

            var timerInterval = setInterval(function () {

                // Time we're counting down from, which is now
                var now = new Date().getTime();
                // time b/w end time and now
                var timeLeft = countDownTime - now;
                // calculates time for minutes and seconds
                var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                timeEl.text('Class starts in: ' + minutes + ":" + seconds);
                // stop timer when min and sec = 0
                if (minutes <= 0 && seconds <= 0) {
                    clearInterval(timerInterval);
                }

            }, 1000);

        };
        setTime();

        // Local Storage //
        var saveButton = $(".loginBtn");
        saveButton.on("click", function (event) {
            event.preventDefault();
            var studentName = $('#name').val();
            localStorage.setItem('student-name', studentName.toUpperCase());
            console.log(studentName);
            var studentItem = $("<li>");
            $('.studentBox').attr('style', 'border: solid');
            studentItem.text(studentName.toUpperCase());
            $("#listStudents").append(studentItem);
            currentStudents.push(studentName);

            var countDownTime = new Date("Feb 11, 2020 18:15:00").getTime();
            var now = new Date().getTime();
            var timeLeft = countDownTime - now;
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // GENDER AJAX CALL========================================================

            var queryURL = "https://gender-api.com/get?name=" + studentName + "&country=US&key=GxrJHcbvZbgfvPQxMN";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                console.log(response);
                var gender = $('<li>');
                console.log(response.gender)
                gender.text(response.gender.toUpperCase());
                $('.gender').attr('style', 'border: solid');
                $('#genderList').append(gender);

                // CHANGES NAME AND GENDER COLOR===================================

                console.log(students)
                console.log(currentStudents)

                if (minutes >= 2) {

                    $(studentItem).attr('style', 'color: green');
                    $(gender).attr({
                        style: 'color: green; list-style-type:circle'
                    });
                }

                else if (minutes <= 2 && seconds >= 0) {
                    $(studentItem).attr('style', 'color: red');
                    $(gender).attr({
                        style: 'color: red; list-style-type:circle'
                    });
                }

                else if (minutes <= 0 && seconds <= 0) {
                    $(studentItem).attr('style', 'color: black');
                    $(gender).addClass('absent');
                    $(gender).html('');

                };
                // ================================================================

            });
            // ====================================================================

            // Populates absent students in studentBox=========================

            if (minutes <= 0 && seconds <= 0) {
                for (var i = 0; i < students.length; i++) {
                    if (currentStudents.includes(students[i])) {
                        delete (students[i]);
                        console.log(students);
                    }

                    else {
                        var newItem = $("<li>");
                        newItem.text(students[i].toUpperCase());
                        newItem.addClass('absent');
                        $("#listStudents").append(newItem);
                        studentItem.addClass('absent');
                        studentItem.html("<p>You have been marked absent. Please see your teacher.</p>" + '<br>' + '<li>' + studentName.toUpperCase());
                        $('#submit').addClass('hide');

                        // var newGender = $('<li>');
                        // newGender.addClass('absent');
                        // console.log(response.gender)
                        // newGender.text(response.gender.toUpperCase());
                        // $('.gender').attr('style', 'border: solid');
                        // $('#genderList').append(newGender);
                    };
                };
            };
            // ====================================================================

            $('#name').val('');
            $('.modal').modal('hide');
        });

    });

    // running clock===============================================================
    setInterval(function () {

        //Code for date in moment.js
        var m = moment();
        var curDay = m.format("dddd, MMMM Do YYYY h:mm:ss A");

        $("#currentDay").text(curDay);

        // updates clock every 1 second
    }, 1000);
    // ===============================================================================
    console.log("ready");

    // ------------------------------------------------------------------------------------------------

    //Code for date in moment.js

    var m = moment();
    var curDay = m.format("dddd, MMMM Do YYYY h:mm:ss a");
    console.log(m.format("dddd, MMMM Do YYYY h:mm:ss a"));

    $("#currentDay").text(curDay);

      forecast += "<p><b>" + data.name + " </b><img class='imgWeather' src=\"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png\"></p>" +
        " Temperature: " + data.main.temp + "&deg;F" + " |<br> " + " Wind speed: " + data.wind.speed + " | Humidity: " + data.main.humidity + "%"
    //Weather API Call=============================================================
    var apiKey = '13002b03031d9418e8a4593147cb8d89';
    var city = "Dallas, US";

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        dataType: "json",
        method: "GET",
        data: { q: city, appid: apiKey, units: "imperial" },

        success: function (data) {
            var forecast = "";

            forecast += "<p><b>" + data.name + " </b><img class='imgWeather' src=\"https://openweathermap.org/img/w/" + data.weather[0].icon + ".png\"></p>" +
                " Temperature: " + data.main.temp + "&deg;F" + " |<br>" + " Wind speed: " + data.wind.speed + " mph| Humidity: " + data.main.humidity + "%"

            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/uvi",
                dataType: "json",
                method: "GET",
                data: { appid: apiKey, ...data.coord },
                success: function (data) {
                    forecast += " |<br> " + "UVI: " + data.value


                    $("#current-section").html(forecast);
                }
            });

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
    });
    // ============================================================================
});