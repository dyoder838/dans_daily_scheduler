// this makes sure the code inside does not execute until the DOM is ready.
$(function() {
    console.log( "ready!" );

    // --------------- dom elements ----------------
   
    var container = $("div");

    //----- lesson learned (took 3 hours) -------
        // var elements used in loops, must be declared in loops 
        //if you want to append in loops

    // ------------ declare variables --------- 
    localStorage
    const mmddtt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    
    var milTime = moment().format("HH");
   
    var arr95 = [
        {
            id: "key0",
            hour: "9",
            time: "09",
            meridiem: "am",
            text: ""
        },
        {
            id: "key1",
            hour: "10",
            time: "10",
            meridiem: "am",
            text: ""
        },
        {
            id: "key2",
            hour: "11",
            time: "11",
            meridiem: "am",
            text: ""
        },
        {
            id: "key3",
            hour: "12",
            time: "12",
            meridiem: "pm",
            text: ""
        },
        {
            id: "key4",
            hour: "1",
            time: "13",
            meridiem: "pm",
            text: ""
        },
        {
            id: "key5",
            hour: "2",
            time: "14",
            meridiem: "pm",
            text: ""
        },
        {
            id: "key6",
            hour: "3",
            time: "15",
            meridiem: "pm",
            text: ""
        },
        {
            id: "key7",
            hour: "4",
            time: "16",
            meridiem: "pm",
            text: ""
        },
        {
            id: "key8",
            hour: "5",
            time: "17",
            meridiem: "pm",
            text: ""
        },
        
    ];
   // loadText();
    // Display date and time in header. 
    $("#currentDay").text(mmddtt);

    // Saves text to localStorage - function is called from button click.
   // function saveText() {
        //localStorage.setItem("arr95", JSON.stringify(arr95));
        
   // };
     
    // Loads saved text to its corresponding location.
    // We want the id of the clicked save button, and its corresponding text value. - te function is called on page load and button click.
    //function loadText() {
   //     arr95.forEach(function (_thisHour) {
  //          $(`#${_thisHour.id}`).val(_thisHour.text);
   //     });
   // };
    
    // Sets any existing localStorage text to the "textarea", if it exists.
    // function existingData() {
    //     var storedDay = JSON.parse(localStorage.getItem("arr95"));

    //     if (storedDay) {
    //         arr95 = storedDay;
    //     }

    //     saveText();
    //     loadText();
    //}
    

// Construct the html to append !!! declare variables being used in the loop! or they wont loop.
    // Create the forEach loop WITH the array (arr95). this will loop 9 times (the number of objects in the array).
    // We use forEach because we are looping multiple variables.
    // "thisHour" was chosen because each iteration we create represents an hour - its arbitrary...(thisHour is the array, inside the loop).
    arr95.forEach(function(thisHour) {
    
        // Make all elements in this function - or they wont loop.
        // Applying all constants here makes for less code later.
            var formRow = $("<form class='row hour time-block'>");
            var article = $("<article class='col-md-2 description'>");
            var textarea = $("<textarea class='col-md-8 description'>");
            var button = $("<button class='saveBtn col-md-2'>");
            var icon = $("<i class='far fa-save fa-lg'> </i>");
    
        // Apply variable hours and meridiems to article (the hour tab) from the array as text.
        // This is what labels the left most column with its time and AM/PM.
            article.text(`${thisHour.hour} ${thisHour.meridiem}`);
            
        // Apply variables to textarea.
            // Apply class: key0-8 from the array for use as a localStorage tag for saving data
            textarea.attr("id", thisHour.id);
            
            // Apply css classes to "textarea" by time for .past, .present, and .future, 
            // so "textarea" changes color according to time dynamically. 
            if (thisHour.time < milTime) {
                textarea.addClass("past");
            
            } if (thisHour.time == milTime) {
                textarea.addClass("present");
            
            } if (thisHour.time > milTime) {
                textarea.addClass("present");
            };
           
            // Apply class: key0-8 from the array for use as a localStorage tag for saving data
            

        // Append elements to the dom in parent order, I used indentation for visual effect.
        // "container" is the parent to formRow.
        container.append(formRow);
            // formRow is parent to article, textarea, and button.
            formRow.append(article, textarea, button);
                // button is parent to icon.
                button.append(icon);
    
    });
    
    // loads any existing data on the page
    //existingData();
    
// Make the clicks work for the save button. 
    // I'm using a form element so .preventDefault(); must be used, or the form will clear with each click.
    // Also, create the saving apparatus in the same function
    $("button").on("click", function(save){
        save.preventDefault();
        // This will create a unique save point to every button, because we use "this" capturing the element clicked in an index
        // This complex line connects the textarea location we want saved, to the save button, making it unique to that row.(Records where the text came from.)
      for ( var i = 0; i < 8; i++ ) {
            var key = "#key"+i
            var value = document.getElementById(`key${i}`).value
            console.log("key", key );
            console.log("value", value);
            
            localStorage.setItem(key,value);
            location.reload();
        };  
    
    });

    
        localStorage.forEach(function(storageArr){
        //for (let i = 0; i < localStorage.length; i++) {
            // we are not changing what the constant variables do here, we are adding to their value
            storageArr.preventDefault();

            var key = storageArr.key;
            var value = storageArr.getItem(key);
            // this fancy code is short hand appending. backticks and ${} mean append
            $({key}).innerHTML += `${value}`;
            console.log("return key", key)
            console.log("return value", value)
            console.log("storageArr", storageArr)
        });
    
}); 

//<---------------------------- huge thanks to Ibmoody @ github https://github.com/lbmoody/simple-day-planner.git ----------------->
                            // I had such a hard time with some of these concepts, thanks for sharing and helping me learn!