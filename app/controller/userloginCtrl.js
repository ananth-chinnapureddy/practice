(function () {
    'use strict';
    mainApp.controller("userloginCtrl", ['$scope', '$location', '$translate', '$uibModal', 'appConstant', userloginCtrl]);

    function userloginCtrl($scope, $location, $translate, appConstant, $uibModal) {
        // $scope.myName = "ananth";
        var vm = $scope;
        vm.user = {};
        vm.users = [{ "id": 1, "username": "ananth", "address": "hyderabad", "emailstr": "raviurlams@gmail.com" }, { "id": 2, "username": "reddy", "address": "banglore", "emailstr": "ananth@gmail.com" }, { "id": 3, "username": "amar", "address": "chenni", "emailstr": "amar@gmail.com" }];
        vm.submit = function () {
            if(vm.user.id == undefined) {
                vm.user.id = vm.users.length + 1;
                vm.users.push(vm.user); //Or send to server, we will do it in when handling services
            } else {
                for(var i = 0; i < vm.users.length; i++) {
                    if(vm.users[i].id === vm.user.id) {
                        vm.users[i] = vm.user;
                        break;
                    }
                }
                console.log('User updated with id ', vm.user.id);
            }
            vm.reset();
        };
        vm.edit = function (id) {
            console.log('id to be edited', id);
            for(var i = 0; i < vm.users.length; i++) {
                if(vm.users[i].id === id) {
                    vm.user = angular.copy(vm.users[i]);
                    break;
                }
            }
        }
        vm.remove = function (id,size) {
            console.log('id to be deleted', id);
            for(var i = 0; i < vm.users.length; i++) {
                if(vm.users[i].id === id) {
                    vm.users.splice(i, 1);
                    if(vm.user.id === id) { //It is shown in form, reset it.
                        vm.reset();
                    }
                    break;
                }
            }
            var modalInstance = $uibModal.open({
                templateUrl: 'myModalContent.html',
                size: size
                    // resolve: {
                    //     items: function () {
                    //         return $scope.items;
                    //     }
                    // }
            });
        }
        vm.reset = function () {
            vm.user = { username: '', address: '', emailstr: '' };
            $scope.mysignform.$setPristine();
        }
    }
})();
