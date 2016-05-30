(function ()
{
    'use strict';

    angular
        .module('app.main', [])
        .config(config);

    /** @ngInject */
    function config(msApiProvider)
    {
      msApiProvider.setBaseUrl('app/data/');
    }
})();
