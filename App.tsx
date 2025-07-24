import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  const [arVisible, setArVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Button title="Toggle Scene" onPress={() => setArVisible(!arVisible)} />
      {arVisible && (
        <View style={{ flex: 1 }}>
          <ViroARSceneNavigator
            autofocus={true}
            initialScene={{
              scene: () => <HelloWorldSceneAR />,
            }}
            style={styles.f1}
          />
        </View>
      )}
    </View>
  );
}

const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Initializing AR...");

  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log("onInitialized", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Hello World!");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
};

const styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
