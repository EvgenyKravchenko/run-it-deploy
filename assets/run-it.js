"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('run-it/app', ['exports', 'ember', 'run-it/resolver', 'ember-load-initializers', 'run-it/config/environment'], function (exports, _ember, _runItResolver, _emberLoadInitializers, _runItConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _runItConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _runItConfigEnvironment['default'].podModulePrefix,
    Resolver: _runItResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _runItConfigEnvironment['default'].modulePrefix);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function () {
      console.log('Service Worker Registered');
    });
  }

  exports['default'] = App;
});
define('run-it/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _emberBasicDropdownComponentsBasicDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdown['default'];
    }
  });
});
define('run-it/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _emberBasicDropdownComponentsBasicDropdownContentElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownContentElement['default'];
    }
  });
});
define('run-it/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _emberBasicDropdownComponentsBasicDropdownContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownContent['default'];
    }
  });
});
define('run-it/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _emberBasicDropdownComponentsBasicDropdownTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownTrigger['default'];
    }
  });
});
define('run-it/components/break-time', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['break-time']
  });
});
define('run-it/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('run-it/components/footer-menu', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['footer-menu']
  });
});
define('run-it/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _emberPowerSelectComponentsPowerSelectMultiple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultiple['default'];
    }
  });
});
define('run-it/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleTrigger['default'];
    }
  });
});
define('run-it/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _emberPowerSelectComponentsPowerSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelect['default'];
    }
  });
});
define('run-it/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _emberPowerSelectComponentsPowerSelectBeforeOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectBeforeOptions['default'];
    }
  });
});
define('run-it/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _emberPowerSelectComponentsPowerSelectOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectOptions['default'];
    }
  });
});
define('run-it/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _emberPowerSelectComponentsPowerSelectPlaceholder) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectPlaceholder['default'];
    }
  });
});
define('run-it/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _emberPowerSelectComponentsPowerSelectSearchMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectSearchMessage['default'];
    }
  });
});
define('run-it/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectTrigger['default'];
    }
  });
});
define('run-it/components/talk-item', ['exports', 'ember', 'ember-computed-decorators'], function (exports, _ember, _emberComputedDecorators) {
  function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

  exports['default'] = _ember['default'].Component.extend(_createDecoratedObject([{
    key: 'classNameBindings',
    initializer: function initializer() {
      return ['stream', 'picked', 'not-picked'];
    }
  }, {
    key: 'stream',
    decorators: [(0, _emberComputedDecorators['default'])('talk.stream')],
    value: function stream(talkStream) {
      return talkStream.toLowerCase();
    }
  }, {
    key: 'picked',
    decorators: [(0, _emberComputedDecorators['default'])('pickedTalk')],
    value: function picked(talk) {
      return talk && this.get('talk') === talk;
    }
  }, {
    key: 'not-picked',
    decorators: [(0, _emberComputedDecorators['default'])('pickedTalk')],
    value: function notPicked(talk) {
      return talk && this.get('talk') !== talk;
    }
  }, {
    key: 'activeTalk',
    decorators: [(0, _emberComputedDecorators['default'])('pickedTalk')],
    value: function activeTalk(pickedTalk) {
      return !!pickedTalk;
    }
  }, {
    key: 'actions',
    initializer: function initializer() {
      return {
        pick: function pick() {
          this.get('onPick')(this.get('talk'));
        }
      };
    }
  }]));
});
define('run-it/controllers/now', ['exports', 'ember', 'ember-computed-decorators'], function (exports, _ember, _emberComputedDecorators) {
  function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

  exports['default'] = _ember['default'].Controller.extend(_createDecoratedObject([{
    key: 'pickedTalk',
    initializer: function initializer() {
      return null;
    }
  }, {
    key: 'realTalk',
    decorators: [(0, _emberComputedDecorators['default'])('model.talks.length')],
    value: function realTalk(len) {
      return len === 2;
    }
  }, {
    key: 'empty',
    decorators: [(0, _emberComputedDecorators['default'])('model.talks.length')],
    value: function empty(len) {
      return len === 0;
    }
  }]));
});
define('run-it/controllers/schedule', ['exports', 'ember', 'ember-computed-decorators'], function (exports, _ember, _emberComputedDecorators) {
  function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

  exports['default'] = _ember['default'].Controller.extend(_createDecoratedObject([{
    key: 'streams',
    initializer: function initializer() {
      return ['TECHNICAL', 'BUSINESS'];
    }
  }, {
    key: 'currentStream',
    initializer: function initializer() {
      return 'TECHNICAL';
    }
  }, {
    key: 'currentSpeeches',
    decorators: [(0, _emberComputedDecorators['default'])('model', 'currentStream')],
    value: function currentSpeeches(model, currentStream) {
      return model.filter(function (talk) {
        return [currentStream, 'BOTH'].includes(talk.get('stream'));
      });
    }
  }, {
    key: 'actions',
    initializer: function initializer() {
      return {
        changeStream: function changeStream(stream) {
          console.log(stream);
          this.set('currentStream', stream);
        }
      };
    }
  }]));
});
define('run-it/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('run-it/helpers/app-version', ['exports', 'ember', 'run-it/config/environment'], function (exports, _ember, _runItConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _runItConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('run-it/helpers/cancel-all', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.cancelHelper = cancelHelper;

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      _ember['default'].assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _emberConcurrencyHelpers.taskHelperClosure)('cancelAll', args);
  }

  exports['default'] = _ember['default'].Helper.helper(cancelHelper);
});
define('run-it/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectHelpersEmberPowerSelectIsGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsGroup['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('run-it/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectHelpersEmberPowerSelectIsSelected) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('run-it/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('run-it/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('run-it/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('run-it/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('run-it/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('run-it/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _emberTruthHelpersHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual.isEqual;
    }
  });
});
define('run-it/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('run-it/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('run-it/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('run-it/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('run-it/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('run-it/helpers/perform', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.performHelper = performHelper;

  function performHelper(args, hash) {
    return (0, _emberConcurrencyHelpers.taskHelperClosure)('perform', args, hash);
  }

  exports['default'] = _ember['default'].Helper.helper(performHelper);
});
define('run-it/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('run-it/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _emberRouteActionHelperHelpersRouteAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteActionHelperHelpersRouteAction['default'];
    }
  });
});
define('run-it/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('run-it/helpers/task', ['exports', 'ember'], function (exports, _ember) {
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref);

    var task = _ref2[0];

    var args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports['default'] = _ember['default'].Helper.helper(taskHelper);
});
define('run-it/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('run-it/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'run-it/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _runItConfigEnvironment) {
  var _config$APP = _runItConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('run-it/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('run-it/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('run-it/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports, _emberConcurrency) {
  exports['default'] = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('run-it/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('run-it/initializers/export-application-global', ['exports', 'ember', 'run-it/config/environment'], function (exports, _ember, _runItConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_runItConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _runItConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_runItConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('run-it/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('run-it/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('run-it/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('run-it/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("run-it/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('run-it/models/speaker', ['exports', 'ember-data'], function (exports, _emberData) {
  var attr = _emberData['default'].attr;
  var belongsTo = _emberData['default'].belongsTo;
  exports['default'] = _emberData['default'].Model.extend({
    name: attr('string'),
    about: attr('string'),
    avatarUrl: attr('string'),

    speech: belongsTo()
  });
});
define('run-it/models/speech', ['exports', 'ember-data'], function (exports, _emberData) {
  var attr = _emberData['default'].attr;
  var belongsTo = _emberData['default'].belongsTo;
  exports['default'] = _emberData['default'].Model.extend({
    title: attr('string'),
    description: attr('string'),
    timeStart: attr('string'),
    timeEnd: attr('string'),
    stream: attr('string'),

    speaker: belongsTo()
  });
});
define('run-it/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('run-it/router', ['exports', 'ember', 'run-it/config/environment'], function (exports, _ember, _runItConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _runItConfigEnvironment['default'].locationType,
    rootURL: _runItConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('app');
    this.route('now');
    this.route('schedule');
    this.route('speech', { path: '/speech/:speech_id' });
  });

  exports['default'] = Router;
});
define('run-it/routes/app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('run-it/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {

      this.get('store').push({
        data: [{
          id: 1,
          type: 'speech',
          attributes: {
            title: 'Opening session',
            timeStart: '10:00',
            timeEnd: '10:30',
            stream: 'BOTH'
          },
          relationships: {
            speaker: {
              data: {
                id: 1,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 2,
          type: 'speech',
          attributes: {
            title: 'Start it right. Smart way to start working on incoming project',
            timeStart: '10:30',
            timeEnd: '11:30',
            stream: 'TECHNICAL'
          },
          relationships: {
            speaker: {
              data: {
                id: 2,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 3,
          type: 'speech',
          attributes: {
            title: 'Managing technical tebt',
            description: '\nWhat is Technical Debt?\nThe metaphor ‘Technical Debt’\nDesign or not Design?\nTechnical Debt Types\nIdentifying Technical Debt\nHow to manage Technical Debt?\nTo pay or not to pay\n            ',
            timeStart: '11:45',
            timeEnd: '12:45',
            stream: 'TECHNICAL'
          },
          relationships: {
            speaker: {
              data: {
                id: 2,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 4,
          type: 'speech',
          attributes: {
            title: 'Lunch time',
            timeStart: '12:45',
            timeEnd: '13:45',
            stream: 'BOTH'
          },
          relationships: {
            speaker: {
              data: {
                id: 97,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 5,
          type: 'speech',
          attributes: {
            title: 'Spring cloud',
            timeStart: '13:45',
            timeEnd: '14:45',
            stream: 'TECHNICAL'
          },
          relationships: {
            speaker: {
              data: {
                id: 4,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 6,
          type: 'speech',
          attributes: {
            title: 'Not only SQL in developers life',
            timeStart: '14:45',
            timeEnd: '15:45',
            stream: 'TECHNICAL'
          },
          relationships: {
            speaker: {
              data: {
                id: 5,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 7,
          type: 'speech',
          attributes: {
            title: 'Coffee time',
            timeStart: '11:30',
            timeEnd: '11:45',
            stream: 'BOTH'
          },
          relationships: {
            speaker: {
              data: {
                id: 99,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 8,
          type: 'speech',
          attributes: {
            title: 'Coffee time',
            timeStart: '15:45',
            timeEnd: '16:00',
            stream: 'BOTH'
          },
          relationships: {
            speaker: {
              data: {
                id: 98,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 9,
          type: 'speech',
          attributes: {
            title: 'Overcome expectations. IT professionals of the future.',
            timeStart: '16:00',
            timeEnd: '17:00',
            stream: 'TECHNICAL'
          },
          relationships: {
            speaker: {
              data: {
                id: 6,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 10,
          type: 'speech',
          attributes: {
            title: 'Capacity of your team. Is it 100%?',
            timeStart: '10:30',
            timeEnd: '11:30',
            stream: 'BUSINESS'
          },
          relationships: {
            speaker: {
              data: {
                id: 7,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 11,
          type: 'speech',
          attributes: {
            title: 'Who is on top? Team-client cooperation',
            timeStart: '11:45',
            timeEnd: '12:45',
            stream: 'BUSINESS'
          },
          relationships: {
            speaker: {
              data: {
                id: 8,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 12,
          type: 'speech',
          attributes: {
            title: 'Communicate it right with your client',
            timeStart: '13:45',
            timeEnd: '14:45',
            stream: 'BUSINESS'
          },
          relationships: {
            speaker: {
              data: {
                id: 9,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 13,
          type: 'speech',
          attributes: {
            title: 'Challenges and drive of Ukrainian IT outsourcing',
            timeStart: '14:45',
            timeEnd: '15:45',
            stream: 'BUSINESS'
          },
          relationships: {
            speaker: {
              data: {
                id: 10,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 14,
          type: 'speech',
          attributes: {
            title: 'IT trends for next epoch',
            timeStart: '16:00',
            timeEnd: '17:00',
            stream: 'BUSINESS'
          },
          relationships: {
            speaker: {
              data: {
                id: 11,
                type: 'speaker'
              }
            }
          }
        }, {
          id: 1,
          type: 'speaker',
          attributes: {
            name: ''
          },
          relationships: {
            speech: {
              data: {
                id: 1,
                type: 'speech'
              }
            }
          }
        }, {
          id: 2,
          type: 'speaker',
          attributes: {
            name: 'VIKTOR CHESNOKOV',
            avatarUrl: 'Chesnokov.jpg'
          },
          relationships: {
            speech: {
              data: {
                id: 2,
                type: 'speech'
              }
            }
          }
        }, {
          id: 3,
          type: 'speaker',
          attributes: {
            name: 'DMITRY VOLOSHKO',
            avatarUrl: 'Dmitry-Voloshko.jpg',
            about: '\nApplication Architect in SoftServe with over 9 years of experience in software development. Participated in the development of banking systems, management systems, survey processing systems and SaaS.\nHave been involved in a complex project on Groovy/Grails for 5 years where successfully established Code Review Process and TechDebt Management.\n            '
          },
          relationships: {
            speech: {
              data: {
                id: 3,
                type: 'speech'
              }
            }
          }
        }, {
          id: 4,
          type: 'speaker',
          attributes: {
            name: 'ORKHAN GASIMOV',
            avatarUrl: 'Orkhan-Gasimov.jpg'
          },
          relationships: {
            speech: {
              data: {
                id: 5,
                type: 'speech'
              }
            }
          }
        }, {
          id: 5,
          type: 'speaker',
          attributes: {
            name: 'MAXIM SABARNYA',
            avatarUrl: 'Max-Sabarnya.jpg'
          },
          relationships: {
            speech: {
              data: {
                id: 6,
                type: 'speech'
              }
            }
          }
        }, {
          id: 6,
          type: 'speaker',
          attributes: {
            name: 'MARIIA KOT',
            avatarUrl: 'Mariia-Kot.jpg'
          },
          relationships: {
            speech: {
              data: {
                id: 9,
                type: 'speech'
              }
            }
          }
        }, {
          id: 7,
          type: 'speaker',
          attributes: {
            name: 'OLGA IVANOVA',
            avatarUrl: 'Olga-Ivanova.jpg'
          },
          relationships: {
            speech: {
              data: {
                id: 10,
                type: 'speech'
              }
            }
          }
        }, {
          id: 8,
          type: 'speaker',
          attributes: {
            name: 'ANTON KORCHINSKYI',
            avatarUrl: 'Anton-Korchynskyi.jpg'
          },
          relationships: {
            speech: {
              data: {
                id: 11,
                type: 'speech'
              }
            }
          }
        }, {
          id: 9,
          type: 'speaker',
          attributes: {
            name: 'VERA SHATSKAYA',
            avatarUrl: 'Vera-Shatskaya.jpg'
          },
          relationships: {
            speech: {
              data: {
                id: 12,
                type: 'speech'
              }
            }
          }
        }, {
          id: 10,
          type: 'speaker',
          attributes: {
            name: 'LUCA MEROLLA',
            avatarUrl: 'Luca-Merolla.jpg'
          },
          relationships: {
            speech: {
              data: {
                id: 13,
                type: 'speech'
              }
            }
          }
        }, {
          id: 11,
          type: 'speaker',
          attributes: {
            name: 'ALEXANDRA ALKHIMOVICH',
            avatarUrl: 'Oleksandra-Alkhimovych.jpg'
          },
          relationships: {
            speech: {
              data: {
                id: 14,
                type: 'speech'
              }
            }
          }
        }, {
          id: 99,
          type: 'speaker',
          attributes: {
            name: '',
            avatarUrl: 'coffee.png'
          },
          relationships: {
            speech: {
              data: {
                id: 7,
                type: 'speech'
              }
            }
          }
        }, {
          id: 98,
          type: 'speaker',
          attributes: {
            name: '',
            avatarUrl: 'coffee.png'
          },
          relationships: {
            speech: {
              data: {
                id: 8,
                type: 'speech'
              }
            }
          }
        }, {
          id: 97,
          type: 'speaker',
          attributes: {
            name: '',
            avatarUrl: 'lunch.png'
          },
          relationships: {
            speech: {
              data: {
                id: 4,
                type: 'speech'
              }
            }
          }
        }]
      });
    }
  });
});
define('run-it/routes/index', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  var RSVP = _ember['default'].RSVP;
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return RSVP.hash({
        talks: this.getTalks()
      });
    },

    getTalks: function getTalks() {
      var talks = this.store.peekAll('speech');
      var now = new Date();

      now.setHours(10);

      var start = new Date();
      var end = new Date();

      return talks.filter(function (talk) {
        var _talk$get$split = talk.get('timeStart').split(':');

        var _talk$get$split2 = _slicedToArray(_talk$get$split, 2);

        var startHours = _talk$get$split2[0];
        var startMinutes = _talk$get$split2[1];

        var _talk$get$split3 = talk.get('timeEnd').split(':');

        var _talk$get$split32 = _slicedToArray(_talk$get$split3, 2);

        var endHours = _talk$get$split32[0];
        var endMinutes = _talk$get$split32[1];

        start.setHours(startHours);
        start.setMinutes(startMinutes);
        end.setHours(endHours);
        end.setMinutes(endMinutes);

        return now > start && now < end;
      });
    },

    actions: {
      pickTalk: function pickTalk(talk) {
        this.controller.set('pickedTalk', talk);
      }
    }
  });
});
define('run-it/routes/now', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  var RSVP = _ember['default'].RSVP;
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return RSVP.hash({
        talks: this.getTalks()
      });
    },

    getTalks: function getTalks() {
      var talks = this.store.peekAll('speech');
      var now = new Date();

      now.setHours(10);

      var start = new Date();
      var end = new Date();

      return talks.filter(function (talk) {
        var _talk$get$split = talk.get('timeStart').split(':');

        var _talk$get$split2 = _slicedToArray(_talk$get$split, 2);

        var startHours = _talk$get$split2[0];
        var startMinutes = _talk$get$split2[1];

        var _talk$get$split3 = talk.get('timeEnd').split(':');

        var _talk$get$split32 = _slicedToArray(_talk$get$split3, 2);

        var endHours = _talk$get$split32[0];
        var endMinutes = _talk$get$split32[1];

        start.setHours(startHours);
        start.setMinutes(startMinutes);
        end.setHours(endHours);
        end.setMinutes(endMinutes);

        return now > start && now < end;
      });
    },

    actions: {
      pickTalk: function pickTalk(talk) {
        this.controller.set('pickedTalk', talk);
      }
    }
  });
});
define('run-it/routes/schedule', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.peekAll('speech').sortBy('timeStart');
    }
  });
});
define('run-it/routes/speech', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.peekRecord('speech', params['speech_id']);
    }
  });
});
define('run-it/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('run-it/services/schedule', ['exports', 'ember'], function (exports, _ember) {

  var DATA = [];

  exports['default'] = _ember['default'].Service.extend({});
});
define('run-it/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _emberTextMeasurerServicesTextMeasurer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTextMeasurerServicesTextMeasurer['default'];
    }
  });
});
define("run-it/templates/app", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "e8Pb4/Hf", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Hello, run-it\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "run-it/templates/app.hbs" } });
});
define("run-it/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rM/++Zx9", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"app\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"id\",\"app-logo\"],[\"static-attr\",\"src\",\"/logo.png\"],[\"static-attr\",\"alt\",\"logo\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"outlet\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"footer-menu\"]],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "run-it/templates/application.hbs" } });
});
define("run-it/templates/components/break-time", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "VI6vTsfG", "block": "{\"statements\":[[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"break\",\"speaker\",\"avatarUrl\"]],null],[\"static-attr\",\"class\",\"talk-image\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"break\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "run-it/templates/components/break-time.hbs" } });
});
define("run-it/templates/components/footer-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "a+pP1cyf", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"/\"],null,1],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"schedule\"],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Schedule\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Now\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "run-it/templates/components/footer-menu.hbs" } });
});
define("run-it/templates/components/talk-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ifg7TJC8", "block": "{\"statements\":[[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"talk\",\"speaker\",\"avatarUrl\"]],null],[\"static-attr\",\"class\",\"talk-image\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"talk\",\"speaker\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"talk\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"activeTalk\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"talk\",\"stream\"]],false],[\"text\",\" stream\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"pick-speaker\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"pick\"]],[\"flush-element\"],[\"text\",\"Pick\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "run-it/templates/components/talk-item.hbs" } });
});
define("run-it/templates/now", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "jXhylAsb", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"now-page\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"empty\"]]],null,3],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"talks\"]]],null,2],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"break-time\"],null,[[\"break\"],[[\"get\",[\"talk\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"talk-item\"],null,[[\"pickedTalk\",\"talk\",\"onPick\"],[[\"get\",[\"pickedTalk\"]],[\"get\",[\"talk\"]],[\"helper\",[\"route-action\"],[\"pickTalk\"],null]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"realTalk\"]]],null,1,0]],\"locals\":[\"talk\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"Conference is over. Glad you were with us!\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "run-it/templates/now.hbs" } });
});
define("run-it/templates/schedule", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "e9VbmGr6", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"schedule-h1\"],[\"flush-element\"],[\"text\",\"Schedule \"],[\"block\",[\"power-select\"],null,[[\"searchEnabled\",\"selected\",\"options\",\"onchange\"],[false,[\"get\",[\"currentStream\"]],[\"get\",[\"streams\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"changeStream\"],null]]],2],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"speeches\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"currentSpeeches\"]]],null,1],[\"close-element\"],[\"text\",\"\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"speech-title\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"speech\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"speech-time\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"speech\",\"timeStart\"]],false],[\"text\",\" - \"],[\"append\",[\"unknown\",[\"speech\",\"timeEnd\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"speech\",\"speaker\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"speech\",[\"get\",[\"speech\"]]],null,0],[\"text\",\"    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"speech\"]},{\"statements\":[[\"text\",\"\\n  \"],[\"append\",[\"get\",[\"name\"]],false],[\"text\",\"\\n\"]],\"locals\":[\"name\"]}],\"hasPartials\":false}", "meta": { "moduleName": "run-it/templates/schedule.hbs" } });
});
define("run-it/templates/speech", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NvZ9GESL", "block": "{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"speaker-avatar\"],[\"dynamic-attr\",\"src\",[\"concat\",[\"/\",[\"unknown\",[\"model\",\"speaker\",\"avatarUrl\"]]]]],[\"static-attr\",\"alt\",\"Speaker Photo\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"speaker\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"pre\",[]],[\"static-attr\",\"class\",\"speech-description\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"About me:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"speaker\",\"about\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "run-it/templates/speech.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('run-it/config/environment', ['ember'], function(Ember) {
  var prefix = 'run-it';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("run-it/app")["default"].create({"name":"run-it","version":"0.0.0+b76405b2"});
}

/* jshint ignore:end */
//# sourceMappingURL=run-it.map
