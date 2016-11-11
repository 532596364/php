<?php
	header("Content-type: appliaction/json;charset=utf-8");

	// 链接数据库
	require_once("db.php");

	//数据库查询
	if ($link) {
		// echo json_encode(array('success' =>"a"));
		// 数据库查询语句
		$type = $_GET['newstype'];
		if ($type) {
			$sql = "SELECT * FROM news WHERE newstype='{$type}'";
			
		}else{
			$sql = "SELECT * FROM news";
		}
		//设置字符编码
			mysqli_query($link,"SET NAMES utf8");
			//获取查询结果
			$result = mysqli_query($link,$sql);
			if ($result) {
				//返回结果
				$senddata=array();
				//将结果变成适合的数据类型存到senddata中
				while ($row =  mysqli_fetch_array($result)) {
					array_push($senddata,array(
							'id'=>$row['id'],
							'newstype' =>$row['newstype'],
							'newstitle' =>$row['newstitle'],
							'newsimg' =>$row['newsimg'],
							'newstime' =>$row['newstime'],
							'newssrc' =>$row['newssrc']
						));
				};
				//将结果以json类型输出
				echo json_encode($senddata);
			}else{
				echo json_encode(array('error' =>"查询失败"));
			};
			
	}else{
		echo json_encode(array('error' =>"连接失败"));
	};
	//关闭数据库连接
	mysqli_close($link);
?>