import { Rect, Text, useFont } from "@shopify/react-native-skia";
import React from "react";

export type RectPropsType = {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  color?: string;
  textColor?: string;
  fontSize?: number;
};

export default function RectWithText({
  x,
  y,
  width,
  height,
  label,
  color = "#87cefa",
  textColor = "black",
  fontSize = 18,
}: RectPropsType) {
  const font = useFont(
    require("../../assets/fonts/Roboto-Regular.ttf"),
    fontSize
  );

  if (!font) return null;

  const metrics = font.measureText(label);

  const textX = x + width / 2 - metrics.width / 2;
  const textY = y + height / 2 + metrics.height / 3;

  return (
    <>
      <Rect x={x} y={y} width={width} height={height} color={color} />

      <Text x={textX} y={textY} text={label} font={font} color={textColor} />
    </>
  );
}
