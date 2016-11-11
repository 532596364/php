<?php
	header("Content-type: appliaction/json;charset=utf-8");
	require_once("db.php");
	if ($link) {
		//获取ID
		$id = $_POST['newsid'];
		//判断参数是否为空
		if (!$id) {
			echo json_encode(array("error"=> "id 为空"));
			exit();
		}else{
			//删除语句
			$sql = "DELETE FROM news WHERE news.id = {$id}";
			//设置编码
				mysqli_query($link,"SET NAMES utf8");
				//删除
				$result = mysqli_query($link,$sql);
				//判断删除是否成功
				if($result){
					echo json_encode(array("success"=>"删除成功"));
				}else{
					echo json_encode(array("error"=>"删除失败"));
				};
			};
		}else{
			echo json_decode(array("error"=>"连接失败"));
		};
		//关闭连接
		mysqli_close($link);
		
?>