class Notifier {
    constructor(scope) {
        this.scope = scope;
    }

    notify(type, message) {
        this.scope.$broadcast('ngNotifications:notify', type, message);
    }

    closeAll() {
        this.notify('ngNotifications:closeAll');
    }

    error(message) {
        this.notify('error', message);
    }

    warning(message) {
        this.notify('warning', message);
    }

    info(message) {
        this.notify('info', message);
    }
}

module.exports = Notifier;
