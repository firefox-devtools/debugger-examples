/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function () {
	'use strict';

	// kick things off by creating the `App`
	new app.AppView();
});

// 
//
// var targetNode = document.getElementById('todoapp');
//
// // Options for the observer (which mutations to observe)
// var config = { attributes: true, childList: true, subtree: true };
//
// // Callback function to execute when mutations are observed
// var callback = function(mutationsList, observer) {
//     for(var mutation of mutationsList) {
//         if (mutation.type == 'childList') {
//             console.log('A child node has been added or removed.');
//         }
//         else if (mutation.type == 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         }
//     }
// };
//
// // Create an observer instance linked to the callback function
// var observer = new MutationObserver(callback);
//
// // Start observing the target node for configured mutations
// observer.observe(targetNode, config);
