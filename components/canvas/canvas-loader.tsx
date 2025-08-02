"use client";

import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p className="font-bold text-sm mt-10 text-[#F1F1F1]">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
