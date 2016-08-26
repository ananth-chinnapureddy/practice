(function () {
    'use strict';
    mainApp.controller("dashboardCtrl", ['$scope', '$location', '$ajaxFactory', 'NgTableParams', dashboardCtrl]);

    function dashboardCtrl($scope, $location, $ajaxFactory, NgTableParams) {
        var vm = $scope;
        vm.tableDatasource = [];
        vm.tableParams = {};
        var promise = $ajaxFactory.tableData();
        promise.then(function (d) {
            vm.tableDatasource = d;
        });
        promise.catch(function (d) {
            console.log('catch block executed', d);
            return d;
        });
        vm.editItem = function (selectedItem) {
            var promise = $ajaxFactory.editItem(selectedItem.userId, selectedItem);
            promise.then(function (d) {
                console.log('updated ....', d);
            });
            promise.catch(function (d) {
                console.log('catch block executed', d);
                return d;
            });
        }
        vm.removeItem = function (selectedItem) {
            var promise = $ajaxFactory.deleteItem(selectedItem.userId);
            promise.then(function (d) {
                console.log('removed ....', d);
            });
            promise.catch(function (d) {
                console.log('catch block executed', d);
                return d;
            });
        }
        vm.$watch('tableDatasource', function (n, o) {
            if(n != o) {
                vm.tableParams = new NgTableParams({}, { dataset: n })
            }
        });
    } // controller end
})();
