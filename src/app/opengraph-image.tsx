import { ImageResponse } from "next/og";
export const alt = "Точка сборки — независимая команда разработчиков";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 70,
        background: "#0c0e11",
        color: "#f4f5f7",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 29, color: "#879cff" }}>
        точка сборки.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -4,
          lineHeight: 1.15,
        }}
      >
        <span>Сложные задачи.</span>
        <span style={{ color: "#879cff" }}>Точные решения.</span>
      </div>
      <div style={{ display: "flex", fontSize: 25, color: "#a9adb7" }}>
        Сайты · CRM-системы · Веб-приложения
      </div>
    </div>,
    size,
  );
}
