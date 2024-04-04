/// <reference path="../node_modules/fusioncharts/fusioncharts.charts.d.ts" />
/// <reference path="../node_modules/fusioncharts/themes/fusioncharts.theme.candy.d.ts" />
// Datos del gráfico
var dataSource = {
    chart: {
        caption: "Distribución de Ingresos por Sector en Fictilandia",
        subCaption: "Año 2024",
        theme: "candy",
        showPercentValues: true,
        decimals: true,
        plotToolText: "<div style='font-weight:bold; background-color:yellow; padding:10px; border-radius:5px;'><b>$label</b>: $percentValue</div>",
        showLegend: true,
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
    var chart = new FusionCharts({
        type: 'doughnut3d',
        renderAt: 'chart-container',
        width: '1200',
        height: '700',
        dataFormat: 'json',
        dataSource: dataSource
    });
    chart.render();
});
