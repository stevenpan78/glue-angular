var Maincontrol = function Maincontrol($scope){
	var self=this;
	self.name = 'Mark Hemanth';
	$scope.name= 'Benjamin Cox';
}

angular
	.module('myapp')
	.controller('Maincontrol',Maincontrol);