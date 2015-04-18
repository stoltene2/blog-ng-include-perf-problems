'use strict';

angular.module('app').directive('productTitle', function() {
  return {
    templateUrl: 'views/product-title.html'
  };
});

angular.module('app').directive('productDetails', function() {
  return {
    templateUrl: 'views/product-details.html'
  };
});

angular.module('app').directive('productReviews', function() {
  return {
    templateUrl: 'views/product-reviews.html'
  };
});

angular.module('app').directive('productSpecs', function() {
  return {
    templateUrl: 'views/product-specs.html'
  };
});
