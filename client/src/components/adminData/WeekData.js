import ReactApexChart from "react-apexcharts";

export default function WeekData({ boardsWeek, week }) {
  console.log(week);
  const state = {
    series: [
      {
        name: "WeekData",
        data: boardsWeek,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 330,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },

      title: {
        text: "Weekly Data",
        align: "left",
      },
      labels: week,
      xaxis: {
        category: "week",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  };

  return (
    <div className="bg-white m-2 shadow-lg">
      <div className="font-bold mr-2 bg-gray-100 border-l-4 border-[#26A0FC] w-fit px-4 text-[#26A0FC] mb-5">
        주간 포스팅 수
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </div>
  );
}
