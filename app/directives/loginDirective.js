(function () {
    'use strict';
    // Header
    mainApp.directive('loginTemplate', ['appConstant', '$location', '$ajaxFactory', '$translate', headerTemplate]);

    function headerTemplate(appConstant, $location, $ajaxFactory, $translate) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: appConstant.directivesHtmlPath + '/loginDirective.html',
            link: function (scope, element, attrs) {},
            controller: function ($scope, $element, $attrs) {
                var vm = $scope;
                vm.signFormData = {};
                vm.signFormData.userNameStr = 'ananth';
                vm.signFormData.passwordStr = '1234';
                vm.signFormData.emailStr = 'raviurlams@gmail.com';
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
                            $location.url(appConstant.landing);
                        }
                    });
                }
            }
        }
    }
})();
