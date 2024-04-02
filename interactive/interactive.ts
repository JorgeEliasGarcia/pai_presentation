/// <reference path="../node_modules/fusioncharts/fusioncharts.charts.d.ts" />
/// <reference path="../node_modules/fusioncharts/themes/fusioncharts.theme.fusion.d.ts" />

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
    renderAt: 'chart-container', // Aquí se ajusta al ID del contenedor en el HTML
    width: '600', // Se ajusta al tamaño del contenedor en el HTML
    height: '400', // Se ajusta al tamaño del contenedor en el HTML
    dataFormat: 'json',
    dataSource
  });
  chart.render();
});
