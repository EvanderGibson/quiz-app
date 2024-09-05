$(document).ready(function() {
	
	
	$(".vanish1") .click(function() {
		
		$(".vanish1") .hide("fast");
		$(".question1 ").html("<p>what is 2(8)?</p>");
		
		$(".flashcard1").html("<h1>Question 1</h1>");
		$("body").addClass("walnut");
	});
	
	$(".question1") .click(function() {
		$(".answer1").html("16");
		$(".next1").show("fast");
		
	});
	
	$(".next1") .click(function() {
		$(".next1") .hide("fast");
		$(".question1") .hide("fast");
		$(".answer1") .hide("fast");
		$(".flashcard1").html("<h1>Question 2</h1>");
		$(".question2 ").html("<p>what is 7 squared?</p>");
	});
	
	$(".question2") .click(function() {
		
		$(".answer2").html("49");
		$(".next2").show("fast");
		
	});
	
	$(".next2") .click(function() {
		$(".next2") .hide("fast");
		$(".answer2") .hide("fast");
		$(".question2") .hide("fast");
		$(".flashcard1").html("<h1>Question 3</h1>");
		$(".question3 ").html("<p>what is 2935 + 475</p>");
	});
	$(".question3") .click(function() {
		
		$(".answer3").html("3410");
		$(".finish").show("fast");
		
	});
	$(".finish") .click(function() {
		$(".finish") .hide("fast");
		$(".answer3") .hide("fast");
		$(".question3") .hide("fast");
		$(".flashcard1").html("<h1>All caught up!</h1>");
		$("body").addClass("tallnut");
		$(".restart").show("fast");
	});
	
});
