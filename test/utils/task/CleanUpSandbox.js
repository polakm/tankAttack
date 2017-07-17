define([], function () {

    var CleanUpSandbox = function CleanUpSandbox() {

    };

    CleanUpSandbox.prototype.constructor = CleanUpSandbox;

    CleanUpSandbox.prototype.execute = function () {

        setTimeout(function () {

            var node = document.getElementById('sandbox');
            while (node && node.hasChildNodes()) {

                console.log('clean sandbox child: ' + node.firstChild.nodeName);
                node.removeChild(node.firstChild);
            }
        }, 1);
    };

    return CleanUpSandbox;
});