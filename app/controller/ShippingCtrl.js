(function () {
    'use strict';
    mainApp.controller("ShippingCtrl", ['$scope', '$location', 'appConstant', ShippingCtrl]);

    function ShippingCtrl($scope, $location, appConstant) {
        // $scope.myName = "ananth";
        var vm = $scope;
        vm.authenticationlogin = function (form) {
            if(form.$valid) {
                //$location.url(appConstant.userlogin);
                $location.url(appConstant.tabledata);
            }
        }
    }
})();
