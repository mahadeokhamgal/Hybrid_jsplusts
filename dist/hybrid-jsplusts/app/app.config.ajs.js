export default function(appModule) {
    appModule.config(function ($routeProvider) {
        $routeProvider.
            when('/phones', {
            template: '<phone-list></phone-list>'
            }).
            otherwise('/phones');
    });
}
