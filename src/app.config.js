import homeTemplate from './home/home.html'

export default function routing ($urlRouterProvider, $locationProvider, $stateProvider) {
    'ngInject'; 

    $stateProvider
    .state('home', {
        url: '/home',
        views: {
            'home': {
                template: homeTemplate,
                controller: 'HomeController',
                controllerAs: 'vm'
            }
        }
    });

    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
};