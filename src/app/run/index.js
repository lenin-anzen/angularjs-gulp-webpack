
let run = function ($templateCache) {
    $templateCache.put("partials-toolbar.html", require("../partials/toolbar.html"));
};

run.$inject = ["$templateCache"];

export default run;