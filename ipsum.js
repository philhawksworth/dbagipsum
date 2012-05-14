var dbipsum = {};

dbipsum.getsentence = function() {
	var sentence = [];
	var structure = ["noun", "padding", "phrase", "verb", "noun"];
	for(var part in structure) {
		set = dbipsum.vocab[structure[part]];
		var r = Math.floor(Math.random() * (set.length));
		sentence.push(set[r]);
	}
	s = sentence.join(" ") + ".";
	return s.replace(/^\w/, function(ch) { return ch.toUpperCase(); });
};

dbipsum.getparagraph = function(sentences) {
	var p = [];
	for (var i = 0; i < sentences; i++) {
		p.push(dbipsum.getsentence());
	}
	return p.join(" ");
};

dbipsum.getipsum = function(paras, size) {
	var p = [];
	for (var i = 0; i < paras; i++) {
		p.push(dbipsum.getparagraph(size));
	}
	return "<p>" + p.join("</p><p>") + "</p>";
};

dbipsum.generate = function() {
	p = document.getElementsByTagName("input")[0].value;
	s = document.getElementsByTagName("input")[1].value;
	document.getElementById("ipsum").innerHTML = dbipsum.getipsum(p, s);
};




