var app = angular.module('myMorganic', ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider.state("homepage", {
    url: "/",
    templateUrl: "./views/home.html",
    controller: "homeController"
      // data: {
      //      bodyClasses: 'auth'
      //  }
  })
  // .state("search", {
  //   url: "/search",
  //   templateUrl: "./views/search.html",
  //   controller: "appController"
    // data: {
    //        bodyClasses: 'auth'
    //    }
// })
  .state("search", {
    url: "/search",
    templateUrl: "./views/search.html",
    controller: "searchController"
  })
  .state("upload", {
    url: "/upload",
    templateUrl: "./views/upload.html",
    controller: "uploadController"
  })
  .state("cook", {
    url: "/cook",
    templateUrl: "./views/cook.html",
    controller: "cookController"
  })
  .state("groceries", {
    url: "/groceries",
    templateUrl: "./views/groceries.html",
    controller: "groceriesController"
  })
  .state("eat", {
    url: "/eat",
    templateUrl: "./views/eat.html",
    controller: "groceriesController"
  })
  .state("grow", {
    url: "/grow",
    templateUrl: "./views/grow.html",
    controller: "growController"
  })
  .state("farms", {
    url: "/farms",
    templateUrl: "./views/farms.html",
    controller: "farmsController"
  })
  .state("donate", {
    url: "/donate",
    templateUrl: "./views/donate.html",
    controller: "donateController"
  })
  .state("signUp", {
    url: "/signUp",
    templateUrl: "./views/signUp.html",
    controller: "signUpController"
  })
})