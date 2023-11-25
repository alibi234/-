const chartData = {
    labels: [
      "Speak Kazakh fluently",
      "Know at the level of conversational",
      "Understand but do not speak",
      "Know a few words can understand simple sentences",
      "Do not know at all",
      "Are not going to study",
    ],
    data: [77.7, 10.3, 5, 3.7, 1.6, 1.7],
  };
  
  const myChart = document.querySelector(".my-chart");
  
  new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Language Proficiency",
          data: chartData.data,
        },
      ],
    },
    options: {
      borderWidth: 10,
      borderRadius: 2,
      hoverBorderWidth: 0,
      aspectRatio: 0.5,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  