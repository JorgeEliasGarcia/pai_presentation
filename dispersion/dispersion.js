/// <reference path="../node_modules/fusioncharts/fusioncharts.charts.d.ts" />
/// <reference path="../node_modules/fusioncharts/themes/fusioncharts.theme.candy.d.ts" />
var nuevosDatos = {
    chart: {
        caption: "Relación entre Temperatura y Ventas de Helados",
        subCaption: "Nuevos Datos Ficticios",
        theme: "candy",
        xAxisName: "Temperatura (°C)",
        yAxisName: "Ventas de Helados",
        xAxisMinValue: 20,
        xAxisMaxValue: 40,
        yAxisMinValue: 100,
        yAxisMaxValue: 1000,
        plotToolText: "<b>$dataValue</b> helados vendidos a $label°C"
    },
    data: [
        { x: 22, y: 150 },
        { x: 26, y: 300 },
        { x: 29, y: 450 },
        { x: 32, y: 600 },
        { x: 35, y: 850 },
        { x: 38, y: 950 }
    ]
};
// Renderiza el gráfico con los nuevos datos
FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'scatter',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: nuevosDatos
    });
    chart.render();
});
