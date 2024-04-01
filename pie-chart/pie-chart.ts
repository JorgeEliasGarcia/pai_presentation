/// <reference path="../node_modules/fusioncharts/fusioncharts.charts.d.ts" />
/// <reference path="../node_modules/fusioncharts/themes/fusioncharts.theme.candy.d.ts" />

// Datos del gráfico
const dataSource = {
  chart: {
    caption: "Distribución de Ingresos por Sector en Fictilandia",
    subCaption: "Año 2024",
    theme: "candy",
    showPercentValues: "1",
    decimals: "1",
    plotToolText: "<b>$label</b>: $percentValue%",
    showLegend: "1",
    legendPosition: "bottom"
  },
  data: [
    { label: "Agricultura", value: "30" },
    { label: "Manufactura", value: "25" },
    { label: "Servicios", value: "35" },
    { label: "Turismo", value: "10" }
  ]
};

// Renderiza el gráfico
FusionCharts.ready(function () {
  const chart = new FusionCharts({
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource
  });
  chart.render();
});
