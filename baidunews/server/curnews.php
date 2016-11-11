<?php
	header("Content-type: appliaction/json;charset=utf-8");
	require_once("db.php");
	if ($link) {
		//获取id
		$id = $_GET['newsid'];
		if (!$id) {
			echo json_encode(array("error"=> "id 为空"));
			exit();
		}else{
			//查询语句
			$sql = "SELECT * FROM news WHERE id = {$id}";
			//设置编码
				mysqli_query($link,"SET NAMES utf8");
				$result = mysqli_query($link,$sql);
				$senddata=array();
				//将结果变成适合的数据类型存到senddata中
				//判断查询结果是否为空
				if($result){
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
						echo json_encode($senddata);
					}else{
						echo json_encode(array("error"=>"删除失败"));
					};
			}
		}else{
				echo json_decode(array("error"=>"连接失败"));
			};
		//关闭连接
		mysqli_close($link);
		
?>