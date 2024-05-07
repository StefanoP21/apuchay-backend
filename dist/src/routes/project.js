"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.projectRouter = (0, express_1.Router)();
exports.projectRouter.get('/', controllers_1.getProjects);
exports.projectRouter.get('/:id', controllers_1.getProjectById);
exports.projectRouter.post('/new', controllers_1.createProject);
