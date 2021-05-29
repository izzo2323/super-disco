//Display Date and Time
$("#currentDay").text((moment().format('HH:mm, MMMM Do YYYY')));

$(document).ready(function () {
    //save btn to local storage

    $(".saveBtn").on("click", function () {
        // get values
        var textValue = $(this).siblings(".description").val();
        var timeAdded = $(this).parent().attr("id");
        console.log(textValue);
        console.log(timeAdded);
        // save the value in localStorage
        localStorage.setItem(timeAdded, textValue);
        JSON.stringify(timeAdded, textValue)
    })

    function timeTracking() {
        var currentHour = moment().hour();
        //looping through TIME-BLOCKS

        $('.time-block').each(function () {
            var rowTime = parseInt($(this).attr("id").split("-")[1]);

            if (rowTime < currentHour) {

                $(this).removeClass('present');
                $(this).removeClass('future');
                $(this).addClass('past');
            } else if (currentHour === rowTime) {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');

                //Retrieving from local storage

                $('#hour-8 .description').val(localStorage.getItem('hour-8'));
                $('#hour-9 .description').val(localStorage.getItem('hour-9'));
                $('#hour-10 .description').val(localStorage.getItem('hour-10'));
                $('#hour-11 .description').val(localStorage.getItem('hour-11'));
                $('#hour-12 .description').val(localStorage.getItem('hour-12'));
                $('#hour-13 .description').val(localStorage.getItem('hour-13'));
                $('#hour-14 .description').val(localStorage.getItem('hour-14'));
                $('#hour-15 .description').val(localStorage.getItem('hour-15'));
                $('#hour-16 .description').val(localStorage.getItem('hour-16'));
                $('#hour-17 .description').val(localStorage.getItem('hour-17'));

            }
        })
    }

    timeTracking();
})
