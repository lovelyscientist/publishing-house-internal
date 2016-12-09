angular
    .module('app')
    .directive('grid', ['$compile', grid]);


    let collection;

function grid ($compile) {
    return {
      restrict: 'E',
      templateUrl: 'js/transactions/gridDirective.html',
      scope: true,
      bindToController: {
        collection: '@'
      },
      controllerAs: 'ctrl',
      controller: function($scope, taskService) {
          this.taskService = taskService;
          this.scope = $scope;

          $scope.predicate = 'type';
          $scope.reverse = true;
          $scope.PAGE_SIZE = 5;
          $scope.start = 0;
          $scope.dragHead = '';

          $scope.conf = {
            data: this.taskService[this.collection] ? this.taskService[this.collection] : this.taskService.getAuthors(),
            heads: []
          }

          function setHeaders () {
            let object = $scope.conf.data[0],
                result = [];

            for (let header in object) {
              if (header !== '$$hashKey') {
                  $scope.conf.heads.push({value: header, title: header});
              }
              }
          }

          setHeaders($scope.conf);

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