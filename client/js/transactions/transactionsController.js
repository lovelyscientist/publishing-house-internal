function Dashboard($injector) {
    return {
        restrict: 'E',
        templateUrl: 'js/transactions/addToShoppingList.html',
        controller: ListController,
        link($scope, element, attr, ctrl) {
           dragula([$('.leftEl')[0], $('.rightEl')[0]])
           .on('drag', function (el) {
                console.log(el);
            })
        }
    };
}

ListController.$inject = ['$scope', '$modal', '$ionicModal', '$filter'];

function ListController ($scope, $modal,$ionicModal, $filter) {
  $scope.todos = [{text: 'make todo on angular', number: 1}];
  $scope.lastTodo='';
  $scope.addItem = function (item) {
      $scope.todos.push({text: item, number: $scope.todos.length + 1});
      $scope.clearInput();
  };

  $scope.onEnter = function (keyEvent) {
    if (keyEvent.keyCode === 13) {
        $scope.addItem($scope.lastTodo);
    }
  };

  $scope.remove = function (item) {
      let index = $scope.todos.indexOf(item);

      $scope.todos.splice(index, 1);
  };

  $scope.clearInput = function () {
      $scope.lastTodo = '';
  };

   var myModal = $modal({title: "Title", templateUrl: "js/transactions/addTransactionV2.html", placement: 'center', show: false, backdrop: 'static', controller: 'ListController', $scope: $scope});

  $scope.showModal = function() {
        myModal.show();
  };
  
  $scope.currentTransaction = {
    date: '',
    amount: '',
    type: "Food"
  }

  $scope.addTransaction = function () {
      $scope.currentTransaction.amount = parseFloat($scope.currentTransaction.amount);
  }
}

angular
    .module('app')
    .directive('dashboard', Dashboard);