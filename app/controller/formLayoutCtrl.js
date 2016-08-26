(function () {
    'use strict';
    mainApp.controller("formLayoutCtrl", ['$scope', '$log', 'appConstant', '$translate', formLayoutCtrl]);

    function formLayoutCtrl($scope, $log, appConstant, $translate) {
        var vm = $scope;
        vm.name = "Volvo";
        vm.formData = {};
        vm.cityDatasource = [];
        vm.record = { "email": "raviurlams@gmail.com", "password": 12323545, "isChkBox": true, "state": "103" };
        vm.stateDataSource = [{ "id": 100, "name": "Andra Pradesh", "districts": [{ "id": 200, "desc": "Srikakulam" }, { "id": 201, "desc": "visakhapatnam" }, { "id": 203, "desc": "Prakasam" }, { "id": 204, "desc": "Guntur" }] }, { "id": 101, "name": "Karnataka", "districts": [{ "id": 300, "desc": "Belgam" }, { "id": 302, "desc": "Mysore" }, { "id": 303, "desc": "KR Puram" }, { "id": 304, "desc": "Marthalli" }] }, { "id": 102, "name": "Telangana", "districts": [{ "id": 305, "desc": "Karimnagar" }, { "id": 306, "desc": "Medhak" }, { "id": 307, "desc": "Nalgonda" }, { "id": 308, "desc": "Hyderabad" }] }, { "id": 103, "name": "Orisaa", "districts": [{ "id": 405, "desc": "Sona Beda" }, { "id": 406, "desc": "Ram Pur" }, { "id": 407, "desc": "Kimudi" }, { "id": 408, "desc": "Jaladhal" }] }]
        vm.stateChange = function () {
            $log.log(' before ', vm.cityDatasource);
            vm.cityDatasource = getDistictObj(vm.formData.statename);
            $log.log(vm.cityDatasource);
        }
        vm.saveData = function () {
            $log.log(vm.formData);
        }
        vm.loadRecord = function () {
            vm.formData.fname = vm.record.email;
            vm.formData.passname = vm.record.password;
            vm.formData.rembername = vm.record.isChkBox;
            vm.formData.tuts = 'tuts';
            vm.formData.statename = vm.record.state;
            vm.cityDatasource = getDistictObj(vm.record.state);
        }

        function getDistictObj(id) {
            if(vm.stateDataSource.length == 0) {
                return [];
            }
            for(var i = 0; i < vm.stateDataSource.length; i++) {
                var obj = vm.stateDataSource[i];
                if(obj.id == id) {
                    return obj.districts;
                }
            }
        }
        vm.loadRecord();
        $('.BSswitch')
            .bootstrapSwitch('state', true);
        $('#TheCheckBox')
            .on('switchChange.bootstrapSwitch', function () {
                $("#CheckBoxValue")
                    .text($('#TheCheckBox')
                        .bootstrapSwitch('state'));
            });
        vm.ShowData = function () {
            //alert("Display Data");
        }
    }
})();
