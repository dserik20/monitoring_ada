import React, { useState, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";
import Slider from "react-slider";
import styles from "./AmChart.module.css";

const AmChart = () => {
  const [currentYear, setCurrentYear] = useState(1950);

  useLayoutEffect(() => {
    let root = am5.Root.new("yearlyChartDiv");

    // Dispose of the amCharts logo
    root._logo.dispose();

    // Apply themes
    root.setThemes([am5themes_Animated.new(root), am5themes_Dark.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelY: "zoomXY",
        pinchZoomX: true,
        pinchZoomY: true,
      })
    );

    // Create axes
    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        min: -100,
        max: 100,
        renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 50 }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: -100,
        max: 100,
        renderer: am5xy.AxisRendererY.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    // Define color fills for areas
    const colors = [0xe3853c, 0x48b2b7, 0x91d1da, 0xe8c634];
    const areas = [
      { x1: -200, y1: 0, x2: 0, y2: 200, color: colors[0] },
      { x1: -200, y1: 0, x2: 0, y2: -200, color: colors[1] },
      { x1: 200, y1: 0, x2: 0, y2: -200, color: colors[2] },
      { x1: 200, y1: 0, x2: 0, y2: 200, color: colors[3] },
    ];

    areas.forEach((area) => {
      let series = chart.series.push(
        am5xy.LineSeries.new(root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: "ax",
          valueYField: "ay",
          fill: am5.color(area.color),
        })
      );

      series.fills.template.setAll({ fillOpacity: 0.9, visible: true });
      series.strokes.template.set("forceHidden", true);

      series.data.setAll([
        { ax: area.x1, ay: area.y1 },
        { ax: area.x2, ay: area.y1 },
        { ax: area.x2, ay: area.y2 },
        { ax: area.x1, ay: area.y2 },
      ]);
    });

    // Prepare data
    let yearData = {};
    let firstYear = 1950;
    let lastYear = 2022;
    for (let year = firstYear; year <= lastYear; year++) {
      let data = [];
      yearData[year] = data;

      for (let i = 0; i < 50; i++) {
        if (year === firstYear) {
          data.push({
            x: Math.round(Math.random() * 100 - 90),
            y: Math.round(Math.random() * 100 - 90),
            value: Math.round(Math.random() * 1000),
          });
        } else {
          let previous = yearData[year - 1][i];
          data.push({
            x: previous.x + Math.round(Math.random() * 5 - 2 + i / 50),
            y: previous.y + Math.round(Math.random() * 5 - 2 + i / 50),
            value: Math.abs(
              previous.value + Math.round(Math.random() * 100 - 45)
            ),
          });
        }
      }
    }

    // Create series
    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        calculateAggregates: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "y",
        valueXField: "x",
        valueField: "value",
      })
    );

    series.strokes.template.set("visible", false);

    let circleTemplate = am5.Template.new({});
    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(
          root,
          {
            radius: 5,
            fill: am5.color(0x000000),
            fillOpacity: 0.6,
            tooltipText: "x: {valueX} y:{valueY} value: {value}",
          },
          circleTemplate
        ),
      });
    });

    series.set("heatRules", [
      {
        target: circleTemplate,
        min: 3,
        max: 35,
        dataField: "value",
        key: "radius",
        maxValue: 2000,
      },
    ]);

    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
      })
    );

    let label = chart.plotContainer.children.push(
      am5.Label.new(root, {
        text: currentYear.toString(),
        fontSize: "5em",
        fill: am5.color(0x000000),
        opacity: 0.3,
      })
    );

    // Slider and Play Button
    let container = chart.plotContainer.children.push(
      am5.Container.new(root, {
        y: am5.p100,
        centerX: am5.p50,
        centerY: am5.p100,
        x: am5.p50,
        width: am5.percent(90),
        layout: root.horizontalLayout,
        paddingBottom: 10,
      })
    );

    let playButton = container.children.push(
      am5.Button.new(root, {
        themeTags: ["play"],
        centerY: am5.p50,
        marginRight: 20,
        icon: am5.Graphics.new(root, {
          themeTags: ["icon"],
        }),
      })
    );

    playButton.events.on("click", function () {
      if (!playButton.get("active")) {
        slider.animate({
          key: "start",
          to: 1,
          duration: 15000 * (1 - slider.get("start")),
        });
      }
      playButton.set("active", !playButton.get("active"));
    });

    let slider = container.children.push(
      am5.Slider.new(root, {
        orientation: "horizontal",
        start: 0,
        centerY: am5.p50,
      })
    );

    slider.on("start", function (start) {
      if (start === 1) {
        playButton.set("active", false);
      }
    });

    slider.events.on("rangechanged", function () {
      updateSeriesData(
        firstYear + Math.round(slider.get("start", 0) * (lastYear - firstYear))
      );
    });

    function updateSeriesData(year) {
      if (currentYear !== year) {
        setCurrentYear(year);
        let data = yearData[year];

        series.data.setAll(data);
        label.set("text", year.toString());
      }
    }

    series.data.setAll(yearData[currentYear]);

    // Make stuff animate on load
    series.appear(1000);
    chart.appear(1000, 100);

    // Cleanup on component unmount
    return () => {
      root.dispose();
    };
  }, [currentYear]);

  return (
    <div>
      <div id="yearlyChartDiv" className={styles.chart}></div>
    </div>
  );
};

export default AmChart;
