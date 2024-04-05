/// <reference path='../node_modules/fusioncharts/fusioncharts.charts.d.ts' />
/// <reference path='../node_modules/fusioncharts/themes/fusioncharts.theme.fusion.d.ts' />

// Datos del gráfico
const dataSource = {
  chart: {
    caption: 'Distribución de Ingresos por Sector en Canarias',
    subCaption: 'Año 2022',
    theme: 'candy',
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

// Renderiza el gráfico
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
