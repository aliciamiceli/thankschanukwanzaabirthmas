"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
});


app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
  firebase.initializeApp(FIREBASE_CONFIG);
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){

    let logged = AuthFactory.isAuthenticated();

    let appTo;

    if(currRoute.originalPath){
      appTo = currRoute.originalPath.indexOf('/auth') !== -1;
   }

    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/auth');
    }

  });
});

app.config(function($routeProvider){
  $routeProvider
    .when('/authRegister', {
    templateUrl: 'partials/authRegister.html',
    controller: 'AuthCtrl'
    })
    .when('/authLogin', {
      templateUrl: 'partials/authLogin.html',
      controller: 'AuthCtrl'
    })
   .otherwise('/authRegister');
});