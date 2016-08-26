(function () {
    mainApp.controller('showdataCtrl', ['$scope', showdataFunc]);

    function showdataFunc($scope) {
        var vm = this;
        vm.names = ["Michel", "Roy"];
    }
})();
