(function ()
{
    'use strict';

    angular
        .module('app.quick-panel', [])
        .config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider, msApiProvider)
    {
        // Translation
        $translatePartialLoaderProvider.addPart('app/quick-panel');

        // Api
        msApiProvider.register('quickPanel.activities', ['quick-panel/activities.json']);
        msApiProvider.register('quickPanel.contacts', ['quick-panel/contacts.json']);
        msApiProvider.register('quickPanel.events', ['quick-panel/events.json']);
        msApiProvider.register('quickPanel.notes', ['quick-panel/notes.json']);
    }
})();
