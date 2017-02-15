"use strict";

let view = {};

$("#list-music").click( function(event) {
	$("#list-view").removeClass("hidden");
	$("#add-view").addClass("hidden");
});

$("#add-music").click( function(event) {
	$("#list-view").addClass("hidden");
	$("#add-view").removeClass("hidden");
});

module.exports = view;