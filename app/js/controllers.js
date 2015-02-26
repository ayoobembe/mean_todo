app.controller("taskController", ["$scope", function($scope) {

    $scope.tasks = [
      {"title": "Create angular app"},
      {"title": "Create a blog"},
      {"title": "Tweet about my love for Phox"},
      {"title": "Listen to more 'Thisnao'"}
    ]

    $scope.addTask = function() {
      $scope.tasks.push({ title: $scope.new_task});
      $scope.new_task = '';
    }

}]);
