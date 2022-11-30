// App State Observer. Updates localdb when notified
const AppObserver = {
    // Need this placeholder update bcz Observable object mandates update method on each observer
    update: () => { throw 'AppObserver: Update method is undefined!' },
    init: function(sync, appData) {
        this.update = () => sync(appData);
    }
}

export default AppObserver;