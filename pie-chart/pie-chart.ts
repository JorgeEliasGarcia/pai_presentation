/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García y Juan Aday Siverio González
 * @since 06 abril 2024
 * @desc  pie-chart.ts
 *        File to draw a pie chart with the distribution of the income by sector in the Canary Islands.
 *        It uses FusionCharts library to draw the chart.
*/

// Include the FusionCharts library and the theme.
/// <reference path='../node_modules/fusioncharts/fusioncharts.charts.d.ts' />
/// <reference path='../node_modules/fusioncharts/themes/fusioncharts.theme.carbon.d.ts' />

// Define the source of the data. It is an object with two properties: chart and data. 
const dataSource = {
  chart: {
    caption: 'Distribución de Ingresos por Sector en Canarias',
    subCaption: 'Año 2022',
    theme: 'carbon',
    showPercentValues: true,
    decimals: true,
    showLegend: true,
    legendPosition: 'bottom'
  },
  data: [
    { label: 'Agricultura', value: '25' },
    { label: 'Manufactura', value: '10' },
    { label: 'Servicios', value: '20' },
    { label: 'Turismo', value: '45' }
  ]
};

// Render the graph.
FusionCharts.ready(function () {
  const chart = new FusionCharts({
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '1600',
    height: '900',
    dataFormat: 'json',
    dataSource
  });
  chart.render();
});
