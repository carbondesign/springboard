angular.module('springboard')
    .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'client/home/home.html',
                controller: 'Home'
            })
            .state('setGoals', {
                url: '/setgoals',
                templateUrl: 'client/goals/setGoals.html',
            })
            .state('goalProgress', {
                url: '/goalprogress',
                templateUrl: 'client/goals/goalProgress.html',
                controller: 'GoalProgress'
            })
            .state('learnMore', {
                url: '/learnmore',
                templateUrl: 'client/learnMore/learnMore.html',
            });

        $urlRouterProvider.otherwise("/home");
    })
    .run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            if (error === 'AUTH_REQUIRED') {
                $state.go('home');
            }
        });
    });
