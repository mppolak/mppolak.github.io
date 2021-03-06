google.charts.load('current', {
  packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

  var data = new google.visualization.DataTable();
data.addColumn('number', 'ie');
data.addColumn('number', 'F-DFHS-FM');
data.addColumn('number', 'F-DFHS-NO');
data.addColumn('number', 'F-DFHS-RT');
data.addColumn('number', 'F-DFHS-TF');
data.addColumn('number', 'F-TFD-FM');
data.addColumn('number', 'F-TFD-NO');
data.addColumn('number', 'F-TFD-RT');
data.addColumn('number', 'F-TFD-TF');
data.addColumn('number', 'F-TFM-FM');
data.addColumn('number', 'F-TFM-NO');
data.addColumn('number', 'F-TFM-RT');
data.addColumn('number', 'F-TFM-TF');
data.addColumn('number', 'P-DFHS-FM');
data.addColumn('number', 'P-DFHS-NO');
data.addColumn('number', 'P-DFHS-RT');
data.addColumn('number', 'P-DFHS-TF');
data.addColumn('number', 'P-TFD-FM');
data.addColumn('number', 'P-TFD-NO');
data.addColumn('number', 'P-TFD-RT');
data.addColumn('number', 'P-TFD-TF');
data.addColumn('number', 'P-TFM-FM');
data.addColumn('number', 'P-TFM-NO');
data.addColumn('number', 'P-TFM-RT');
data.addColumn('number', 'P-TFM-TF');
data.addColumn('number', 'U-DFHS-FM');
data.addColumn('number', 'U-DFHS-NO');
data.addColumn('number', 'U-DFHS-RT');
data.addColumn('number', 'U-DFHS-TF');
data.addColumn('number', 'U-TFD-FM');
data.addColumn('number', 'U-TFD-NO');
data.addColumn('number', 'U-TFD-RT');
data.addColumn('number', 'U-TFD-TF');
data.addColumn('number', 'U-TFM-FM');
data.addColumn('number', 'U-TFM-NO');
data.addColumn('number', 'U-TFM-RT');
data.addColumn('number', 'U-TFM-TF');

  data.addRows([
[25.0000,0.1420,0.1215,0.1491,0.1503,0.1147,0.2411,0.1158,0.1099,0.1358,0.1187,0.1469,0.1533,0.1441,0.1306,0.1454,0.1548,1.1072,0.2398,0.1172,0.1062,0.1465,0.1253,0.1452,0.1547,0.1405,0.1245,0.1431,0.1566,0.1177,0.2332,0.1111,0.1089,0.1405,0.1222,0.1445,0.1546],
[75.0000,0.5865,0.5837,0.5956,0.5852,0.5097,0.5182,0.8644,0.5070,0.5904,0.5954,0.5804,0.5983,0.5988,0.5929,0.5804,0.5928,0.1174,0.5139,0.5242,0.5095,0.5866,0.5794,0.5793,0.5886,0.5877,0.5725,0.5888,0.5881,0.5155,0.5120,0.5121,0.5267,0.5870,0.5777,0.5918,0.5846],
[125.0000,0.8787,0.9293,0.8630,0.8587,0.8770,0.8501,0.5101,0.8595,0.8712,0.9000,0.8580,0.8809,0.8718,0.9174,0.8782,0.8539,0.5091,0.8409,0.8779,0.8755,0.8700,0.9065,0.8627,0.8579,0.8789,0.9051,0.8700,0.8759,0.8638,0.8577,0.8654,0.8728,0.8775,0.9112,0.8871,0.8667],
[175.0000,1.0303,1.1090,1.0476,1.0263,1.1079,1.0969,1.1290,1.1141,1.0493,1.1280,1.0398,1.0121,1.0468,1.1214,1.0445,1.0279,0.8738,1.0834,1.1201,1.1167,1.0354,1.1013,1.0306,1.0192,1.0455,1.1054,1.0534,1.0270,1.1163,1.1001,1.1322,1.0932,1.0522,1.1116,1.0503,1.0196],
[250.0000,1.1847,1.3099,1.1728,1.1294,1.3120,1.2914,1.3209,1.3181,1.1716,1.2989,1.1644,1.1454,1.1574,1.2711,1.1632,1.1370,1.3302,1.2917,1.3220,1.3311,1.1776,1.2893,1.1663,1.1605,1.1817,1.2819,1.1577,1.1339,1.3219,1.2769,1.3329,1.3297,1.1794,1.2868,1.1863,1.1409],
[325.0000,1.2048,1.3477,1.1870,1.1638,1.4405,1.3990,1.4014,1.3886,1.1848,1.3459,1.1982,1.1840,1.2040,1.3541,1.1894,1.1568,1.4435,1.3848,1.4035,1.4223,1.2080,1.3234,1.1919,1.1494,1.1838,1.3309,1.1796,1.1719,1.4244,1.3731,1.4235,1.3944,1.2114,1.3505,1.1891,1.1657]
  ]);

  var options = {
    hAxis: {
      title: 'Incident energy (eV)'
    },
    vAxis: {
      title: 'SEY'
    },
    title: 'Copper SEY from DFT q-dependence, different elastic models',
    curveType: 'function'
       
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}
