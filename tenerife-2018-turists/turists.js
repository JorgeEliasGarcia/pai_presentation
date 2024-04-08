"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García y Juan Aday Siverio González
 * @since 06 abril 2024
 * @desc  la-liga.ts
 *        File to draw a chart with the classification of the Spanish League.
 *        It uses FusionCharts library to draw the chart.
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
// Include the FusionCharts library and the theme.
/// <reference path='../node_modules/fusioncharts/fusioncharts.charts.d.ts' />
/// <reference path='../node_modules/fusioncharts/themes/fusioncharts.theme.fusion.d.ts' />
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc The main File
 */
var DataBaseHandler_js_1 = require("./DataBaseHandler.js"); // Importa la clase DataBaseHandler del archivo DataBaseHandler.js
/**
 * Función principal asíncrona
 */
var main = function () {
    return __awaiter(this, void 0, void 0, function () {
        var URL, dataBaseHandler, ALL_TURIST_COUNT, ALL_TURIST_COUNTRY, data, element;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = 'https://datos.tenerife.es/ckan/dataset/4a803657-75ec-4e78-b123-b9f4749199cb/resource/38bbc40a-a007-4379-819d-2cef95787f7e/download/turistasalojadossantacruz.json';
                    dataBaseHandler = new DataBaseHandler_js_1.DataBaseHandlerHandler(URL);
                    return [4 /*yield*/, dataBaseHandler.fetchData()];
                case 1:
                    _a.sent(); // Espero a que se carguen los datos de la base de datos
                    ALL_TURIST_COUNT = dataBaseHandler.getTurists().map(function (turist) { return Number(turist.hoteles); });
                    ALL_TURIST_COUNTRY = dataBaseHandler.getTurists().map(function (turist) { return turist.procedencia; });
                    data = [];
                    for (element = 0; element < ALL_TURIST_COUNT.length; element++) {
                        data.push({ label: ALL_TURIST_COUNTRY[element], value: ALL_TURIST_COUNT[element] });
                    }
                    return [2 /*return*/, data];
            }
        });
    });
};
var data = main();
// Define the source of the data. It is an object with two properties: chart and data.
var dataSource = {
    chart: {
        caption: 'Cantidad de turistas en Santa Cruz de Tenerife por país de procedencia',
        subCaption: 'en 2018',
        xAxisName: 'Países de procedencia',
        yAxisName: 'Cantidad de turistas',
        baseFontColor: '#ffffff',
        theme: 'fusion',
        animation: true,
        bgColor: '#2c3e50',
        valueFontColor: '#ffffff',
        showValues: true,
        plotToolText: '<div style=\'font-weight:bold; background-color:lightblue; padding:10px; border-radius:5px; color:black;\'> <b>$label</b>: $value puntos </div>'
    },
    data: data
};
// Render the graph. 
FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '1600',
        height: '900',
        dataFormat: 'json',
        dataSource: dataSource
    });
    chart.render();
});
