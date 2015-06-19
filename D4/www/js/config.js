/**
 * --------------------------------
 * requireJS 환경설정(Configuration)
 * --------------------------------
 */
require.config({
	baseUrl: 'js',

	paths: {
		'jquery'    : 'libs/jquery.min',
		'modernizr' : 'libs/modernizr.min',
		'detectizr' : 'libs/detectizr.min',
		//모듈
		'main'      :"moduels/main",
		'other_main':"moduels/other_main",
	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'detectizr': {
			exports: 'Modernizr.Detectizr',
			deps: ['modernizr']
		}
	},

	deps: [
		//'plugins/jquery.radioClass'
		'init'
			// 'main',
		 //   'other_main',
		 //   'moduels/checkLibs'
	],

	waitSeconds:15,
	urlArgs:'ts='+(new Date()).getTime()
});