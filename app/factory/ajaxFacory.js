(function () {
    'use strict';
    mainApp.factory('$ajaxFactory', ['$http', '$q', ajaxFactory]);

    function ajaxFactory($http, $q) {
        var tableApi = 'https://jsonplaceholder.typicode.com/posts';
        var users = './app/data/users.json';
        var empAPI = './app/data/employeedata.json';
        var methods = {
            getDataFromServer: getDataFromServer,
            getUserData: getUserData,
            tableData: tableData,
            deleteItem: deleteItem,
            editItem: editItem,
            getEmployeeData: getEmployeeData
        }
        return methods;
        /* Implimentations*/
        function getDataFromServer(path, method, params) {
            var deferred = $q.defer();
            $http({
                    method: method,
                    url: path,
                    data: JSON.stringify(params),
                })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });
            return deferred.promise;
        }

        function getUserData(methodName) {
            return getDataFromServer(users, methodName, {});
        }

        function tableData() {
            return getDataFromServer(tableApi, 'get', {});
        }

        function deleteItem(id) {
            return getDataFromServer(tableApi + '/' + id, 'DELETE', {});
        }

        function editItem(id, data) {
            return getDataFromServer(tableApi + '/' + id, 'PUT', data);
        }

        function getEmployeeData() {
            return getDataFromServer(empAPI, 'get', {});
        }
    }
})();
