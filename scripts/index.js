// get some things straight

$('#input').html("I\'m a custom Lorem Ipsum generator based on a simple little predictive text engine. You can type or paste text into this text box, and I can read it and learn words and associations. Once I've learned a bit, you can press 'Write' and I will write some text based on what I've learned. Since I run inside the browser, I forget everything I've learned every time the window is refreshed. This means whatever text you feed me will have big impact on the types of Lorem Ipsum I write. Click 'Read' to have me read this text, to start, or select from some prepared sample texts above. NOTE: Any text I read will be added to what I already know, so you can experiment with different combinations of sources. If you want to reset my memory, just refresh the page.");

// give horton instructions on how to cooperate
var wordsLearned = 0;
var assocsLearned = 0;
var assocsStrengthened = 0;

var lengthToWrite = 50;

horton.onLearnWord = function() {
	wordsLearned += 1;
	$('#wordCount').html(wordsLearned);
}

horton.onLearnAssoc = function() {
	assocsLearned += 1;
	$('#assocCount').html(assocsLearned);
}

horton.onStrengthenAssoc = function() {
	assocsStrengthened += 1;
	$('#assocsStrengthened').html(assocsStrengthened)
}

// hook up our UI
$('#lengthChooser').on('change', function() {
	lengthToWrite = parseInt($(this).val());
	$("#numWords").html(lengthToWrite);
});

$('#readbutton').on('click', function(){
	var input = $('#input').val();
	$('#format').val(input); // hacky way of getting rid of all these line breaks
	input = $('#format').val();

	horton.read(input);
	$('#input').val('');
	//$('#output').html(input);
})

$('#trigger').on('click', function(){
	var output = horton.write(lengthToWrite);
	$('#output').html(output);
});

$('.reading-list').on('click', function() {
	var subject = $(this).attr('name');
	$.get('scripts/' + subject + '.json', function(res) {
		horton.read(res.text);
	});
});
