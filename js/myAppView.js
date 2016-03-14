(function () {
    "use strict";

    function myAppView(window) {
        this.viewId = MSApp.getViewId(window),
        this.window = window,
        this.postMessage = function (message, domain) {
            this.window.postMessage(message, domain);
        }
    };

    WinJS.Namespace.define("CustomAppView", {
        createNewView: function(page) {
            var newWindow = window.open(page, null, "msHideView=yes");
            //var newWindow = window.open(page);

            return new myAppView(newWindow);
        },

        getViewOpener: function () {
            var openerWindow = window.opener;
            var parentWindow = window.parent;
            return new myAppView(openerWindow);
        }

    });

})();