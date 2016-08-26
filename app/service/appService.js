mainApp.service('feedbackService', function ($http) {
    this.getFeedbackPaged = function (nodeId, pageNumber, take) {
        $http.get('myUrl', function (response) {
            return response;
        });
    };
});
