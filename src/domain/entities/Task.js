"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require('node:crypto');
var Task = /** @class */ (function () {
    function Task(task) {
        this.id = crypto.randomUUID();
        this.task = task;
    }
    return Task;
}());
exports.default = Task;
