/// <reference path="node_modules/fusioncharts/fusioncharts.charts.d.ts" />
/// <reference path="node_modules/fusioncharts/themes/fusioncharts.theme.fusion.d.ts" />

// Datos del gráfico
const dataSource = {
  chart: {
    caption: "Ejemplo de gráfico de barras",
    subCaption: "Top 5 países con mayor población",
    xAxisName: "País",
    yAxisName: "Población (en millones)",
    theme: "fusion"
  },
  data: [
    { label: "China", value: "1382" },
    { label: "India", value: "1339" },
    { label: "EE.UU.", value: "328" },
    { label: "Indonesia", value: "270" },
    { label: "Pakistán", value: "220" }
  ]
};

// Renderiza el gráfico
FusionCharts.ready(function () {
  const chart = new FusionCharts({
    type: 'column2d',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource
  });
  chart.render();
});

console.log("dentro");