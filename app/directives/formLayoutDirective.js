(function () {
    'use strict';
    mainApp.directive('ananthReddy', ['appConstant', headerTemplate]);

    function headerTemplate(appConstant) {
        return {
            restrict: "EC",
            replace: true,
            scope: {
                parentdata: '=',
                test: '@',
                myfunc: '&'
            },
            //template: "<div><p>mynameis ananth</p></div>"
            templateUrl: appConstant.directivesHtmlPath + '/CustomDirective.html',
            link: function (scope, ele, attr) {
                scope.emilStr = "ananth@gmail.com";
                scope.userNameStr = "ananth";
                console.log(scope.cityDatasource);
                console.log(scope.parentdata);
                console.log(scope.test);
                scope.myfunc();
            }
        }
        // 
    }
})();
