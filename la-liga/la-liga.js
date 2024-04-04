/// <reference path="../node_modules/fusioncharts/fusioncharts.charts.d.ts" />
/// <reference path="../node_modules/fusioncharts/themes/fusioncharts.theme.fusion.d.ts" />
var dataSource = {
    chart: {
        caption: "Clasificación de la Liga Española",
        subCaption: "Temporada 2023-2024",
        xAxisName: "Equipos",
        yAxisName: "Puntos",
        baseFontColor: "#ffffff", // Establece todos los colores de texto en blanco
        theme: "fusion",
        animation: true,
        bgColor: "#2c3e50",
        valueFontColor: "#ffffff",
        showValues: true,
        plotToolText: "<div style='font-weight:bold; background-color:lightblue; padding:10px; border-radius:5px; color:black;'><b>$label</b>: $value</div>",
    },
    data: [
        { label: "Barcelona", value: "90", color: "#fc0d1b,#fbb034", link: "https://i.pinimg.com/736x/d4/d9/25/d4d9258a4e8fd626b4c72e177d10daef.jpg" }, // Azul y grana
        { label: "Real Madrid", value: "75", color: "#ffffff,#0071ce" }, // Blanco y azul
        { label: "Atlético de Madrid", value: "73", color: "#cb3524,#ffffff" }, // Rojo y blanco
        { label: "Valencia", value: "65", color: "#f7b020,#7b4f9d" }, // Naranja y morado
        { label: "Sevilla", value: "63", color: "#cf0720,#ffffff", link: 'https://sevillafc.es/' }, // Rojo y blanco
        { label: "Real Sociedad", value: "58", color: "#0071ce,#ffffff" }, // Azul y blanco
        { label: "Villarreal", value: "56", color: "#ffcd03,#00529f" }, // Amarillo y azul
        { label: "Athletic Club", value: "53", color: "cb3524,#ffffff" }, // rojo y blanco
        { label: "Celta de Vigo", value: "50", color: "#4a85d8,#ffffff" }, // Celeste y blanco
        { label: "Getafe", value: "48", color: "#0090d1,#ffffff" }, // Azul y blanco
        { label: "Levante", value: "45", color: "#fc0d1b,#fbb034" }, // Azul y grana
        { label: "Espanyol", value: "42", color: "#009dff,#ffffff" }, // Azul y blanco
        { label: "Betis", value: "41", color: "#00a95c,#ffffff" }, // Verde y blanco
        { label: "Alavés", value: "38", color: "#000000,#ffffff" }, // Negro y blanco
        { label: "Mallorca", value: "36", color: "#E50000,#000000" } // Rojo y negro
    ]
};
// Renderiza el gráfico
FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '1600',
        height: '900',
        dataFormat: 'json',
        dataSource: dataSource
    });
    chart.render();
});
