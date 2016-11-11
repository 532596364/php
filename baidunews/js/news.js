$(document).ready(function () {
	var $lists = $("article ul");
	refreshNews();
	$('nav a').click(function (e) {
		e.preventDefault();
		var type = $(this).text();
		refreshNews(type);
	})
//更新新闻
function refreshNews(type) {
	//清除新闻栏里的所有新闻
	if (!arguments.length) {
		type = null;
	}
	$lists.empty();
	$.ajax({
		url:"server/getnews.php",
		type:"get",
		datatype: "json",
		data:{newstype:type},
		success:function (data) {
			if (data[0].newstitle != "undefined" ) {
				data.forEach(function (item,index,array) {
				var $lists = $("article ul");
				var $list = $("<li></li>").addClass("news-list").prependTo($lists);
				var $newsimg = $("<div></div>").addClass("newsimg").appendTo($list);
				var $img = $("<img>").attr("src",item.newsimg).appendTo($newsimg);
				var $newsContent = $("<div></div>").addClass("newscontent").appendTo($list);
				var $h1 = $("<h1></h1>").html(item.newstitle).appendTo( $newsContent);
				var $p = $("<p></p>").appendTo( $newsContent);
				var $newstime = $("<span></span>").addClass("newstime").html(item.newstime).appendTo($p);
				var $newssrc = $("<span></span>").addClass("newssrc").html(item.newssrc).appendTo($p);
				})
			}else{
				console.log(data);
			}
			}
		})	
	}
})

