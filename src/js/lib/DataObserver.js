// App data observer. Updates localdb when notified
const dataObserver = {
    // Need this placeholder update bcz Observable object mandates update method on each observer
    update: () => '',
    init: function(sync, appData) {
        this.update = () => sync(appData);
    }
}

export default dataObserver;