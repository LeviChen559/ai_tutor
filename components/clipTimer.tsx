import * as React from "react";
import { Chip } from "react-native-paper";
import { StyleSheet, Text } from "react-native";
import { clipType } from "@/constants/type";
import { useState, useEffect } from "react";

interface iChip {
  icon: string;
  duration: number;
}

const startTimer = (duration: number, setTimer: (time: string) => void) => {
  let timer: number = duration;
  let minutes: string;
  let seconds: string;

  // Update the timer every second
  const countdown = setInterval((): void => {
    // Calculate minutes and seconds
    minutes = String(Math.floor(timer / 60)).padStart(2, "0");
    seconds = String(timer % 60).padStart(2, "0");
    // If the timer reaches 0, stop the countdown
    if (--timer < 0) {
      clearInterval(countdown);
      setTimer("Time's up!"); // Log "Time's up!" when the timer reaches 0
    } else {
      setTimer(`${minutes}:${seconds}`);
      // Log the current time during the countdown
    }
  }, 1000);
};

const CilpComponent = (props: iChip) => {
  const [timer, setTimer] = useState<string>("");
  const [play, setPlay] = useState<boolean>(false);

  useEffect(() => {
     startTimer(props.duration, setTimer);
  }, []);

const onPause = () => {
    setPlay(!play);
    console.log("play:",play)
}

  return (
    <Chip
      style={styles.container}
      icon={props.icon}
      onPress={onPause}
    >
      <Text style={styles.text}>{timer}</Text>
    </Chip>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: "100%",
  },
  text: {
    fontSize: 16,
  },
});

export default CilpComponent;
