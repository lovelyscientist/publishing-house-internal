angular
    .module('listApp')
    .controller('ListController', ListController);

ListController.$inject = ['$scope'];

function ListController ($scope) {
  $scope.todos = [
      {id: 1, assignee: 'Vlad Sazonov', name: 'Create love story for two of us', remaining: '50m'},
      {id: 2, assignee: 'Anastasuz Cherkashenko', name: 'Make us go for a walk', remaining: '5h50m'},
      {id: 3, assignee: 'Svitlana Tyshchenko', name: 'Is the best mom ever', remaining: '0m'}
    ];
}