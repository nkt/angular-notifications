const Notifier = require('./notifier');
const NotificationsDirective = require('./notifications-directive');

let ngNotifications = angular.module('ngNotifications', []);

ngNotifications.service('$notifier', ['$rootScope', Notifier]);
ngNotifications.directive('ngNotifications', NotificationsDirective);

module.exports = 'ngNotifications';
