/// <reference path="../node_modules/fusioncharts/fusioncharts.charts.d.ts" />
/// <reference path="../node_modules/fusioncharts/themes/fusioncharts.theme.fusion.d.ts" />

// Datos del gráfico
const dataSource = {
  chart: {
    caption: 'Calificaciones de Exámenes',
    subCaption: 'Top 5 estudiantes con las calificaciones más altas',
    xAxisName: 'Estudiante',
    yAxisName: 'Nota',
    theme: 'fusion',
    animation: true, 
    decimals: true,
    showLegend: true,
  },
  data: [
    { label: 'Alice', value: '9.2' }, // Calificación de Alice
    { label: 'Bob', value: '8' }, // Calificación de Bob
    { label: 'Charlie', value: '7.5' }, // Calificación de Charlie
    { label: 'David', value: '7.0' }, // Calificación de David
    { label: 'Eve', value: '6.25' } // Calificación de Eve
  ]
};

// Renderiza el gráfico
FusionCharts.ready(function () {
  const chart = new FusionCharts({
    type: 'column3d',
    renderAt: 'chart-container',
    width: '1200',
    height: '800',
    dataFormat: 'json',
    dataSource
  });
  chart.render();
});