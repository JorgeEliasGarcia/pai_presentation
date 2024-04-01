/// <reference path="../node_modules/fusioncharts/fusioncharts.charts.d.ts" />
/// <reference path="../node_modules/fusioncharts/themes/fusioncharts.theme.candy.d.ts" />

// Datos del gráfico
const dataSource = {
  chart: {
    caption: "Tendencia de Ventas Mensuales",
    subCaption: "Últimos 6 meses",
    theme: "candy",
    xAxisName: "Mes",
    yAxisName: "Ventas (en miles)",
    numberSuffix: "K",
    showValues: "0",
    drawAnchors: "0",
  },
  data: [
    { label: "Enero", value: "35" },
    { label: "Febrero", value: "42" },
    { label: "Marzo", value: "25" },
    { label: "Abril", value: "60" },
    { label: "Mayo", value: "50" },
    { label: "Junio", value: "70" }
  ]
};

// Renderiza el gráfico
FusionCharts.ready(function () {
  const chart = new FusionCharts({
    type: 'line',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource
  });
  chart.render();
});