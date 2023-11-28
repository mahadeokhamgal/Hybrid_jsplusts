export default function(appModule) {
    appModule.config(function ($routeProvider) {
        $routeProvider.
            when('/phones', {
            template: '<phone-list></phone-list>'
            }).
            when('/phones/:phoneId', {
            template: '<phone-list></phone-list><phone-detail></phone-detail>'
            }).
            otherwise('/phones');
    });
}
