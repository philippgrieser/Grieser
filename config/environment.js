/* jshint node: true */

module.exports = function (environment) {
	var ENV = {
		modulePrefix: 'kanzlei',
		environment: environment,
		baseURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			},
			EXTEND_PROTOTYPES: {
				Date: false,
			}
		},
		gReCaptcha: {
			siteKey: '6Ld4tQ8UAAAAACw5QRr8n_bViiOITDKEuTLfnDbQ'
		},
		APP: {}
	};
	ENV['g-map'] = {
		key: 'AIzaSyBiWlOUWP6xvJlCmlFEtA3FJkZ0O3CcRTc',
	};
	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.baseURL = '/';
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {

	}

	return ENV;
};
