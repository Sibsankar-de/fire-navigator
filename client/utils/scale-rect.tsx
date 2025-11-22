import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export function scaleRectAuto(
    x: number,
    y: number,
    width?: number,
    height?: number,
    maxX = 300,
    maxY = 600
) {
    const { width: screenW, height: screenH } = Dimensions.get("window");

    // Header height = status bar + typical tab/header heights (approx)
    const headerHeight = getStatusBarHeight() + 56;
    // 56 = common Android toolbar height (works for Expo header too)

    const availableH = screenH - headerHeight;

    const scaleX = screenW / maxX;
    const scaleY = availableH / maxY;

    const scale = Math.min(scaleX, scaleY);

    return {
        x: x * scale,
        y: y * scale + headerHeight,
        width: width ? width * scale : null,
        height: height ? height * scale : null,
        scale,
    };
}
