angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
		    .state('dashboard', {
		       url: '/dashboard',
		       template: '<dashboard></dashboard>'
			})
			.state('task', {
		        url: '/tasks/:id',
		        template: '<task-details></task-details>',
		        params : {data :null}
		    })
			.state('publications', {
		      url: '/publications',
		      template: '<grid collection="publications"></grid>'
			})
			.state('authors', {
				url: '/authors',
				template: '<grid collection="authors"></grid>'
			})
			.state('tasks', {
				url: '/tasks',
				template: '<grid collection="todos"></grid>'
			})
			.state('staff', {
				url: '/staff',
				template: '<grid collection="users"></grid>'
			})
			.state('chart', {
				url: '/chart',
				template: `<br><div style="font-size: 20px;font-weight: 800;font-family: 'Indie Flower';color: black;;"> Get the latest statistics data of your coworkers </div>
				<div id="container" style="width: 70%; height: 400px; margin: 20px auto; border: 10px solid #443366"></div>`,
				controller: function () {
					renderChart();
				}
			})

			$urlRouterProvider.otherwise('/dashboard');
});




function renderChart() {
    // Create the chart
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Count of tasks per staff of Raspberry Publishing'
        },
        subtitle: {
            text: 'Data collected for the second part of 2016 year.'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Number of tasks done'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Productivity',
            colorByPoint: true,
            data: [{
                name: 'Vladyslav Sazonov',
                y: 56.33,
                drilldown: 'Vladyslav Sazonov'
            }, {
                name: 'Ben Hopkins',
                y: 24.03,
                drilldown: 'Ben Hopkins'
            }, {
                name: 'Alina Blahun',
                y: 10.38,
                drilldown: 'Alina Blahun'
            }, {
                name: 'Ivan Andrushkin',
                y: 4.77,
                drilldown: 'Ivan Andrushkin'
            }, {
                name: 'Oksana Kurnosova',
                y: 0.91,
                drilldown: 'Oksana Kurnosova'
            }]
        }],
        drilldown: {
            series: [{
                name: 'Vladyslav Sazonov',
                id: 'Vladyslav Sazonov',
                data: [
                    [
                        'September',
                        24.13
                    ],
                    [
                        'October',
                        17.2
                    ],
                    [
                        'November',
                        8.11
                    ],
                    [
                        'December',
                        5.33
                    ],
                    [
                        'January',
                        1.06
                    ],
                    [
                        'Fabruary',
                        0.5
                    ]
                ]
            }, {
                name: 'Ben Hopkins',
                id: 'Ben Hopkins',
                data: [
                    [
                        'September',
                        24.13
                    ],
                    [
                        'October',
                        17.2
                    ],
                    [
                        'November',
                        8.11
                    ],
                    [
                        'December',
                        5.33
                    ],
                    [
                        'January',
                        1.06
                    ],
                    [
                        'Fabruary',
                        0.5
                    ]
                ]
            }, {
                name: 'Alina Blahun',
                id: 'Alina Blahun',
                data: [
                    [
                        'v35',
                        2.76
                    ],
                    [
                        'v36',
                        2.32
                    ],
                    [
                        'v37',
                        2.31
                    ],
                    [
                        'v34',
                        1.27
                    ],
                    [
                        'v38',
                        1.02
                    ],
                    [
                        'v31',
                        0.33
                    ],
                    [
                        'v33',
                        0.22
                    ],
                    [
                        'v32',
                        0.15
                    ]
                ]
            }, {
                name: 'Ivan Andrushkin',
                id: 'Ivan Andrushkin',
                data: [
                    [
                        'September',
                        24.13
                    ],
                    [
                        'October',
                        17.2
                    ],
                    [
                        'November',
                        8.11
                    ],
                    [
                        'December',
                        5.33
                    ],
                    [
                        'January',
                        1.06
                    ],
                    [
                        'Fabruary',
                        0.5
                    ]
                ]
            }, {
                name: 'Oksana Kurnosova',
                id: 'Oksana Kurnosova',
                data: [
                    [
                        'September',
                        24.13
                    ],
                    [
                        'October',
                        17.2
                    ],
                    [
                        'November',
                        8.11
                    ],
                    [
                        'December',
                        5.33
                    ],
                    [
                        'January',
                        1.06
                    ],
                    [
                        'Fabruary',
                        0.5
                    ]
                ]
            }]
        }
    });
};