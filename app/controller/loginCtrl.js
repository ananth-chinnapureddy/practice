(function () {
    'use strict';
    mainApp.controller("loginCtrl", ['$scope', '$location', '$ajaxFactory', '$translate', loginCtrl]);

    function loginCtrl($scope, $location, $ajaxFactory, $translate) {
        var vm = $scope;
        vm.signFormData = {};
        vm.isCustomError = false;
        vm.signMsg = "";
        vm.authentitionAction = function (form) {
            if(form.$valid) {
                var test = vm;
                var promise = $ajaxFactory.getUserData('GET');
                promise.then(function (d) {
                    test.serverValidation(d);
                });
                promise.catch(function (d) {
                    console.log('catch block executed', d);
                    return d;
                });
            }
        }
        vm.serverValidation = function (data) {
            vm.isCustomError = true;
            vm.signMsg = $translate.instant('ananth');
            angular.forEach(data, function (obj, index) {
                if((vm.signFormData.userNameStr == obj.username) && (vm.signFormData.passwordStr == obj.password)) {
                    vm.isCustomError = false;
                    vm.signMsg = "";
                    // $location.url('/dashboard');
                    //$location.url('/formLayout');
                    $location.url(appConstant.storage);
                }
            });
        }
    } // controller end
})();
