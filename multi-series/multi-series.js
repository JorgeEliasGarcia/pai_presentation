/// <reference path="../node_modules/fusioncharts/fusioncharts.charts.d.ts" />
/// <reference path="../node_modules/fusioncharts/themes/fusioncharts.theme.fusion.d.ts" />
// Datos del gráfico
var dataSource = {
    chart: {
        caption: 'Sabores de Helado Más Populares',
        subCaption: 'Distribución de ventas por sabor',
        xAxisName: 'Sabor',
        yAxisName: 'Cantidad Vendida',
        theme: 'fusion',
        animation: true,
        decimals: true,
        showLegend: true,
    },
    categories: [
        {
            category: [
                { label: 'Chocolate' },
                { label: 'Vainilla' },
                { label: 'Fresa' },
                { label: 'Menta' },
                { label: 'Caramelo' }
            ]
        }
    ],
    dataset: [
        {
            seriesname: 'Cantidad Vendida',
            data: [
                { value: '120' }, // Ventas de helado de Chocolate
                { value: '90' }, // Ventas de helado de Vainilla
                { value: '80' }, // Ventas de helado de Fresa
                { value: '70' }, // Ventas de helado de Menta
                { value: '60' } // Ventas de helado de Caramelo
            ]
        }
    ]
};
// Renderiza el gráfico
FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'stackedcolumn3d',
        renderAt: 'chart-container',
        width: '1200',
        height: '800',
        dataFormat: 'json',
        dataSource: dataSource
    });
    chart.render();
});
