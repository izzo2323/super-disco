console.log(moment().format('MMMM Do YYYY'));
console.log(moment().minutes());
//Display Date and Time
$("#currentDay").text((moment().format('HH:mm, MMMM Do YYYY')));

function timeTracking() {
    var currentHour = moment().hour();
    //looping through TIME-BLOCKS


    $('.time-block').each(function () {
        var rowTime = parseInt($(this).attr("id").split("-")[1]);
        console.log(currentHour);
        console.log("row Time", rowTime);

        if (rowTime < currentHour) {
            // $(this).siblings('.time-block').removeClass();
            $(this).removeClass('present');
            $(this).removeClass('future');
            $(this).addClass('past');
        } else if (currentHour === rowTime) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        } else {
            // (currentHour > rowTime)
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
            // console.log(this);
        }
    }
    )
}
timeTracking();


// $(this).parent().attr("id")
// $(this).siblings('.description').val()
var localStorage = [];

$(".saveBtn").on("click", function () {
    // get values
    var textValue = $(this).siblings(".description").val();
    var timeAdded = $(this).parent().attr("id");
    var dateAdded = moment().format("dddd, MMMM Do");

    localStorage.push({ description: value, time: time, date: dateAdded });

    // save the value in localStorage as time
    localStorage.setItem("events", JSON.stringify(localStorage))
})

var storedEvents = JSON.parse(localStorage.getItem("events"));

if (storedEvents !== null) {
    events = storedEvents;
}

for (var i = 0; i < localStorage.length; i++) {
    var userDescription = localStorage[i].description;
    $("#" + localStorage[i].time).children(".description").text(userDescription);
}
