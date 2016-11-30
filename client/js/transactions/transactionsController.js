function Dashboard($injector) {
    return {
        restrict: 'E',
        templateUrl: 'js/transactions/addToShoppingList.html',
        controller: TaskController,
        controllerAs: 'ctrl',
        link($scope, element, attr, ctrl) {
           dragula([$('.to-do')[0], $('.in-progress')[0], $('.done')[0]])
           .on('drag', function (el) {
                 console.log($(el));
            })
        }
    };
}

angular
    .module('app')
    .directive('dashboard', Dashboard);