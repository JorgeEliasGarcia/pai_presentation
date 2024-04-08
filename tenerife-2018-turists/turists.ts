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

import { DataBaseHandlerHandler } from "./DataBaseHandler.js"; // Importa la clase DataBaseHandler del archivo DataBaseHandler.js

/**
 * Función principal asíncrona
 */
const main = async function () {
  const URL = 'https://datos.tenerife.es/ckan/dataset/4a803657-75ec-4e78-b123-b9f4749199cb/resource/38bbc40a-a007-4379-819d-2cef95787f7e/download/turistasalojadossantacruz.json';
  const dataBaseHandler: DataBaseHandlerHandler = new DataBaseHandlerHandler(URL);
  await dataBaseHandler.fetchData(); // Espero a que se carguen los datos de la base de datos

  const ALL_TURIST_COUNT: number[] = dataBaseHandler.getTurists().map(turist => Number(turist.hoteles));
  const ALL_TURIST_COUNTRY: string[] = dataBaseHandler.getTurists().map(turist => turist.procedencia);

  let data = [];
  for (let element = 0; element < ALL_TURIST_COUNT.length; element++) {
    data.push({ label: ALL_TURIST_COUNTRY[element], value: ALL_TURIST_COUNT[element] });
  }
  return data;
};

const data = main();

// Define the source of the data. It is an object with two properties: chart and data.
const dataSource = {
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
    plotToolText: '<div style=\'font-weight:bold; background-color:lightblue; padding:10px; border-radius:5px; color:black;\'> <b>$label</b>: $value puntos </div>',
  },
  data: data
};

// Render the graph. 
FusionCharts.ready(function () {
  const chart = new FusionCharts({
    type: 'column2d',
    renderAt: 'chart-container',
    width: '1600',
    height: '900',
    dataFormat: 'json',
    dataSource
  });
  chart.render();
});