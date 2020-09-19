// this makes sure the code inside does not execute until the DOM is ready.
$(function() {
    console.log( "ready!" );

    // --------------- dom elements ----------------
   
    var container = $("div");

    //----- lesson learned (took 3 hours) -------
        // var elements used in loops, must be declared in loops 
        //if you want to append in loops

    // ------------ declare variables --------- 
    const mmddtt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    
    var milTime = moment().format("HH");
   
    var civTime = moment().format("h A");
   
    var arr95 = [
        {
            id: "0",
            hour: "9",
            time: "09",
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
        
    ];

    // Display date and time in header. 
    $("#currentDay").text(mmddtt);

// Construct the html to append !!! declare variables being used in the loop! or they wont loop.
    // Create the forEach loop WITH the array (arr95). this will loop 9 times (the number of objects in the array).
    // We use forEach because we are looping multiple variables.
    // "thisHour" was chosen because each iteration we create represents an hour (this is the array inside the loop).
    arr95.forEach(function(thisHour) {
    
        // Make all elements in this function - or they wont loop.
        // Applying all constants here makes for less code later.
            var formRow = $("<form class='row hour time-block'>");
            var article = $("<article class='col-md-2'>");
            var textarea = $("<textarea class='col-md-8'>");
            var button = $("<button class='saveBtn col-md-2'>");
            var icon = $("<i class='far fa-save fa-lg'> </i>");
    
        // Apply variable hours and meridiems to article (the hour tab) from the array as text.
        // This is what labels the left most column with its time and AM/PM.
            article.text(`${thisHour.hour} ${thisHour.meridiem}`);
            
        // Apply variables to textarea.
            // Apply attribute id from the array for use as a localStorage tag for saving data
            // Apply css class description - I forgot to add it in the var. 
            textarea.attr("id", thisHour.id);
            textarea.addClass("description");
       
            // Apply css classes to textarea by time for past, present, and future, 
            // so textarea changes color according to time dynamically. 
            if (thisHour.time < milTime) {
                textarea.addClass("past")
            
            } if (thisHour.time == milTime) {
                textarea.addClass("present")
            
            } if (thisHour.time > milTime) {
                textarea.addClass("present")
            };
           
        // Append elements to the dom in parent order, I used indentation for visual effect.
        // container is the parent to formRow.
        container.append(formRow);
            // formRow is parent to article, textarea, and button.
            formRow.append(article, textarea, button);
                // button is parent to icon.
                button.append(icon);
    
    });
        

//TODO: Make the clicks work for the save button. 
    //I'm using a form element so .preventDefault(); must be used, or the form will clear with each click.
    // Also, create the saving apparatus in the same function
    $("button").on("click", function(save){
        save.preventDefault()
        // This will create a unique save point to every button, because we use "this" capturing the element clicked in an index
        // This complex line connects the textarea location we want saved, to the save button, making it unique to that row.
        var saveIndex = $(this).siblings(".description").children(".future").attr("id");
        // This saves the value of the textarea to the array.
        arr95[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
        // These call the save and load functions on click. 
        saveText();
        loadText();
    });



//TODO: save to local storage - localStorage.setItem - 

//TODO: on refresh, the data persists - retrieve data on page load - localStorage.getItem - show data back to where it came from
        // how can i know what text from local storage goes to what area) - try to make the key inherent with the click area .this? replace button with radio?

}); 
//end of $document. function

