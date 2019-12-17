"use strict";
exports.__esModule = true;
var React = require("react");
var time_helpers_1 = require("../../lib/time-helpers");
var TimeAgo = function (_a) {
    var timestamp = _a.timestamp;
    return React.createElement("div", { className: "time-ago" }, time_helpers_1.ago(timestamp));
};
exports["default"] = TimeAgo;
