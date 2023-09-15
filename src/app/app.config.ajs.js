export default function(appModule) {
    appModule.config(function ($routeProvider, $sceDelegateProvider) {
        $routeProvider.
            when('/phones', {
            template: '<phone-list></phone-list>'
            }).
            when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
            }).
            otherwise('/phones');
        $sceDelegateProvider
            .resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self','**',
            // Allow loading from our assets domain. **.
            'http://localhost:9000/**',
            'http://localhost:7001/**'
            ]);
    });
}
