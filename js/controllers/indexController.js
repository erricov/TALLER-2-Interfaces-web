var app = angular.module("myApp",[]);
	app.controller("myCtrl",function($scope){
		$scope.title = "Payment Methods";
		$scope.contador = 3;
		$scope.agregar = false;
		$scope.credicard = false;
		$scope.bankaccount = false;
		$scope.paymentMethods = [
		{id: '1', number: '12428477284', paymentHolder: 'Ely', paymentCompany: 'Provincial'},
		{id: '2', number: '48294829842', paymentHolder: 'Elvis', paymentCompany: 'Mercantil'},
		{id: '3', number: '12323233323', paymentHolder: 'Hector', paymentCompany: 'Banesco'}
		];
		$scope.paymentCompanies = [
			{code: '1', name: 'BBVA Provincial'},
			{code: '2', name: 'Banesco'},
			{code: '3', name: 'Mercantil'},
			{code: '4', name: 'Banco de Venezuela'},
			{code: '5', name: 'BOD'}
		];

		$scope.types = [
			{code: '1', name: 'VISA'},
			{code: '2', name: 'MasterCard'},
			{code: '3', name: 'AmericanExpress'}
		];

		$scope.contadorCC = 1;
		$scope.customerPaymentCC = [
			{id: '1', number: '3232323', holder: 'Jose', bynes: '342', type: 'VISA', paymentCompany: {name:'Banesco', code: ''}}
		];

		$scope.contadorBA = 1;
		$scope.customerPaymentBA = [
			{id: '1', number: '3232323', holder: 'Jose',  email: 'jose@hotmail.com', paymentCompany: {name:'Banesco', code: ''}}
		];
		

		console.log($scope.customerPayment);
		
		$scope.agregarp = function(){
			console.log($scope.agregar);
			if ($scope.agregar == false) {
				$scope.agregar = true;
			} else if ($scope.agregar == true) {
				$scope.agregar = false;
			}
			
		};

		$scope.credicardf = function(){
			console.log($scope.credicard);
			$scope.bankaccount = false;
			if ($scope.credicard == false) {
				$scope.credicard = true;
			} else if ($scope.credicard == true) {
				$scope.credicard = false;
			}
		};

		$scope.bankaccountf = function(){
			console.log($scope.bankaccount);
			$scope.credicard = false;
			if ($scope.bankaccount == false) {
				$scope.bankaccount = true;
			} else if ($scope.bankaccount == true) {
				$scope.bankaccount = false;
			}
		};

		$scope.addItem = function () {
			$scope.contador = $scope.contador + 1;
			$scope.paymentMethods.push({
				id: $scope.contador,
				number: $scope.number,
				paymentHolder: $scope.Holder,
				paymentCompany: $scope.paymentCompany
			})		

		};

		$scope.addCredi = function () {
			$scope.contadorCC =  $scope.contadorCC + 1;
			console.log("si sirve");
			$scope.customerPaymentCC.push({
				id: $scope.contadorCC, 
				number: $scope.number, 
				holder: $scope.Holder, 
				bynes: $scope.bynes, 
				type: $scope.usertype, 
				paymentCompany: {code: $scope.paymentCompanies.code, name: $scope.paymentCompany}
				})

			 $scope.number = '';
			 $scope.Holder = '';
			 $scope.paymentCompany = '';
			 $scope.bynes = '';
			 $scope.usertype = '';
		};

		$scope.addBank = function (){
			$scope.contadorBA = $scope.contadorBA + 1;
			$scope.customerPaymentBA.push({
				id: $scope.contadorBA,
				number: $scope.number,
				holder: $scope.Holder,
				email: $scope.email,
				paymentCompany: {code: '', name: $scope.paymentCompany}
			})

			 $scope.number = '';
			 $scope.Holder = '';
			 $scope.paymentCompany = '';
			 $scope.email = '';
		};

	});