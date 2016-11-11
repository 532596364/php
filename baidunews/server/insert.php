<?php
	header("Content-type: appliaction/json;charset=utf-8");
	// 链接数据库
	require_once('db.php');

	if ($link) {
		//将前端传递过来的数据处理
		$newstitle=$_POST["newstitle"];
		$newstype=$_POST["newstype"];
		$newsimg=$_POST["newsimg"];
		$newstime=$_POST["newstime"];
		$newssrc=$_POST["newssrc"];
		if (!$newstitle) {
			echo json_encode(array("error"=> "新闻标题为空"));
			exit();
		}else if (!$newstype) {
			echo json_encode(array("error"=> "新闻类型为空"));
			exit();
		}else if (!$newsimg) {
			echo json_encode(array("error"=> "新闻图片为空"));
			exit();
		}else if (!$newstime) {
			echo json_encode(array("error"=> "新闻时间为空"));
			exit();
		}else if (!newssrc) {
			echo json_encode(array("error"=> "新闻来源为空"));
			exit();
		}else{

			//编写插入语句注意书写格式
			$sql = "INSERT INTO  news (newstype,newstitle,newsimg,newstime,newssrc) VALUES ('{$newstype}','{$newstitle}','{$newsimg}','{$newstime}','{$newssrc}')";
			//设置编码
			mysqli_query($link,"SET NAMES utf8");
			//执行插入语句
			$result = mysqli_query($link,$sql);
			//判断是否插入成功
			if ($result) {
				echo json_encode(array("success"=> "插入成功"));
			}else{
				echo json_encode(array('Error' => "插入失败"));
			};
		};
	}else{
		//判断是否连接成功
		echo json_encode(array("Error"=> "连接失败"));
		};
	//关闭链接
	mysqli_close($link);
?>