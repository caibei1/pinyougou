app.controller('baseController',function($scope){
	//分页控件配置  currentPage当前页  totalItems总记录数  itemsPerPage每页记录数                                                        
	//perPageOptions分页选项    onChange当页码变更后  自动触发的事件
	$scope.paginationConf = {
			 currentPage: 1,
			 totalItems: 10,
			 itemsPerPage: 5,
			 perPageOptions: [5,10, 20, 30, 40, 50],
			 onChange: function(){
				$scope.reloadList();//重新加载
			 }
	}; 
	
	//刷新列表
	$scope.reloadList = function(){
		 $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);//重新加载
	}
	
	
	//用户勾选的id集合
	$scope.selectIds=[];
	
	//获取ids
	$scope.updateSelection=function($event,id){
		if($event.target.checked){
			$scope.selectIds.push(id);//push  向集合添加元素
		}else{
			var index = $scope.selectIds.indexOf(id);//查找在集合的位置
			 $scope.selectIds.splice(index,1);//移除位置  参数2移除几个元素
		}
		
	}
	
	//json提取数据
	$scope.jsonToString=function(jsonString,key){
		var json = JSON.parse(jsonString)
		var value = ""
		for(var i=0;i<json.length;i++){
			if (i==0){
				value += json[i][key];
			}else{
				value += ","+json[i][key];
			}
		}
		return value;
	}
	
})