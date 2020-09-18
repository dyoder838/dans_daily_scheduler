// this makes sure the code inside does not execute until the DOM is ready.
//$(function() {
    console.log( "ready!" );

    // --------------- dom elements ----------------
    var container = $("div")

    //--------- Jquery DOM elements to be appended------
        //- make a variable for each of the planned elements below
    var formRow = $("<form id='row hour time-block'>")
    var article = $("<article class='col-md-2'>")
    var textarea = $("<textarea class='col-md-8'>")
    var button = $("<button class='saveBtn col-md-2'>")
    var icon = $("<i>")
    
    // ------------ declare variables --------- 
    const mmddtt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        // display date and time in header 
    $("#currentDay").text(mmddtt)
    //console.log(mmddtt)
    var milTime = moment().format("H")
    var civTime = moment().format("h A")
    var arr95 = [
        {
            id: "0",
            hour: "9",
            time: "9",
            meridiem: "am",
            reminder: ""
        },
        {
            id: "1",
            hour: "10",
            time: "10",
            meridiem: "am",
            reminder: ""
        },
        {
            id: "2",
            hour: "11",
            time: "11",
            meridiem: "am",
            reminder: ""
        },
        {
            id: "3",
            hour: "12",
            time: "12",
            meridiem: "pm",
            reminder: ""
        },
        {
            id: "4",
            hour: "1",
            time: "13",
            meridiem: "pm",
            reminder: ""
        },
        {
            id: "5",
            hour: "2",
            time: "14",
            meridiem: "pm",
            reminder: ""
        },
        {
            id: "6",
            hour: "3",
            time: "15",
            meridiem: "pm",
            reminder: ""
        },
        {
            id: "7",
            hour: "4",
            time: "16",
            meridiem: "pm",
            reminder: ""
        },
        {
            id: "8",
            hour: "5",
            time: "17",
            meridiem: "pm",
            reminder: ""
        },
        
    ]
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
        // Start building Time box portion of row
    //create the for each loop WITH the array
    arr95.forEach(function(thisHour){
       // console.log("log thisHour", thisHour)
       //  console.table("table thisHour", thisHour)
        // make all elements in this function, its how we match the arrays to the elements
            // proceed in this order formRow, article, textarea, button, icon
            // var formRow = $(`<form id="row hour time-block">`)
            // var article = $(`<article class="col-md-2">`)
            // var textarea = $(`<textarea class="col-md-8">`)
            // var button = $(`<button class="saveBtn col-md-2">`)
            
            //create the div $("<>") var div=
            // add content div.text(content to add)
            // add to page parentDiv.append(your variable for element creation)
    // var container = $("div")
        container.append(formRow)
        // create articles (the hour tab)
            article.text(`${thisHour.hour} ${thisHour.meridiem}`)
            formRow.append(article)
            console.log("whats this element", article)

        // create textareas
            textarea.attr("id", thisHour.id)
            if (thisHour.time < milTime) {
                textarea.attr("class", ".past")
            } else if 
            


    });

    // -------------------- example from class
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //       console.log(response)
    //       var infoHere = $("#movies-view")
          
    //           var newInfo = $("<div>")
    //           infoHere.append(newInfo)

    //               var rating = $("<p>").text("Rating: " + response.Rated)
    //               newInfo.append(rating)

    //               var releaseDate = $("<p>").text("Released: " + response.Released)
    //               newInfo.append(releaseDate)
                  
    //               var plot = $("<p>").text("Plot: " + response.Plot)
    //               newInfo.append(plot)

    //               var poster = $("<img>").attr("src", response.Poster)
    //               console.log("image format: ", response.Poster)
                  
    //               newInfo.append(poster)
                  

    // function renderHour(newTimeBox, i) {
    // if (i < 12) {
    //     newTimeBox.text(i + ":00 AM");
    // } else if (i === 12) {
    //     newTimeBox.text(i + ":00 PM")
    // } else {
    //     let tempTime = i - 12;
    //     newTimeBox.text(tempTime + ":00 PM");
    // };

//     const currentTime = moment().format("H"); (edited) 
// 12:59
// This will give you hour in 24 hour format
// 12:59
// function setTimeBlocks(areaMod, i) {
//     if (currentTime == i) {
//         $(areaMod).addClass("present");
//     } else if (currentTime > i) {
//         $(areaMod).addClass("past");
//     } else {
//         $(areaMod).addClass("future");
//     }
// }




//TODO:using a for loop loop 9 times
 

//TODO:loop over my array of hours and create form for row, create article, create textarea, create button,

//TODO:give them content, append them to the row, and then append the row to the page
         
//TODO:how can i compare the hours of my rows to the current time (use moment.js to get current time) use an array? 
        // round hours? - or dont use minutes in programing - look under format in moment.js

//TODO: give classes that elements need past, future, present  - ise if statments comparing current time to row time 
//if===, class, if < , if >

//TODO: click eventlistener for save button, im using a form element - .preventDefault();stop propagation!!

//TODO: grab the value of the text area, save to a variable, text needs to be row specific - 9 data variables 

//TODO: save to local storage - localStorage.setItem - 

//TODO: on refresh, the data persists - retrieve data on page load - localStorage.getItem - show data back to where it came from
        // how can i know what text from local storage goes to what area) - try to make the key inherent with the click area .this? replace button with radio?

//}); 
//end of $document. function

