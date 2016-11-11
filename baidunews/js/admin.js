$(document).ready(function () {

//审核所有非法输入
	$("input").keyup(function(){
		if(/['\")-><&\\\/\.]/.test($(this).value)){
			alert('包含特殊字符，不允许提交!');
		}
	});

	var $newstable=$("#newstable tbody");
	refreshNews();
//添加新闻
$("#btnsb").click(function (e) {
	e.preventDefault();

	var newstitleV = $("#newstitle").val();
	var newsimgV = $("#newsimg").val();
	var newstimeV = $("#newstime").val();
	var newssrcV =$("#newssrc").val();
	if (newstitleV===""||newsimgV===""||newstimeV===""||newssrcV==="") {
		if ( newstitleV==="") {
			$("#newstitle").parent().addClass("has-error");
		}else{
			$("#newstitle").parent().removeClass("has-error");
		};
		if ( newsimgV==="") {
			$("#newsimg").parent().addClass("has-error");
		}else{
			$("#newsimg").parent().removeClass("has-error");
		};
		if ( newstimeV==="") {
			$("#newstime").parent().addClass("has-error");
		}else{
			$("#newstime").parent().removeClass("has-error");
		};
		if ( newssrcV==="") {
			$("#newssrc").parent().addClass("has-error");
		}else{
			$("#newssrc").parent().removeClass("has-error");
		};
	}else{
		
			var subdata = {
				newstitle: $("#newstitle").val(),
				newstype: $("#newstype").val(),
				newsimg: $("#newsimg").val(),
				newstime: $("#newstime").val(),
				newssrc: $("#newssrc").val()
			};
			$.ajax({
				url: "server/insert.php",
				type:"post",
				datatype: "json",
				data:subdata,
				success:function (data) {
					console.log(data);
					refreshNews();
				}
			});
	};
});


//删除新闻
var deleteId=null;
$newstable.on('click',".btn-danger",function (e) {
	$("#deleteModal").modal("show");
	deleteId = $(this).parent().prevAll().eq(3).html();
});
$("#deleteModal #confirmDelete").click(function () {
	$.ajax({
			url: "server/delete.php",
			type:"post",
			datatype: "json",
			data:{newsid:deleteId},
			success:function (data) {
				console.log(data);
				$("#deleteModal").modal("hide");
				refreshNews();
			}
		})
});


//修改新闻
var updateId=null;
$newstable.on('click',".btn-primary",function (e) {
	$("#updateModal").modal("show");
	updateId = $(this).parent().prevAll().eq(3).html();
	$.ajax({
			url: "server/curnews.php",
			type:"get",
			datatype: "json",
			data:{newsid:updateId},
			success:function (data) {
				if (data[0].newstitle != "undefined") {
					$("#u_newstitle").val(data[0].newstitle);
					$("#u_newstype").val(data[0].newstype);
					$("#u_newsimg").val(data[0].newsimg);
					var utime = data[0].newstime.split(" ")[0];
					$("#u_newstime").val(utime);
					$("#u_newssrc").val(data[0].newssrc);
				}else{
					console.log(data);
				}
			}
		})
});
$("#updateModal #confirmUpdate").click(function () {
			var updata = {
				newstitle: $("#u_newstitle").val(),
				newstype: $("#u_newstype").val(),
				newsimg: $("#u_newsimg").val(),
				newstime: $("#u_newstime").val(),
				newssrc: $("#u_newssrc").val(),
				newsid:updateId
			};
		$.ajax({
				url: "server/update.php",
				type:"post",
				datatype: "json",
				data:updata,
				success:function (data) {
					console.log(data);
					$("#updateModal").modal("hide");
					refreshNews();
				}
			});
	
});

//刷新新闻内容
function refreshNews() {
	//清除新闻栏里的所有新闻
	$newstable.empty();
	$.ajax({
		url:"server/getnews.php",
		type:"get",
		datatype: "json",
		success:function (data){
			data.forEach(function (item,index,array) {
				var $tdid = $("<td>").html(item.id);
				var $tdtype=$("<td>").html(item.newstype);
				var $tdtitle=$("<td>").html(item.newstitle);
				var $tdimg=$("<td>").html(item.newsimg);
				var $tdtime=$("<td>").html(item.newstime);
				var $tdsrc=$("<td>").html(item.newssrc);
				var $tdctrl = $("<td>");
				var $btnupdate = $("<button>").addClass("btn btn-primary btn-xs").html("编辑");
				var $space = $("<span>").html(" ");
				var $btndelete = $("<button>").addClass("btn btn-danger btn-xs").html("删除");
				$tdctrl.append($btnupdate,$space,$btndelete);
				var $tRow = $("<tr>");
				$tRow.append($tdid,$tdtype, $tdtitle,$tdtime,$tdctrl);
				$newstable.append($tRow);			
				})
			 }
		})
	
}




})


