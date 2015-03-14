function NotificationsDirective($timeout) {
  const HIDE_DELAY = 3 * 1000;

  return {
    restrict: 'EA',
    template: require('./template.html'),
    scope: {
        iconPrefix: '@'
    },
    link($scope) {
      let counter = 0;
      let notifications = $scope.notifications = [];

      let prefix = $scope.iconPrefix || 'fa';
      $scope.closeClass = `${prefix} ${prefix}-times`;

      $scope.$on('ngNotifications:notify', (event, type, message) => {
        let id = counter++;
        notifications.push({id, type, message});
        let timer = $timeout(() => {
          $scope.close(id);
          $timeout.cancel(timer);
        }, HIDE_DELAY);
      });

      $scope.$on('ngNotifications:closeAll', () => {
        notifications.length = 0;
      });

      $scope.close = (id) => {
        let found = -1;
        for (let i = 0; i < notifications.length; i++) {
          if (notifications[i].id === id) {
            found = i;
            break;
          }
        }
        if (found !== -1) {
          notifications.splice(found, 1);
        }
      };
    }
  };
}

NotificationsDirective.$inject = ['$timeout'];

module.exports = NotificationsDirective;
