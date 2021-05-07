console.log(moment().format('MMMM Do YYYY'));
console.log(moment().minutes());
//dISPLAY DATE
$("#currentDay").text((moment().format('dddd, MMMM Do YYYY')));


//looping through TIME-BLOCKS
$('.time-block').each(function () {
    var currentHour = moment().hours();
    var rowTime = $(this).find('.hour').text();
    console.log(currentHour);
    console.log(rowTime);
    $(this).addClass('present')
    //if else if else 
})