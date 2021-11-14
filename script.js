// Array of hours 9 thru 5 pm
var hours = []
var startHour = moment().set('hour', 9);
new Array(9).fill().map((acc, index) => {
    hours.push(startHour.format('HHA'))
    startHour = startHour.add(1, 'hour');
});

// generate heading stating date and time at bottom of header

var today = moment().format("[Today is] dddd h:mmA");;
$("#currentDay").text(today);
// generate rows



// set this moment equal to var now
var now = moment().format('HHA');


var userEvents = [];

if (localStorage.getItem('events')){
    userEvents = JSON.parse(localStorage.getItem('events'));
}

// loop through the hours of the day and append a div for each with the time, space to add events, and a button to save events

for (var i = 0; i < hours.length; i++) {
    var hourI = hours[i];
    var currentHour = moment(hourI, 'HHA').format('hA')
    var time = hours[i];
    var text = $(this)
        .text()
        .trim();
    
        var hourRow = $("<div>").addClass("row");
    var hourBox = $("<div>").addClass("col-2  border-left-0 hour-box d-flex justify-content-center align-items-center hour block").text(currentHour);

    var textArea = $("<textarea>")
        .addClass("col-8 d-flex justify-content-center align-items-center textarea time-block").attr("type", "text").attr("id", currentHour);

    var saveButton = $("<button>")
        .addClass("col-2 rounded-right saveBtn d-flex justify-content-center align-items-center").attr("id", hours[i]);

    $(".container").append(hourRow)
    $(hourRow).append(hourBox);
    $(hourRow).append(textArea);
    $(hourRow).append(saveButton);

    var iconSpan = $("<i>").addClass("fa fa-check-circle");
    $(saveButton).append(iconSpan);

    // color code the text area according to where we are in the day 
    if (time > now) {
        $(textArea).addClass("future")
    } else if (time < now) {
        $(textArea).addClass("past")
    } else {
        $(textArea).addClass("present")
    }
};






$('button').on("click", function () {
    var currentTimeblockTime = $(this).siblings('div').text();
    var textAreaInput = $(this).siblings('textarea').val();
    userEvents.push({
        time: currentTimeblockTime,
        message: textAreaInput
    })
    localStorage.setItem("events", JSON.stringify(userEvents))

});


for(var i = 0; i < userEvents.length; i++){
    // console.log(`#${userEvents[i].time}`);
    $(`#${userEvents[i].time}`).text(userEvents[i].message)
}