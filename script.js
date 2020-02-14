//Start coding

$(document).ready(function () {

    var students = ['inna', 'randy', 'kayla', 'colby'];
    var currentStudents = [];

    $('#start').on('click', function () {
        $('#start').addClass('hide');

        $("#submit").click(function () {
            $("#myModal").modal();
        });

        // Creates timer; referenced Andrei on stackoverflow======================================================
        var time = 120
        var duration = moment.duration(time * 1000, 'milliseconds');
        var interval = 1000

        var timerInterval = setInterval(function () {
            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            var newTime = moment(duration.asMilliseconds()).format('mm:ss')
            $('#time').text('Class starts in: ' + newTime);

            if (newTime == '00:00') {
                clearInterval(timerInterval);
            };

        }, interval);
        // =======================================================================================================

        // Local Storage //
        var saveButton = $(".loginBtn");
        saveButton.on("click", function (event) {
            event.preventDefault();
            var studentName = $('#name').val();
            localStorage.setItem('student-name', studentName.toUpperCase());
            var studentItem = $("<li>");
            $('.studentBox').attr('style', 'border: solid');
            $('.gender').attr('style', 'border: solid');
            studentItem.text(studentName.toUpperCase());
            $("#listStudents").append(studentItem);
            currentStudents.push(studentName);

            // GENDER AJAX CALL====================================================

            var queryURL = "https://gender-api.com/get?name=" + studentName + "&country=US&key=JQwRqcyXLZjYqaDrEQ";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                var gender = $('<li>');
                gender.text(response.gender.toUpperCase());
                $('#genderList').append(gender);

                // CHANGES NAME AND GENDER COLOR===================================

                var newTime = moment(duration.asMilliseconds()).format('mm:ss')

                if (newTime >= '01:00') {

                    $(studentItem).attr('style', 'color: green');
                    $(gender).attr({
                        style: 'color: green; list-style-type:circle'
                    });
                }

                else if (newTime < '01:00' && newTime > '00:00') {
                    $(studentItem).attr('style', 'color: red');
                    $(gender).attr({
                        style: 'color: red; list-style-type:circle'
                    });
                }

                else {
                    $(studentItem).attr('style', 'color: black');
                    $(gender).attr({
                        style: 'color: black; list-style-type: none'
                    });
                    $(gender).html('');

                };
                // ================================================================

            });
            // ====================================================================

            // Populates absent students in studentBox=========================
            var newTime = moment(duration.asMilliseconds()).format('mm:ss')

            if (newTime <= '00:00') {
                for (var i = 0; i < students.length; i++) {
                    if (currentStudents.includes(students[i])) {
                        delete (students[i]);
                    }

                    else {
                        studentItem.addClass('absent');
                        studentItem.html('<br>' + '<li>' + studentName.toUpperCase());

                        var badge = $("<span>");
                        badge.attr("class", "badge badge-warning");
                        badge.text('You have been marked absent. Please see your teacher');
                        badge.prependTo(studentItem);

                        var newItem = $("<li>");
                        newItem.addClass('absent');
                        newItem.text(students[i].toUpperCase());
                        $("#listStudents").append(newItem);

                        $('.studentBox').attr('style', 'border: none');
                        $('.gender').attr('style', 'border: none');

                        $('#submit').addClass('hide');
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
    // ============================================================================

    console.log("ready");

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
                " Temperature: " + data.main.temp + "&deg;F" + " |<br>" + " Wind speed: " + data.wind.speed + " mph | Humidity: " + data.main.humidity + "%"

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
        }
    });
    // ============================================================================
});
