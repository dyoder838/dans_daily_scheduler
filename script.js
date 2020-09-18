// this makes sure the code inside does not execute until the DOM is ready.
// $(function() {
//     console.log( "ready!" );

    // --------------- dom elements ----------------
    const container = $("div")

    //--------- Jquery DOM elements to be appended------
        //- make a variable for each of the planned elements below
    var formRow = $(`<form id="row hour time-block">`)
    var article = $(`<article class="col-md-2">`)
    var textarea = $(`<textarea class="col-md-8">`)
    var button = $(`<button class="saveBtn col-md-2">`)
    
    // ------------ declare variables --------- 
    const mmddtt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        // display date and time in header 
    $("#currentDay").text(mmddtt)
    //console.log(mmddtt)
    var milTime = moment().format("H")
    var civTime = moment().format("h A")
    var arr95 = [
        {
        "AM" : ["9","10","11"],
        "PM" : ["12","1","2","3","4","5"]
        }
    ];
    console.table(arr95)
    //console.log("military time:", milTime)
    console.log("civilian time:", civTime)


//TODO: find a way to append these in  order 
    // find a way to populate with appropriate information
        //add time recognition using moment.js - look at classes in html 

        //adding times to each article ( be aware of conversions from mil to civil)
        //mil times 9-17, civil 9-12, 1-5
        //when coding for article, make a for loop that i++ text=[i]
        // article for loop first - we need it to add key and value 

//TODO:create array to hold the hours 9am -5pm

//TODO:using a for loop

//TODO:loop over my array of hours and create form for row, create article, create textarea, create button,

//TODO:give them content, append them to the row, and then append the row to the page
         
//TODO:how can i compare the hours of my rows to the current time (use moment.js to get current time) use an array? 
        // round hours? - or dont use minutes in programing - look under format in moment.js

//TODO: give classes that elements need past, future, present  - ise if statments comparing current time to row time 
//if===, class, if < , if >

//TODO: click eventlistener for save button, im using a form element - stop propagation!!

//TODO: grab the value of the text area, save to a variable, text needs to be row specific - 9 data variables 

//TODO: save to local storage - localStorage.setItem - 

//TODO: on refresh, the data persists - retrieve data on page load - localStorage.getItem - show data back to where it came from
        // how can i know what text from local storage goes to what area) - try to make the key inherent with the click area .this? replace button with radio?

//}); end of $document. function

