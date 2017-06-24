angular.module('Repaso',[])
.controller('repasoController',['$scope',function($scope){

	$scope.list=[];
	$scope.repasojson=
	[
		{
			nombre:'Jeremy',
			apellido:'Sangroni',
			cedula:'21536846'
		},
		{
			nombre:'Cristian',
			apellido:'Cuero',
			cedula:'20616754'
		}
		,
		{
			nombre:'Mileydi',
			apellido:'Castillo',
			cedula:'23926219'
		}
	];

	$scope.repasojson2=
	[
		{
			nombre:'Yheyker',
			apellido:'Bastidas',
			cedula:'25368622'
		},
		{
			nombre:'Grecia',
			apellido:'Berroteran',
			cedula:'24749287'
		}
		,
		{
			nombre:'Genesis',
			apellido:'Villegas',
			cedula:'20129659'
		}
	];



	$scope.change=function(){
		console.log($scope.test);
		if($scope.test='Filtro 1'){
			$scope.list=$scope.repasojson;
		}else{
			$scope.list=$scope.repasojson2;
		}
	}
}]);