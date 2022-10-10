import { useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function SplineChart({ data }) {
  const [splineData, setSplineData] = useState({
    series: [
      {
        name: "series1",
        data: [0, 11, 16, 18, 22, 20, 20],
      },
      {
        name: "series2",
        data: [5, 9, 11, 8, 9, 7, 12],
      },
    ],
    options: {
      colors: ["#3B82F6", "#A855F7"],
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["#3B82F6", "#A855F7"],
        width: 2,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "March 11",
          "March 12",
          "March 13",
          "March 14",
          "March 15",
          "March 16",
          "March 17",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <ApexCharts
      options={splineData.options}
      series={splineData.series}
      type="area"
      height={350}
    />
  );
}
