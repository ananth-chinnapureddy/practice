(function () {
    'use strict';
    mainApp.controller('tabledataCtrl', ['$scope', tabledataCtrl]);

    function tabledataCtrl($scope) {
        var vm = $scope
        vm.EmpModel = {};
        vm.users = [{ "Id": 1, "username": "ananth", "Salary": 1000 }, { "Id": 2, "username": "redd", "Salary": 2000 }, { "Id": 3, "username": "amar", "Salary": 3000 }];
        vm.submit = function () {
            if(vm.EmpModel.Id == undefined) {
                vm.EmpModel.Id = vm.users.length + 1;
                vm.users.push(vm.EmpModel); //Or send to server, we will do it in when handling services
            } else {
                for(var i = 0; i < vm.users.length; i++) {
                    if(vm.users[i].Id === vm.EmpModel.Id) {
                        vm.users[i] = vm.EmpModel;
                        break;
                    }
                }
                console.log('User updated with id ', vm.EmpModel.Id);
            }
            vm.reset();
        };
        vm.remove = function (Id) {
            console.log('id to be deleted', Id);
            for(var i = 0; i < vm.users.length; i++) {
                if(vm.users[i].Id === Id) {
                    vm.users.splice(i, 1);
                    if(vm.EmpModel.Id === Id) { //It is shown in form, reset it.
                        vm.reset();
                    }
                    break;
                }
            }
        }
        vm.reset = function () {
            vm.EmpModel = { username: '', Id: '', Salary: '' };
            vm.myform.$setPristine();
        }
    };
})();
