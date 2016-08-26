var mainApp = angular.module('mainApp', ['ngRoute', 'ngMessages', 'pascalprecht.translate', 'ui.bootstrap', 'ngTable']);
(function () {
    'use strict';
    mainApp.config(['$routeProvider', '$translateProvider', 'appConstant', myConfigFun
]);

    function myConfigFun($routeProvider, $translateProvider, appConstant) {
        // locatiozation
        $translateProvider.useStaticFilesLoader({
            prefix: appConstant.localFilePath + 'locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('fr');
        // end of local
        $routeProvider.when(appConstant.login, {
                templateUrl: appConstant.filesPath + 'login.html'
            })
            .when(appConstant.dashboard, {
                templateUrl: appConstant.filesPath + 'dashboard.html',
                controller: 'dashboardCtrl'
            })
            .when(appConstant.formLayout, {
                templateUrl: appConstant.filesPath + 'formLayout.html',
                controller: 'formLayoutCtrl'
            })
            .when(appConstant.storage, {
                templateUrl: appConstant.filesPath + 'storage.html',
                controller: 'storageCtrl'
            })
            .when(appConstant.ShippingContat, {
                templateUrl: appConstant.filesPath + 'ShippingContat.html',
                controller: 'ShippingCtrl'
            })
            .when(appConstant.userlogin, {
                templateUrl: appConstant.filesPath + 'userlogin.html',
                controller: 'userloginCtrl'
            })
            .when(appConstant.tabledata, {
                templateUrl: appConstant.filesPath + 'tabledata.html',
                controller: 'tabledataCtrl'
            })
            .when(appConstant.showdata, {
                templateUrl: appConstant.filesPath + 'showdata.html',
                controller: 'showdataCtrl',
                controllerAs: 'show'
            })
            .when(appConstant.landing, {
                templateUrl: appConstant.filesPath + 'landing.html'
            })
            .otherwise({
                redirectTo: appConstant.login
            });
    } // config ended
    mainApp.run(['$rootScope', '$log', myRunFn]);

    function myRunFn($rootScope, $log) {
        $log.debug('app started.');
    }
})();
