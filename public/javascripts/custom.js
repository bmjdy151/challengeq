
$(document).ready(()=>{
  console.log("working");
  var container = document.getElementById('chart-area');
  var data = {
      series: [
          {
              name: 'Tokyo',
              data: [
                {
                  x: 20.1,
                  y: 0.093
                },
                {
                  x: 20.8,
                  y: 0.077
                },
                {
                  x: 20,
                  y: 0.171
                },
                {
                  x: 22.7,
                  y: 0.062
                },
                {
                  x: 20.8,
                  y: 0.096
                },
                {
                  x: 24.7,
                  y: 0.062
                },
                {
                  x: 21.2,
                  y: 0.249
                },
                {
                  x: 21.2,
                  y: 0.13
                },
                {
                  x: 22.7,
                  y: 0.094
                },
                {
                  x: 15.8,
                  y: 0.204
                },
                {
                  x: 22.9,
                  y: 0.032
                },
                {
                  x: 23.6,
                  y: 0.153
                },
                {
                  x: 21.3,
                  y: 0.055
                },
                {
                  x: 21.2,
                  y: 0.138
                },
                {
                  x: 20.7,
                  y: 0.115
                },
                {
                  x: 25.6,
                  y: 0.101
                },
                {
                  x: 23.8,
                  y: 0.162
                },
                {
                  x: 23.2,
                  y: 0.11
                },
                {
                  x: 19.8,
                  y: 0.042
                },
                {
                  x: 22.4,
                  y: 0.085
                },
                {
                  x: 17.3,
                  y: 0.087
                },
                {
                  x: 20.3,
                  y: 0.113
                },
                {
                  x: 26.5,
                  y: 0.101
                },
                {
                  x: 23.4,
                  y: 0.068
                },
                {
                  x: 21.7,
                  y: 0.078
                },
                {
                  x: 21.5,
                  y: 0.011
                },
                {
                  x: 24.1,
                  y: 0.163
                },
                {
                  x: 24.5,
                  y: 0.092
                },
                {
                  x: 25,
                  y: 0.038
                },
                {
                  x: 20.8,
                  y: 0.117
                },
                {
                  x: 21.7,
                  y: 0.075
                },
                {
                  x: 22.1,
                  y: 0.116
                }
              ]
          },
          {
              name: 'Saitama',
              data: [
                {
                  x: 22.8,
                  y: 0.0683
                },
                {
                  x: 18.9,
                  y: 0.0741
                },
                {
                  x: 25.2,
                  y: 0.1707
                },
                {
                  x: 22.6,
                  y: 0.0237
                },
                {
                  x: 24.3,
                  y: 0.0598
                },
                {
                  x: 23.8,
                  y: 0.1303
                },
                {
                  x: 25.1,
                  y: 0.0402
                },
                {
                  x: 24.2,
                  y: 0.0851
                },
                {
                  x: 16.8,
                  y: 0.14
                },
                {
                  x: 29.9,
                  y: 0.094
                }
            ]
          },
          {
            name: 'Chiba',
            data: [
              {
                x: 33,
                y: 0.097
              },
              {
                x: 15.9,
                y: 0.143
              },
              {
                x: 22.4,
                y: 0.127
              },
              {
                x: 24.3,
                y: 0.148
              },
              {
                x: 20.5,
                y: 0.255
              },
              {
                x: 23.1,
                y: 0.053
              },
              {
                x: 26.1,
                y: 0.134
              },
              {
                x: 28.6,
                y: 0.046
              }
          ]
        },
        {
          name: 'Kanagawa',
          data: [
            {
              x: 30.6,
              y: 0.1
            },
            {
              x: 23.9,
              y: 0.032
            },
            {
              x: 23.7,
              y: 0.075
            },
            {
              x: 23.4,
              y: 0.044
            },
            {
              x: 24.2,
              y: 0.079
            }
           ]
      },
      {
        name: 'Osaka',
        data: [
          {
            x: 27.5,
            y: 0.0241
          },
          {
            x: 26.1,
            y: 0.0145
          },
          {
            x: 22.4,
            y: 0.0572
          },
          {
            x: 22.9,
            y: 0.0256
          }
         ]
       },
      {
        name: 'Fukuoka',
        data: [
          {
            x: 22.8,
            y: 0.214
          },
          {
            x: 25.9,
            y: 0.145
          },
          {
            x: 16.9,
            y: 0.141
          },
          {
            x: 19.8,
            y: 0.069
          },
          {
            x: 22,
            y: 0.157
          }
         ]
        },
        {
          name: 'Okinawa',
          data: [
            {
              x: 18,
              y: 0.196
            },
            {
              x: 20,
              y: 0.307
            },
            {
              x: 17.2,
              y: 0.637
            },
            {
              x: 23.2,
              y: 0.54
            },
            {
              x: 20.3,
              y: 0.156
            },
            {
              x: 18.1,
              y: 0.58
            },
            {
              x: 16.6,
              y: 0.256
            },
            {
              x: 18.7,
              y: 1.043
            },
            {
              x: 19.4,
              y: 0.481
            },
            {
              x: 16.8,
              y: 0.222
            },
            {
              x: 17.2,
              y: 0.1
            },
            {
              x: 22.1,
              y: 0.406
            }
           ]
      }
      ]
  };
  var options = {
      chart: {
          width: 1160,
          height: 540,
          title: 'Waiting child rate vs Senior rate among cities with top waiting children'
      },
      yAxis: {
          title: 'Waiting child rate in the city(%)'
      },
      xAxis: {
          title: 'Senior population rate in the city(%)'
      },
      tooltip: {
          template: function (category, items) {
              return '<div class="tui-chart-default-tooltip">' +
                  '<div class="tui-chart-tooltip-head">' + items.legend + '</div>' +
                      '<table class="tui-chart-tooltip-body">' +
                          '<tr>' +
                              '<td>Senior rate</td>' +
                          '<td class="tui-chart-tooltip-value">' + items.x + '%</td>' +
                      '</tr>' +
                      '<tr>' +
                          '<td>Waiting child rate</td>' +
                              '<td class="tui-chart-tooltip-value">' + items.y + '%</td>' +
                          '</tr>' +
                      '</table>' +
                  '</div>';
          }
      }
  };
  var theme = {
      series: {
          colors: [
              '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
              '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
          ]
      }
  };
  
  // For apply theme
  
  // tui.chart.registerTheme('myTheme', theme);
  // options.theme = 'myTheme';
  
  tui.chart.scatterChart(container, data, options);
})
