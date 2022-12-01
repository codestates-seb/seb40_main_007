import ReactApexChart from "react-apexcharts";
export default function StationData({ stationCntdata }) {
  const state = {
    series: [
      {
        name: "Inflation",
        data: stationCntdata,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          // borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "행신역",
          "서울역",
          "영등포역",
          "광명역",
          "수원역",
          "천안아산역",
          "오송역",
          "대전역",
          "김천구미역",
          "서대구역",
          "동대구역",
          "밀양역",
          "구포역",
          "부산역",
          "울산역",
          "신경주역",
          "포항역",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val;
          },
        },
      },
      title: {
        text: "Post Count of Station , 2022",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  };

  return (
    <div className="bg-white m-2 shadow-lg">
      <div className="font-bold mr-2 bg-gray-100 border-l-4 border-[#26A0FC] w-fit px-4 text-[#26A0FC]">
        기차역별 게시글 분포
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
}
