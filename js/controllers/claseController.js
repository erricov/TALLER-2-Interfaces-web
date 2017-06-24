angular.module('myApp',[])
		.controller('GreetingController', ['$scope', function($scope) {

			
	$scope.greeting = 'Hola!';


	$scope.items = 
	[
		{
		  id: 1,
		  label: 'aLabel',
		  subItem: { name: 'aSubItem' }
		}, 
		{
		  id: 2,
		  label: 'bLabel',
		  subItem: { name: 'bSubItem' }
		},
		{
		  id: 3,
		  label: 'cLabel',
		  subItem: { name: 'cSubItem' }
		}];

	$scope.primerjson={
		datospersonales:{
			nombres:
			{
				primernombre:'',
				segundonombre:'Alexander'
			},
			apellido:'Sangroni',
			cedula:21536846,
			label:''
	    },
	    datoscontacto:{
			telefonos:
			{
				local:'02128585531',
				celular:'04123838807'
			},
			correo:'jeremy.alexander.2510@gmail.com'
	    },
	}

	//console.log($scope.primerjson);
	//console.log($scope.primerjson.datospersonales.nombres.primernombre);



	$scope.firstlist=
	[
		{
			persona:{
				nombres:
				{
					primernombre:'Jeremy',
					segundonombre:'Alexander'
				},
				apellido:'Sangroni',
				cedula:21536846
		    }
	    },
		{
			persona:{
				nombres:
				{
					primernombre:'Jose',
					segundonombre:'Juan'
				},
				apellido:'Marquez',
				cedula:2153236
		    }
		},
		{
			persona:{
				nombres:
				{
					primernombre:'Cristian',
					segundonombre:'Eucebio'
				},
				apellido:'Cuero',
				cedula:12345567
		    }
		}
	];




	$scope.alerta = function (){
		alert('probando');
	};



}]);