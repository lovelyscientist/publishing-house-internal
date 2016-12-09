angular
    .module('app')
    .directive('grid', ['$compile', grid]);

function grid ($compile) {
    return {
      restrict: 'E',
      templateUrl: 'js/grid/components/gridDirective/gridDirective.html',
      replace: true,
      controller: function($scope) {
          $scope.predicate = 'type';
          $scope.reverse = true;
          $scope.PAGE_SIZE = 5;
          $scope.start = 0;
          $scope.dragHead = '';
          $scope.conf = {
            heads: [
              {title: 'Date', key:'date'},
              {title: 'Amount', key: 'amount'}, 
              {title: 'Type', key: 'type'}
            ],
            data: [
              {date: "12/12/2012", amount: 20.48, type: "Food"},
              {date: "12/12/2012", amount: 64.48, type: "Clothes"},
              {date: "12/12/2012", amount: 14.48, type: "Medical"},
              {date: "12/12/2012", amount: 54.48, type: "Food"},
              {date: "12/12/2012", amount: 15.00, type: "Housing"},
              {date: "12/12/2012", amount: 14.48, type: "Food"},
              {date: "12/12/2012", amount: 21.48, type: "Clothes"},
              {date: "12/12/2012", amount: 12.50, type: "Food"},
              {date: "12/12/2012", amount: 14.48, type: "Food"},
              {date: "12/12/2012", amount: 21.30, type: "Housing"},
              {date: "12/12/2012", amount: 14.48, type: "Clothes"},
              {date: "12/12/2012", amount: 14.48, type: "Housing"},
              {date: "12/12/2012", amount: 12.98, type: "Clothes"},
              {date: "12/12/2012", amount: 14.98, type: "Unexpected"},
              {date: "12/12/2012", amount: 22.48, type: "Food"}
            ]
          }

          $scope.hideNext = function () {
              return !($scope.start +  $scope.PAGE_SIZE < $scope.conf.data.length);
          }

          $scope.hidePrev = function () {
              return ($scope.start === 0);
          };

          $scope.nextPage = function () {
              $scope.start = $scope.start + $scope.PAGE_SIZE;
          };

          $scope.prevPage = function(){
            $scope.start= $scope.start - $scope.PAGE_SIZE;
          };
          
          $scope.order = function (predicate) {
              if ($scope.predicate === predicate) {
                  $scope.reverse = !$scope.reverse;
              } else {
                  $scope.reverse = false;
                  $scope.predicate = predicate;
              }              
          };
      }

    };
  }