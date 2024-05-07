"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.courseRouter = (0, express_1.Router)();
exports.courseRouter.get('/', controllers_1.getCourses);
exports.courseRouter.get('/:id', controllers_1.getCourseById);
exports.courseRouter.post('/new', controllers_1.createCourse);
