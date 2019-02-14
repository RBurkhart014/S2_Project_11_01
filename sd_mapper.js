"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Ryan Burkhart
   Date: 2-13-19  

*/

var thisTime = new Date();

// This is the local computer time displayed on the webpage & retrives dates & times.

var timeStr = thisTime.toLocaleString();

// Allows the website to read the computer time

document.getElementById('timeStamp').innerHTML = timeStr;

// This line was the ID of the time's date and its taken by inner HTML

var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

// These extract numbers from the thisTime variable

var mapNum = (2* thisMonth + thisHour) % 24;

// gives the webpage a certain month/hour to display

var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

// Made the map have color 

document.getElementById('planisphere').insertAdjacentHTML("afterbegin",imgStr);

// Made it so therefore the element by id is displayed before the insert