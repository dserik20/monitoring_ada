import React from "react";

export default function OilLossTable() {
  const initialValue = 72.4;
  let cumulativeValue = initialValue;

  const tableData = [
    { name: "QH0", Δ: 0, isInitial: true },
    { name: "ΔQH(t)", Δ: -9.8 },
    { name: "ΔQH(N)", Δ: -13.4 },
    { name: "ΔQH(qж)", Δ: 3.0 },
    { name: "QH1", Δ: 0, isFinal: true },
  ];

  return (
    <div>
      <table
        style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#242424" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Имя переменной
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Начало</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Δ</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Конец</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => {
            const startValue = cumulativeValue;
            cumulativeValue += row.Δ;

            return (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {row.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {row.isInitial
                    ? startValue.toFixed(2)
                    : row.isFinal
                    ? ""
                    : startValue.toFixed(2)}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {row.Δ !== 0 ? row.Δ : ""}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {row.isFinal ? cumulativeValue.toFixed(2) : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
