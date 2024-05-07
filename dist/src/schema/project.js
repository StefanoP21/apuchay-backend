"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    infobrasCode: {
        type: Number,
        required: [true, 'Infobras code is required'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    entity: {
        type: String,
        required: [true, 'Entity is required'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image url is required'],
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
    },
    status: {
        type: String,
        required: [true, 'Status is required'],
    },
    startDate: {
        type: String,
        required: [true, 'Start date is required'],
    },
    endDate: {
        type: String,
        required: [true, 'End date is required'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
    },
    enterprise: {
        type: String,
        required: [true, 'Enterprise is required'],
    },
    ruc: {
        type: Number,
        required: [true, 'RUC is required'],
    },
    contact: {
        type: String,
        required: [true, 'Contact is required'],
    },
    dni: {
        type: String,
        required: [true, 'DNI is required'],
    },
    cip: {
        type: Number,
        required: [true, 'CIP is required'],
    },
});
exports.Project = (0, mongoose_1.model)('Project', projectSchema, 'projects');
