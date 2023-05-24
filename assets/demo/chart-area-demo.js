// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "rgba(0, 0, 0, 0.5)";

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "May 1",
      "May 2",
      "May 3",
      "May 4",
      "May 5",
      "May 6",
      "May 7",
      "May 8",
      "May 9",
      "May 10",
      "May 11",
      "May 12",
      "May 13",
      "May 14",
    ],
    datasets: [
      {
        label: "Sessions",
        lineTension: 0.3,
        backgroundColor: "rgb(235, 199, 199)",
        borderColor: " #F78888",
        pointRadius: 1,
        // pointBackgroundColor: "rgba(2,117,216,1)",
        // pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        // pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        // pointBorderWidth: 2,
        data: [
          10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159,
          32651, 31984, 38451, 10000, 30162, 26263, 18394, 18287, 28682, 31274,
          33259, 25849, 24159, 32651, 31984, 38451, 10000, 30162, 26263, 18394,
          18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451, 10000,
          30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651,
          31984, 38451,
        ],
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          time: {
            unit: "date",
          },
          gridLines: {
            display: false,
          },
          ticks: {
            maxTicksLimit: 30,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 50000,
            maxTicksLimit: 1,
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});
