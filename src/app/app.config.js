

export function routing($urlRouterProvider, $locationProvider, $stateProvider) {
    'ngInject'; 

    $stateProvider
    .state('home', {
        url: '/home',
        views: {
            'home': {
                component: 'appHomeComponent'
            }
        }
    });

    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
};