
$(document).ready(()=>{
  console.log("working");
  var container = document.getElementById('chart-area');
  var container10000 = document.getElementById('chart-area10000');
  var data = {
      series: [
          {
              name: 'Tokyo',
              data: [
                {
                  x: 20.1,
                  y: 1.059
                },
                {
                  x: 20.8,
                  y: 0.851
                },
                {
                  x: 20,
                  y: 1.584
                },
                {
                  x: 22.7,
                  y: 0.592
                },
                {
                  x: 20.8,
                  y: 0.962
                },
                {
                  x: 24.7,
                  y: 0.811
                },
                {
                  x: 21.2,
                  y: 2.53
                },
                {
                  x: 21.2,
                  y: 1.104
                },
                {
                  x: 22.7,
                  y: 0.884
                },
                {
                  x: 15.8,
                  y: 1.661
                },
                {
                  x: 22.9,
                  y: 0.323
                },
                {
                  x: 23.6,
                  y: 1.612
                },
                {
                  x: 21.3,
                  y: 0.526
                },
                {
                  x: 21.2,
                  y: 1.308
                },
                {
                  x: 20.7,
                  y: 1.116
                },
                {
                  x: 25.6,
                  y: 1.248
                },
                {
                  x: 23.8,
                  y: 1.804
                },
                {
                  x: 23.2,
                  y: 1.159
                },
                {
                  x: 19.8,
                  y: 0.398
                },
                {
                  x: 22.4,
                  y: 0.936
                },
                {
                  x: 17.3,
                  y: 0.998
                },
                {
                  x: 20.3,
                  y: 1.107
                },
                {
                  x: 26.5,
                  y: 1.153
                },
                {
                  x: 23.4,
                  y: 0.666
                },
                {
                  x: 21.7,
                  y: 0.909
                },
                {
                  x: 21.5,
                  y: 0.104
                },
                {
                  x: 24.1,
                  y: 1.635
                },
                {
                  x: 24.5,
                  y: 1.046
                },
                {
                  x: 25,
                  y: 0.447
                },
                {
                  x: 20.8,
                  y: 1.227
                },
                {
                  x: 21.7,
                  y: 0.678
                },
                {
                  x: 22.1,
                  y: 1.299
                }
               ]
          },
          {
              name: 'Saitama',
              data: [
                {
                  x: 22.8,
                  y: 0.7
                },
                {
                  x: 18.9,
                  y: 0.687
                },
                {
                  x: 25.2,
                  y: 1.73
                },
                {
                  x: 22.6,
                  y: 0.233
                },
                {
                  x: 24.3,
                  y: 0.608
                },
                {
                  x: 23.8,
                  y: 1.304
                },
                {
                  x: 25.1,
                  y: 0.418
                },
                {
                  x: 24.2,
                  y: 0.821
                },
                {
                  x: 16.8,
                  y: 1.171
                },
                {
                  x: 29.9,
                  y: 1.038
                }
               ]
          },
          {
            name: 'Chiba',
            data: [
              {
                x: 33,
                y: 1.005
              },
              {
                x: 15.9,
                y: 1.196
              },
              {
                x: 22.4,
                y: 1.299
              },
              {
                x: 24.3,
                y: 1.596
              },
              {
                x: 20.5,
                y: 2.655
              },
              {
                x: 23.1,
                y: 0.543
              },
              {
                x: 26.1,
                y: 1.442
              },
              {
                x: 28.6,
                y: 0.55
              }
             ]
        },
        {
          name: 'Kanagawa',
          data: [
            {
              x: 30.6,
              y: 1.214
            },
            {
              x: 23.9,
              y: 0.344
            },
            {
              x: 23.7,
              y: 1.195
            },
            {
              x: 23.4,
              y: 0.483
            },
            {
              x: 24.2,
              y: 0.832
            }
           ]
      },
      {
        name: 'Osaka',
        data: [
          {
            x: 27.5,
            y: 0.285
          },
          {
            x: 26.1,
            y: 0.154
          },
          {
            x: 22.4,
            y: 0.611
          },
          {
            x: 22.9,
            y: 0.27
          }
         ]
       },
      {
        name: 'Hyogo',
        data: [
          {
            x: 25.4,
            y: 2.56
          },
          {
            x: 23.3,
            y: 1.321
          },
          {
            x: 27.1,
            y: 0.468
          },
          {
            x: 25.2,
            y: 0.727
          },
          {
            x: 27.7,
            y: 0.441
          },
          {
            x: 27.1,
            y: 1.719
          }
         ]
        },
        {
          name: 'Okinawa',
          data: [
            {
              x: 18,
              y: 2.263
            },
            {
              x: 20,
              y: 3.565
            },
            {
              x: 17.2,
              y: 5.562
            },
            {
              x: 23.2,
              y: 5.626
            },
            {
              x: 20.3,
              y: 1.703
            },
            {
              x: 18.1,
              y: 5.857
            },
            {
              x: 16.6,
              y: 2.538
            },
            {
              x: 18.7,
              y: 9.275
            },
            {
              x: 19.4,
              y: 4.835
            },
            {
              x: 16.8,
              y: 2.202
            },
            {
              x: 17.2,
              y: 1.012
            },
            {
              x: 22.1,
              y: 4.431
            }
           ]
      }
      ]
  };
  var options = {
      chart: {
          width: 1160,
          height: 540,
          title: 'Waiting child rate vs Senior rate among cities with top waiting children (all)'
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

  var data10000 = {
    series: [
        {
            name: 'Tokyo',
            data: [
              {
                x: 20.1,
                y: 1.059
              },
              {
                x: 20.8,
                y: 0.851
              },
              {
                x: 20,
                y: 1.584
              },
              {
                x: 22.7,
                y: 0.592
              },
              {
                x: 20.8,
                y: 0.962
              },
              {
                x: 24.7,
                y: 0.811
              },
              {
                x: 21.2,
                y: 1.104
              },
              {
                x: 22.7,
                y: 0.884
              },
              {
                x: 15.8,
                y: 1.661
              },
              {
                x: 22.9,
                y: 0.323
              },
              {
                x: 23.6,
                y: 1.612
              },
              {
                x: 21.3,
                y: 0.526
              },
              {
                x: 21.2,
                y: 1.308
              },
              {
                x: 20.7,
                y: 1.116
              },
              {
                x: 25.6,
                y: 1.248
              },
              {
                x: 23.8,
                y: 1.804
              },
              {
                x: 23.2,
                y: 1.159
              },
              {
                x: 19.8,
                y: 0.398
              },
              {
                x: 22.4,
                y: 0.936
              },
              {
                x: 17.3,
                y: 0.998
              },
              {
                x: 23.4,
                y: 0.666
              },
              {
                x: 21.7,
                y: 0.909
              },
              {
                x: 21.5,
                y: 0.104
              },
              {
                x: 24.5,
                y: 1.046
              },
              {
                x: 25,
                y: 0.447
              },
              {
                x: 21.7,
                y: 0.678
              }
             ]
        },
        {
            name: 'Saitama',
            data: [
              {
                x: 22.8,
                y: 0.7
              },
              {
                x: 18.9,
                y: 0.687
              },
              {
                x: 22.6,
                y: 0.233
              },
              {
                x: 24.3,
                y: 0.608
              },
              {
                x: 25.1,
                y: 0.418
              }
             ]
        },
        {
          name: 'Chiba',
          data: [
            {
              x: 33,
              y: 1.005
            },
            {
              x: 15.9,
              y: 1.196
            },
            {
              x: 22.4,
              y: 1.299
            },
            {
              x: 24.3,
              y: 1.596
            },
            {
              x: 23.1,
              y: 0.543
            },
            {
              x: 28.6,
              y: 0.55
            }
           ]
      },
      {
        name: 'Kanagawa',
        data: [
          {
            x: 30.6,
            y: 1.214
          },
          {
            x: 23.9,
            y: 0.344
          },
          {
            x: 23.4,
            y: 0.483
          }
         ]
    },
    {
      name: 'Osaka',
      data: [
        {
          x: 27.5,
          y: 0.285
        },
        {
          x: 26.1,
          y: 0.154
        },
        {
          x: 22.4,
          y: 0.611
        },
        {
          x: 22.9,
          y: 0.27
        }
       ]
     },
    {
      name: 'Hyogo',
      data: [
        {
          x: 25.4,
          y: 2.56
        },
        {
          x: 23.3,
          y: 1.321
        },
        {
          x: 27.1,
          y: 0.468
        },
        {
          x: 25.2,
          y: 0.727
        },
        {
          x: 27.7,
          y: 0.441
        },
        {
          x: 27.1,
          y: 1.719
        }
       ]
      },
      {
        name: 'Okinawa',
        data: [
          {
            x: 20.3,
            y: 1.703
          }
         ]
    }
    ]
};

var options10000 = {
  chart: {
      width: 1160,
      height: 540,
      title: 'Waiting child rate vs Senior rate among cities with top waiting children (>10000 full-time female worker in the city)'
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
  tui.chart.scatterChart(container10000, data10000, options10000);
})
