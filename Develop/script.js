//Display Date and Time
$("#currentDay").text((moment().format('HH:mm, MMMM Do YYYY')));

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        // get values
        var textValue = $(this).siblings(".description").val();
        var timeAdded = $(this).parent().attr("id");
        console.log(textValue);
        console.log(timeAdded);
        // save the value in localStorage as time
        localStorage.setItem(textValue, timeAdded);
    })

    function timeTracking() {
        var currentHour = moment().hour();
        //looping through TIME-BLOCKS


        $('.time-block').each(function () {
            var rowTime = parseInt($(this).attr("id").split("-")[1]);

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
        })
    }

    $("#hour-8 .description").val(localStorage.getItem(".hour-8"));
    $("#hour-9 .description").val(localStorage.getItem(".hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));


    timeTracking();

});
