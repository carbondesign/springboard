angular.module('springboard').directive('goalsList', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/goals/goalList.html',
    controllerAs: 'goalsList',
    controller: function ($scope, $reactive) {
      $reactive(this).attach($scope);

      this.newGoal = {};

      this.helpers({
        goals: () => {
          return Goals.find({});
        }
      });

      this.addGoal = () => {
        this.newGoal.owner = Meteor.user()._id;
        Goals.insert(this.newGoal);
        this.newGoal = {};
      };

      this.removeGoal = (goal) => {
        Goals.remove({_id: goal._id});
      }
    }
  }
});