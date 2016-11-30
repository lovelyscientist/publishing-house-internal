function TaskDetails($injector) {
    return {
        restrict: 'E',
        templateUrl: 'js/transactions/taskDetailsTemplate.html',
        controller: TaskController,
        controllerAs: 'ctrl',
        link($scope, element, attr, ctrl) {}
    };
}

angular
    .module('app')
    .directive('taskDetails', TaskDetails);