"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRouter = exports.projectRouter = exports.authRouter = void 0;
var auth_1 = require("./auth");
Object.defineProperty(exports, "authRouter", { enumerable: true, get: function () { return auth_1.authRouter; } });
var project_1 = require("./project");
Object.defineProperty(exports, "projectRouter", { enumerable: true, get: function () { return project_1.projectRouter; } });
var course_1 = require("./course");
Object.defineProperty(exports, "courseRouter", { enumerable: true, get: function () { return course_1.courseRouter; } });
