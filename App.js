import React, { useRef } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableWithoutFeedback,
  Easing,
} from "react-native";

const App = () => {
  //FadeIn & FadeOut
  // const fadeAnim = useRef(new Animated.Value(0)).current;

  // const fadeIn = () => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 3000,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const fadeOut = () => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 2000,
  //     useNativeDriver: true,
  //   }).start();
  // };

  //Scale
  // const state = {
  //   animation: useRef(new Animated.Value(1)).current,
  // };

  // const startAnimation = () => {
  //   Animated.timing(state.animation, {
  //     toValue: 2,
  //     duration: 2000,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     state.animation.setValue(1);
  //   });
  // };

  // const animatedStyles = {
  //   transform: [{ scale: state.animation }],
  // };

  //Parallel
  // const state = {
  //   colorAnimation: useRef(new Animated.Value(0)).current,
  //   scaleAnimation: useRef(new Animated.Value(1)).current,
  // };

  // const startAnimation = () => {
  //   Animated.parallel([
  //     Animated.timing(state.colorAnimation, {
  //       toValue: 1,
  //       duration: 800,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(state.scaleAnimation, {
  //       toValue: 2,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }),
  //   ]).start(() => {
  //     state.colorAnimation.setValue(0);
  //     state.scaleAnimation.setValue(1);
  //   });
  // };

  // const backgroundColorInterpolate = state.colorAnimation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["#ff6347", "#a352b4"],
  // });

  // const boxStyle = {
  //   bgColor: backgroundColorInterpolate,
  //   transform: [{ scale: state.scaleAnimation }],
  // };

  //loop && slip
  // const state = {
  //   animation: useRef(new Animated.Value(0)).current,
  // };

  // const startAnimation = () => {
  //   Animated.loop(
  //     Animated.sequence([
  //       Animated.timing(state.animation, {
  //         toValue: 100,
  //         duration: 1000,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(state.animation, {
  //         toValue: -100,
  //         duration: 1000,
  //         useNativeDriver: true,
  //       }),
  //     ])
  //   ).start();
  // };

  // const animatedStyle = {
  //   transform: [{ translateY: state.animation }]
  // };

  //Easing
  // const state = {
  //   animation: useRef(new Animated.Value(0)).current,
  // }
  // const startAnimation = () => {
  //   Animated.timing(state.animation, {
  //     toValue: 100,
  //     duration: 1000,
  //     // easing: Easing.back(5),
  //     easing: Easing.bounce,
  //     // easing: Easing.linear
  //   }).start();
  // }
  // const animatedStyle = {
  //   transform: [{translateY: state.animation}]
  // }

  //Interpolate
  // const state = {
  //   animation: useRef(new Animated.Value(0)).current,
  // };

  // const startAnimation = () => {
  //   Animated.loop(
  //     Animated.timing(state.animation, {
  //       toValue: 100,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     })
  //   ).start();
  // };

  // const rotateInterpolate = state.animation.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: ["0deg", "360deg"],
  // });

  // const animatedStyle = {
  //   transform: [{ rotate: rotateInterpolate}, {translateY: state.animation}],
  // };

  return (
    <SafeAreaView style={styles.container}>
      {/* FadeIn & FadeOut */}
      <Animated.View style={[styles.fadingContainer, {opacity:fadeAnim}]}>
        <Text style={styles.fadingText}>Fading view!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>

      {/* Scale */}
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>

      {/* Parallel */}
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box_parallel, boxStyle]}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Parallel</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      {/* Loop & Slip */}
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableWithoutFeedback>

      {/* Easing */}
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "#B0E0E6",
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  },
  box_parallel: {
    width: 150,
    height: 150,
    backgroundColor: "#ff6347",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    height: 3000,
  },
});

export default App;
