// get some things straight

$('#input').html("I\'m a simple little predictive text engine. You can type or paste text into this text box, and I can read it and learn words and associations. Since I run inside the browser, I forget everything I've learned everytime the window is refreshed. This means whatever text you feed me will have big impact on the types of words I predict/poems I write/etc. You can click on me to have me read this text, to start!!!");

// give horton instructions on how to cooperate
var wordsLearned = 0;
var assocsLearned = 0;
var assocsStrengthened = 0;

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
$('#readbutton').on('click', function(){
	var input = $('#input').val();
	$('#format').val(input); // hacky way of getting rid of all these line breaks
	input = $('#format').val();

	horton.read(input);
	$('#input').val('');
	//$('#output').html(input);
})

$('#trigger').on('click', function(){
	var output = horton.write(50);
	$('#output').html(output);
});

$('#shakespeare').on('click', function(){
	horton.read(macbeth);
});
