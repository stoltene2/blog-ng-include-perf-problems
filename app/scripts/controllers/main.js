'use strict';

angular.module('app')
  .controller('MainCtrl', function ($scope) {

    $scope.showDetails = false;
    $scope.toggleDetails = function() {
      $scope.showDetails = !$scope.showDetails;
    };

    $scope.products = [ ];

    var product = {
      name: 'Guide to fast AngularJS apps',
      price: 10.35,
      description: 'A potentially really long description',
      specifications: [
        {
          name: 'weight',
          value: '3'
        }
      ],
      reviews: [
        {
          userName: 'Eric Stolten',
          rating: 5,
          review: 'Really long review'
        }
      ]
    };

    for(var i = 0; i < 100; i++) {
      $scope.products.push(product);
    }

  });
