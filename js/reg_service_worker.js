// registers serviceworker
if ('serviceWorker' in navigator) {
    console.log('Service worker authorization in progress.');
    navigator.serviceWorker.register('./service_worker.js').then(function() {
            console.log('Authorization Activated!');
        })
        .catch(function() {
            console.log('Authorization Unsuccessful!');
        })
} else {
    console.log('Service worker not supported.');
}