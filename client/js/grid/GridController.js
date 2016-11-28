angular
    .module('myApp')
    .controller('GridController', GridController);

GridController.$inject = ['$scope', 'transactionsStore'];

function GridController ($scope, transactionsStore) { 

    $scope.config = {
      heads: [
          {title: 'Date', key:'date'},
          {title: 'Amount', key: 'amount'}, 
          {title: 'Type', key: 'type'}
      ]
    };

     $scope.config.data = transactionsStore.transactions;

    //setHeaders();

    function setHeaders () {
        let object = $scope.config.data[0],
            result = [];

        for (let header in object) {
            $scope.config.heads.push(header);
        }
    }
}