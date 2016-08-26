(function () {
    'use strict';
    mainApp.controller("storageCtrl", ['$scope', '$location', 'appConstant', '$ajaxFactory', 'employeeservice', storageCtrl]);

    function storageCtrl($scope, $location, appConstant, $ajaxFactory, employeeservice) {
        // $scope.myName = "ananth";
        var vm = $scope;
        vm.empData = [];
        vm.authenticationAction = function (form) {
            var obj = employeeservice.getFirstList();
            console.log(obj)
            var obj1 = employeeservice.getLastNameList();
            console.log(obj1)
            var obj2 = employeeservice.getRecordByFname('Nelson');
            console.log(obj2);
            var obj3 = employeeservice.getRecordByFnameandRegion('Nelson', 'CA');
            console.log(obj3);
            var obj3 = employeeservice.getRecordsByProperty('movie');
            console.log(obj3);
            var obj4 = employeeservice.getRecordByid(101);
            console.log(obj4);
            var obj5 = employeeservice.getRecordBySal(4000);
            console.log(obj5);
            /*var obj6 = employeeservice.getPhoneNumber(408 - 2222222, '-');
            console.log(obj6);*/
            var obj6 = employeeservice.getRecordByFnameandEmail('Nelson');
            console.log(obj6);
            if(form.$valid) {
                //$location.url(appConstant.formLayout);
                $location.url(appConstant.ShippingContat);
            }
        }
        var promiseObj = $ajaxFactory.getEmployeeData();
        promiseObj.then(function (d) {
            vm.empData = d;
        });
        promiseObj.catch(function (d) {
            console.log('catch block executed', d);
            return d;
        });
        vm.$watch('empData', function (n, o) {
            if(n != o) {
                employeeservice.datSource = n.Employees;
            }
        })
    }
})();
