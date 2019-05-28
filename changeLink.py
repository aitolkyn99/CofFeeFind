def render(s):
	l = s.split('\n');
	for row in l:
		curL = row.split();
		for words in curL:
			if (words.startswith('src')):
				link = words[4:];
				words = words[:4] + "{{ url_for('static'. filename = '" + link + "')}}";
				print(words, end = ' ');
			else:
				print(words, end = ' ');
		print();
	return l;
print(render("""<script src="js/jquery.min.js" ></script>
<script src="js/bootstrap.min.js" ></script>
<script src="jquery/js/jquery-1.9.0.min.js" ></script>
<script src="jquery/js/jquery-ui-1.10.0.custom.min.js" ></script>
<script src="main.js" ></script>"""))