Package.describe({
    name: 'cultofcoders:storm-admin',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Build admin pages with ease!',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/cult-of-coders/storm-admin',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.4.2.3');

    const packages = [
        'underscore',
        'react',
        'cultofcoders:grapher',
        'cultofcoders:grapher-react',
        'ecmascript'
    ];

    api.use(packages);

    api.mainModule('main.client.js', 'client');
    api.mainModule('main.server.js', 'server');
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('cultofcoders:storm-admin');
    api.mainModule('storm-admin-tests.js');
});
