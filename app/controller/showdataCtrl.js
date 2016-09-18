(function () {
    mainApp.controller('showdataCtrl', ['$scope', '$timeout', '$rootScope', showdataFunc]);

    function showdataFunc($scope, $timeout, $rootScope) {
        var vm = this;
        vm.names = ["Michel", "Roy"];
        vm.print = "ananth";
        vm.counter = 0;
        $scope.test = function(){
            vm.myheader = "ravindra";
        }
        $scope.$watch("print", function (n, o) {
            vm.counter = vm.counter + 1;
            console.log(vm.counter);
        })
        
        $timeout(function () {
            $scope.myheader = "Angular js world";
            $rootScope.car = "benz";
            $rootScope.$digest();
            $rootScope.$apply();
        }, 2000);
    }
})();
