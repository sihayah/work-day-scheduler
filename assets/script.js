// Array of hours 9 thru 5 pm
var hours = []
var startHour = moment().set('hour', 9);
new Array(9).fill().map((acc, index) => {
    hours.push(startHour.format('HHA'))
    startHour = startHour.add(1, 'hour');
});

// heading stating date and time at bottom of header
var dayHeading = document.querySelector("#currentDay");
var today = moment.utc().format("[Today is] dddd h:mmA"); ;
dayHeading.textContent= today;
var container = document.querySelector("main");
var hourRow = document.createElement("div");
hourRow.classList = ("row ");

// set this moment equal to var now
var now = moment().format('HHA');

// loop through the hours of the day and append a div for each with the time, space to add events, and a button to save events
for (var i=0; i<hours.length; i++){

    var hourI = hours[i];
    var currentHour = moment(hourI, 'HHA').format('hA')
    var time = hours[i];
    container.appendChild(hourRow)
    var hourBox = document.createElement("div");
    var textArea = document.createElement("div");
    var saveBox = document.createElement("div");
    hourRow.appendChild(hourBox);
    hourRow.appendChild(textArea);
    hourRow.appendChild(saveBox);
    hourBox.classList = ("col-2  border-left-0 hour-box d-flex justify-content-center align-items-center hour");
    textArea.classList = ("col-8 d-flex justify-content-center align-items-center text-area");
    saveBox.classList = ("col-2 rounded-right saveBtn d-flex justify-content-center align-items-center");
    hourBox.innerHTML= currentHour;
    textArea.innerHTML=("your events");
    var iconSpan = document.createElement("span");
    saveBox.appendChild(iconSpan);
    iconSpan.classList = "oi oi-task"; 

    // color code the text area according to where we are in the day 
    if (time>now) {
        $(textArea).addClass("future")
    } else if (time<now) { 
       $(textArea).addClass("past")
    } else {
        $(textArea).addClass("present")
        
    }

}


// create grid with three columns (col-2, co-8, col-2) and a row for every hour of the day
// the first column will display the hour 
// hours will correspond to a "9-5" schedule
// middle will display recorded events for that hour
// last row will contain a button to click and save added text "event" content
// text content will be saved to localStorage
// hours will be color coded to show whether they are past, present, or future
