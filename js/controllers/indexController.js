var app = angular.module("myApp",[]);
	app.controller("myCtrl",function($scope){
		$scope.title = "Payment Methods";
		$scope.contador = 3;
		$scope.agregar = false;
		$scope.credicard = false;
		$scope.bankaccount = false;
		$scope.paymentMethods = [
		{number: '1', paymentHolder: 'Ely', paymentCompany: 'Provincial'},
		{number: '2', paymentHolder: 'Elvis', paymentCompany: 'Mercantil'},
		{number: '3', paymentHolder: 'Hector', paymentCompany: 'Banesco'}
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

		$scope.customerPayment = {
			creditCardPm:[{
				number: '', 
				cardHolder: '', 
				bynes: '', 
				type: '', 
				paymentCompany:{
					code: '', 
					name: ''
				}
			}],
		};

		
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
		}

		$scope.bankaccountf = function(){
			console.log($scope.bankaccount);
			$scope.credicard = false;
			if ($scope.bankaccount == false) {
				$scope.bankaccount = true;
			} else if ($scope.bankaccount == true) {
				$scope.bankaccount = false;
			}
		}

		$scope.addItem = function () {
			$scope.contador = $scope.contador + 1;
			$scope.paymentMethods.push({
				number: $scope.contador,
				paymentHolder: $scope.Holder,
				paymentCompany: $scope.paymentCompany
			})

			 $scope.Holder = '';
			 $scope.paymentCompany = '';
			 $scope.bynes = '';
			 $scope.usertype = '';

		}

		$scope.addCredi = function () {
			
		}

	});