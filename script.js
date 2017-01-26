$(document).ready(function(){
	var rssURL='http://www.lib.ntu.edu.tw/rss/newsrss.xml';
	$.ajax({
		url:'cdxml.php',
		type:'GET',
		dataType:'xml',
		data:{
			url:rssURL
		}
	})
	.done(function(data){
		console.log(data);
		$(data).find('channel item').each(function(){
			var itemTitle=$(this).find('title').text();
			var permaLink=$(this).find('link').text();

			$('#latest').append(
				$('<li></li>').append(
					$('<a></a>').attr('href',permaLink)
					.text(itemTitle)
				)
			)
		});
	})
	.fail(function(){
		window.alert('資料讀取失敗。');
	});
});
