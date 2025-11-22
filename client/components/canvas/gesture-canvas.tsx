import { Canvas } from "@shopify/react-native-skia";
import React from "react";
import {
    Gesture,
    GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue
} from "react-native-reanimated";

type Props = {
  children: React.ReactNode;
};

export default function GestureCanvas({ children }: Props) {
  // Shared values for pan + zoom
  const scale = useSharedValue(1);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  // Panning gesture
  const pan = Gesture.Pan()
    .onChange((e) => {
      offsetX.value += e.changeX;
      offsetY.value += e.changeY;
    });

  // Pinch gesture (zoom)
  const pinch = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = e.scale;
    })
    .onEnd(() => {
      // Optional: smooth zoom reset if needed
    //   scale.value = withTiming(1);
    });

  // Combine gestures
  const composed = Gesture.Simultaneous(pan, pinch);

  // Animated transform style for the canvas wrapper
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: offsetX.value },
      { translateY: offsetY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={[{ flex: 1 }, animatedStyle]}>
        <Canvas style={{ flex: 1 }}>
          {children}
        </Canvas>
      </Animated.View>
    </GestureDetector>
  );
}
