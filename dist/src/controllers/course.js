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
exports.createCourse = exports.getCourseById = exports.getCourses = void 0;
const schema_1 = require("../schema");
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield schema_1.Course.find();
        res.status(200).json({
            ok: true,
            courses,
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
exports.getCourses = getCourses;
const getCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const course = yield schema_1.Course.findOne({ courseCode: id });
        if (!course) {
            return res.status(404).json({
                ok: false,
                msg: 'Proyecto no encontrado',
            });
        }
        res.status(200).json({
            ok: true,
            course,
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
exports.getCourseById = getCourseById;
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseCode } = req.body;
    try {
        let course = yield schema_1.Course.findOne({ courseCode });
        if (course) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un curso con ese código',
            });
        }
        course = new schema_1.Course(req.body);
        yield course.save();
        res.status(201).json({
            ok: true,
            uid: course.id,
            name: course.name,
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
exports.createCourse = createCourse;
