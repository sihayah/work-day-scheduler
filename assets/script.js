// Array of hours 9 thru 5 pm
var hours = []
var startHour = moment().set('hour', 9);
new Array(9).fill().map((acc, index) => {
    hours.push(startHour.format('HHA'))
    startHour = startHour.add(1, 'hour');
});

// generate heading stating date and time at bottom of header
var dayHeading = document.querySelector("#currentDay");
var today = moment.utc().format("[Today is] dddd h:mmA"); ;
dayHeading.textContent= today;
var container = document.querySelector("main");
// generate rows
var hourRow = document.createElement("div");
hourRow.classList = ("row");

// set this moment equal to var now
var now = moment().format('HHA');

var userEvents = [];

// loop through the hours of the day and append a div for each with the time, space to add events, and a button to save events
for (var i=0; i<hours.length; i++){
    var hourI = hours[i];
    var currentHour = moment(hourI, 'HHA').format('hA')
    var time = hours[i];
   
    var hourBox = document.createElement("div");
    var textArea = document.createElement("div");
    var saveButton = document.createElement("div");
    container.appendChild(hourRow)
    hourRow.appendChild(hourBox);
    hourRow.appendChild(textArea);
    hourRow.appendChild(saveButton);
    hourBox.classList = ("col-2  border-left-0 hour-box d-flex justify-content-center align-items-center hour block");
    textArea.classList = ("col-8 d-flex justify-content-center align-items-center text-area");
    saveButton.classList = ("col-2 rounded-right saveBtn d-flex justify-content-center align-items-center");    
    var iconSpan = document.createElement("i");
    saveButton.appendChild(iconSpan);
    iconSpan.classList = "fa fa-check-circle"; 
    hourBox.innerHTML= currentHour;

// add events
    var eventInput = document.createElement('input');
    eventInput.classList ="form-control input-btn-focus-blur ";
    $(eventInput).attr("type", "text");
    $(eventInput).attr("id", "userinput");
    $(eventInput).attr("value", "");
    $(eventInput).attr("placeholder", "type here");
    var inputClick = () => {
        textArea.append(eventInput);
        console.log("woo")
    }

    // on click generate input
    $(textArea).click(function() {
        textArea.append(eventInput)
    })

    // save event input
    $(saveButton).click(function() {
        var text = $("#userinput").val();
        console.log(text)
        userEvents.push(JSON.stringify(text));
        localStorage.setItem("userEvents", JSON.stringify(userEvents)); 
        eventInput.remove();
        textArea.textContent = "text"
    })    

    // color code the text area according to where we are in the day 
    if (time>now) {
        $(textArea).addClass("future")
    } else if (time<now) { 
       $(textArea).addClass("past")
    } else {
        $(textArea).addClass("present")
    }
}