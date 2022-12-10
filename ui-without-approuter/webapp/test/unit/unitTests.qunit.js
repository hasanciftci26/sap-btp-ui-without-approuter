/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ntt/ui-without-approuter/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
