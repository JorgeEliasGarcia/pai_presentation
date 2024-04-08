"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc DataBaseHandler
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DataBaseHandlerHandler = void 0;
/**
 * Clase para manejar una base de datos de canciones.
 */
var DataBaseHandlerHandler = /** @class */ (function () {
    /**
     * Constructor de la clase DataBaseHandlerSongs.
     * @param url - URL de la base de datos
     */
    function DataBaseHandlerHandler(url) {
        this.url = url;
        this.data = null;
        this.initialize();
    }
    /**
     * Inicializa la base de datos obteniendo los datos desde la URL especificada.
     */
    DataBaseHandlerHandler.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.url)];
                    case 1:
                        response = _b.sent();
                        _a = this;
                        return [4 /*yield*/, response.json()];
                    case 2:
                        _a.data = _b.sent();
                        console.log('Datos obtenidos en el constructor:', this.data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.error('Error al obtener los datos en el constructor:', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Obtiene los datos de la base de datos.
     * @returns Los datos de la base de datos
     */
    DataBaseHandlerHandler.prototype.getData = function () {
        return this.data;
    };
    /**
     * Obtiene los datos de la base de datos mediante una solicitud HTTP.
     * @returns Una promesa que se resuelve cuando se obtienen los datos correctamente
     */
    DataBaseHandlerHandler.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.url)];
                    case 1:
                        response = _b.sent();
                        _a = this;
                        return [4 /*yield*/, response.json()];
                    case 2:
                        _a.data = _b.sent();
                        console.log('Datos obtenidos:', this.data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        console.error('Error al obtener los datos:', error_2);
                        this.data = null;
                        throw error_2; // Propaga el error más adelante
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Obtiene las canciones de la base de datos.
     * @returns Un array de objetos que representan las canciones
     */
    DataBaseHandlerHandler.prototype.getTurists = function () {
        if (!this.data) {
            return [];
        }
        var procedencias = [];
        var hoteles = [];
        for (var months2018 = 0; months2018 < this.data.municipios[0].annios[9].meses.length; months2018++) {
            var month = this.data.municipios[0].annios[9].meses[months2018];
            for (var country = 0; country < month.procedencias.length; country++) {
                if (procedencias.includes(month.procedencias[country].procedencia)) {
                    hoteles[procedencias.indexOf(month.procedencias[country].procedencia)] += parseInt(month.procedencias[country].hoteles);
                }
                else {
                    procedencias.push(month.procedencias[country].procedencia);
                    hoteles.push(parseInt(month.procedencias[country].hoteles));
                }
            }
        }
        var turists = [];
        for (var index = 0; index < procedencias.length; index++) {
            turists.push({ procedencia: procedencias[index], hoteles: hoteles[index].toString() });
        }
        return turists;
    };
    return DataBaseHandlerHandler;
}());
exports.DataBaseHandlerHandler = DataBaseHandlerHandler;
