Package.describe({
    name: 'polyroid:iron-a11y-announcer',
    version: '1.0.3',
    summary: 'A singleton element that simplifies announcing text to screen readers.',
    git: 'https://github.com/Polyroid/iron-a11y-announcer.git'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0'
    ], 'client');

    api.addAssets([
        'iron-a11y-announcer.html'
    ], 'client');
});
