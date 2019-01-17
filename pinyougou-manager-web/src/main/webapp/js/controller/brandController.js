 //品牌控制层 
app.controller('brandController',function($scope,brandService,$controller){
	
	//继承   scope公用
	$controller('baseController',{$scope:$scope});
	
	
	
	$scope.findAll=function(){
		brandService.findAll().success(
			function (response) {
				$scope.list=response;
			}
		);
	}
	

	//获取分页数据
	$scope.findPage=function(page,size){
		brandService.findPage(page,size).success(
			function(response){
				$scope.list=response.rows;//当前页的数据
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}		
		);
	}
	
	//新增
	$scope.save=function(){
		var method=null
		if($scope.entity.id!=null){
			var method=brandService.update($scope.entity)
		}else{
			method=brandService.add($scope.entity)
		}
		
		method.success(
			function(response){
				if(response.success){
					$scope.reloadList();//重新加载
				}else{
					alert(response.message)
				}
			}		
		);
	}
	
	
	//查找
	$scope.findOne=function(id){
		brandService.findOne(id).success(
			function(response){
				$scope.entity=response;
			}		
		);
	}
	
	
	//删除
	$scope.dele=function(){
		brandService.dele($scope.selectIds).success(
			function(response){
				if(response.success){
					$scope.reloadList();//重新加载
				}else{
					alert(response.message)
				}
			}		
		);
	}
	
	$scope.searchEntity={};
	//按照条件查询
	$scope.search=function(page,size){
		brandService.search(page,size,$scope.searchEntity).success(
 				function(response){
 					$scope.list=response.rows;//当前页的数据
 					$scope.paginationConf.totalItems=response.total;//更新总记录数
 				}		
 			);
	}

});