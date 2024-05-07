"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.getProjectById = exports.getProjects = void 0;
const schema_1 = require("../schema");
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield schema_1.Project.find();
        res.status(200).json({
            ok: true,
            projects,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        });
    }
});
exports.getProjects = getProjects;
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const project = yield schema_1.Project.findOne({ infobrasCode: id });
        if (!project) {
            return res.status(404).json({
                ok: false,
                msg: 'Proyecto no encontrado',
            });
        }
        res.status(200).json({
            ok: true,
            project,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        });
    }
});
exports.getProjectById = getProjectById;
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { infobrasCode } = req.body;
    try {
        let project = yield schema_1.Project.findOne({ infobrasCode });
        if (project) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un proyecto con ese código',
            });
        }
        project = new schema_1.Project(req.body);
        yield project.save();
        res.status(201).json({
            ok: true,
            uid: project.id,
            name: project.name,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        });
    }
});
exports.createProject = createProject;
