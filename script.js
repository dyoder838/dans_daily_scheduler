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
        },
        {
            id: "key1",
            hour: "10",
            time: "10",
            meridiem: "am",
        },
        {
            id: "key2",
            hour: "11",
            time: "11",
            meridiem: "am",
        },
        {
            id: "key3",
            hour: "12",
            time: "12",
            meridiem: "pm",
        },
        {
            id: "key4",
            hour: "1",
            time: "13",
            meridiem: "pm",
        },
        {
            id: "key5",
            hour: "2",
            time: "14",
            meridiem: "pm",
        },
        {
            id: "key6",
            hour: "3",
            time: "15",
            meridiem: "pm",
        },
        {
            id: "key7",
            hour: "4",
            time: "16",
            meridiem: "pm",
        },
        {
            id: "key8",
            hour: "5",
            time: "17",
            meridiem: "pm",
        },
        
    ];
   
// Display date and time in header. 
    $("#currentDay").text(mmddtt);

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
    
    loadTextOnRefresh();
    
    // Make the clicks on save buttons save the text in "textarea".
        // "textarea" by default sends the value of its text to its id, as long as the button pushed is -
        // within its parent div.
        // There is no need to treat each button and text area individually, so we group it all together.
        // Whenever any save button is pushed, it saves every text area,
        // This save function is slightly different, in that the key is intended to be the location of the save, not simply a key string in an array.
    $("button").on("click", function(save){
            
            // I'm using a form element so .preventDefault(); must be used, or the form will clear with each click.
        save.preventDefault();

            // The key will need to be separated to a function that -
            // makes the value associate the the textarea with the id (#key 0-9).
        for ( var i = 0; i < 9; i++ ) {
               
                // This generates the id of the textarea associated with the value, so I can tell the value where to go.
            var locationKey = "#key"+i
                
                // This pulls the value from the textarea by its id.
            var value = $(locationKey).val();
                //console.log("key", locationKey);
                //console.log("value:", value);
            
                // Now we have a save location, with the saved text.
            localStorage.setItem(locationKey,value);
            
        };  
            
                // Verify content of local storage.
            //console.log("check local storage after save", localStorage);
        
    });

    //load local storage
            // There is no load button, I want the information to always be on the page no matter what.
            // The only time this wouldn't hold true is if the user did not push the save button.
            // A load feature is needed that runs on page refresh, but, after the elements are generated.
    function loadTextOnRefresh(){
            
            // Local storage needs to be applied every time the page is refreshed, once for every textarea.
        for (let i = 0; i < localStorage.length; i++) {
                
                // Remember, the keys in this have a different use than normal, they need to be used direct values to a textarea
                // This pulls out the id of the location, saved as the string "#key(i)". i is a variable with the values 0-8
                // key.(i) is a constant in programming language, 
                // "#key(i)" refers to the id tag of <textarea>.
            var locationKey = localStorage.key(i);
            
                // This pulls out the value of the key
            var value = localStorage.getItem(locationKey);
                // Check for integrity of data.
            //console.log("loaded locationKey: ", locationKey);
            //console.log("loaded location's value: ", value);

                // I want locationKey to direct where to load the value to. note we use val and not text; textarea text is a value.
            $(locationKey).val(value);
                
        };

    };    
    
}); 

//<---------------------------- huge thanks to Ibmoody @ github https://github.com/lbmoody/simple-day-planner.git ----------------->
                            // I had such a hard time with some of these concepts, thanks for sharing and helping me learn!

                            //<------------ https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea --- textarea explained
                            //<------------ https://api.jquery.com/val/ --- jquery textarea manipulation explained