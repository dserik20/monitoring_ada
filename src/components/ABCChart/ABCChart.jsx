import React, { useState, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Slider from "react-slider";
import styles from "./ABCChart.module.css"; // Importing the CSS module

const ABCChart = () => {
  const [currentYear, setCurrentYear] = useState(1950); // State to track the current year

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    // Set chart background color to white
    root.container.set(
      "background",
      am5.Rectangle.new(root, {
        fill: am5.color(0xffffff),
      })
    );

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        min: -100,
        max: 100,
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
        }),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: -100,
        max: 100,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Define the four areas with different colors
    const colors = ["#CC9933 ", "#D1E7DD", "#FFF3CD", "#CFE2FF"];

    // Create four series to define the colored areas
    const areas = [
      { x1: -100, y1: 0, x2: 0, y2: 100, color: colors[0] }, // Top-left
      { x1: 0, y1: 0, x2: 100, y2: 100, color: colors[1] }, // Top-right
      { x1: -100, y1: -100, x2: 0, y2: 0, color: colors[2] }, // Bottom-left
      { x1: 0, y1: -100, x2: 100, y2: 0, color: colors[3] }, // Bottom-right
    ];

    areas.forEach((area) => {
      let areaSeries = chart.series.push(
        am5xy.LineSeries.new(root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: "ax",
          valueYField: "ay",
          fill: am5.color(area.color),
        })
      );

      areaSeries.fills.template.setAll({ fillOpacity: 0.5, visible: true });
      areaSeries.strokes.template.set("forceHidden", true);

      areaSeries.data.setAll([
        { ax: area.x1, ay: area.y1 },
        { ax: area.x2, ay: area.y1 },
        { ax: area.x2, ay: area.y2 },
        { ax: area.x1, ay: area.y2 },
      ]);
    });

    // Create the series for the bubbles
    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        calculateAggregates: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "x",
        valueYField: "y",
        valueField: "value",
        tooltipText: "{valueX}, {valueY}: [bold]{value}[/]",
      })
    );

    series.strokes.template.set("visible", false);

    series.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 10,
          fillOpacity: 0.8,
          fill: am5.color(0x000000),
        }),
      });
    });

    let data = [
      { x: -70, y: -20, value: 50, time: 1950 },
      { x: -50, y: 40, value: 80, time: 1960 },
      { x: 0, y: -50, value: 120, time: 1970 },
      { x: 30, y: 20, value: 150, time: 1980 },
      { x: 60, y: 30, value: 180, time: 1990 },
      { x: 90, y: 70, value: 200, time: 2000 },
    ];

    // Update data when the year changes
    let updateData = (year) => {
      let newData = data.map((d) => ({
        x: d.x + (Math.random() - 0.5) * 10,
        y: d.y + (Math.random() - 0.5) * 10,
        value: d.value,
        time: year,
      }));
      series.data.setAll(newData);
    };

    updateData(currentYear); // Initial data set

    return () => {
      root.dispose();
    };
  }, [currentYear]); // Re-run when currentYear changes

  return (
    <div>
      <div id="chartdiv" className={styles.chart}></div>
      <Slider
        min={1950}
        max={2000}
        step={1}
        value={currentYear}
        onChange={(value) => setCurrentYear(value)}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        className={styles.slider}
        thumbClassName={styles.sliderThumb}
        trackClassName={styles.sliderTrack}
      />
    </div>
  );
};

export default ABCChart;
