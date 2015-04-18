'use strict';

angular.module('app')
  .controller('MainCtrl', function ($scope) {

    $scope.expand = function(p) {
      p.expanded = !p.expanded;
    };

    $scope.products = [ ];

    $scope.form = {totalProducts: 10};

    var product = {
      expanded: false,
      name: 'Guide to fast AngularJS apps',
      price: 10.35,
      description: 'Lorem ipsum dolor sit callet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      specifications: [
        {
          name: 'weight',
          value: '3'
        },
        {
          name: 'length',
          value: '20'
        },
        {
          name: 'height',
          value: '10'
        },
        {
          name: 'color',
          value: '30'
        }

      ],
      reviews: [
        {
          userName: 'Eric Stolten',
          rating: 5,
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          userName: 'Eric Stolten',
          rating: 3,
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          userName: 'Eric Stolten',
          rating: 1,
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
    };

    $scope.generateProducts = function() {
      var ps = [];

      for(var i = 0; i < $scope.form.totalProducts; i++) {
        ps.push(product);
      }

      $scope.products = ps;
    };

    $scope.generateProducts();
  });
