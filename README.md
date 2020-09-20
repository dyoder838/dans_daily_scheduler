# dans_daily_scheduler

<h1> Dan's Daily Schedular</h1>

This project is part of my web development course.
The task is to create a daily planner page featuring dynamically updated HTML and CSS powered by jQuery. and also an introduction to API using Moment to supply time tracking function.

A starter index.html was supplied with style and script links already included
A style.css file was provided with code already completed - I had to create my dynamic HTML to include the provided css hooks.

<a href="https://dyoder838.github.io/dans_daily_scheduler/" >Link to Dan's Daily Schedular</a>

<h2> Screenshot <h2>

![Dan's Daily Schedular](/assets/images/daily_planner.PNG)

<h2> Objectives </h2>

GIVEN I am using a daily planner to create a schedule.
- WHEN I open the planner.
THEN the current day is displayed at the top of the calendar.
- WHEN I scroll down.
THEN I am presented with timeblocks for standard business hours.
- WHEN I view the timeblocks for that day.
THEN each timeblock is color coded to indicate whether it is in the past, present, or future.
- WHEN I click into a timeblock.
THEN I can enter an event.
- WHEN I click the save button for that timeblock.
THEN the text for that event is saved in local storage.
- WHEN I refresh the page.
THEN the saved events persist.

<h2> Process </h2>

I planned the layout in HTML to ensure that everything would look right.

I used form, article, textarea, button, and i as elements.

I chose textarea for its simplicity and inherent interaction with buttons.

    Hindsight note: I had little knowledge of textarea and assumed it was just a fancy box without any function.

I added a clock using military time to dynamically change the css hooks in the elements.

I created an array to be used in a forEach loop.

    Hindsight note: I probably could have done this without the array, or at least a much smaller one.

I created a timer to display the current day, date, and time in the header.

I created a forEach loop to dynamically generate the HTML.
   
    Variables are added to each element in this process
    "if" statements were used to determine css tags dynamically when compared to the military clock.

I made an on click function to trigger saving to local storage 
    
    This took me Hours to figure out because I did not know enough about textarea and its inherent functions, I tried super complex localStorage solutions employing JSON and stringify. 
    
    I learned (after about 10 hours) that textarea, by default, respond to buttons within its parent div. this knowledge simplified the process nearly exponentially. 

    I discovered I could use the key as a location indicator for an element, by making it a reference to an element id. 

I made a load function to display any saved localStorage back to the textarea elements by their id. 

<h3> Conclusion <h3>

I learned so much about loops and local storage in this exercise. JSON and stringify still escape my grasp, but I am proud that I found a simple workaround. 

I think I can simplify this project even more, and think I can figure out a way to do it without an array. 

I also learned not to assume I know what elements are capable of - textarea can do so much! I think I could have simplified localStorage even more. 

<h3> Sources <h3>

When I began this project, I relied heavily on others examples to figure out how to go about coding it. 

Huge thanks to Ibmoody @ github https://github.com/lbmoody/simple-day-planner.git I had such a hard time with some of these concepts, thanks for sharing and helping me learn!

textarea info was hard to find for some reason, these sites were instrumental in my understanding of them.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea - textarea explained.

https://api.jquery.com/val/ -jquery textarea manipulation explained.