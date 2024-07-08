import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View, Dimensions } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Card from "@/components/card";
import TextArea from "@/components/textArea";
import CustomButton from "@/components/button";
import CilpCountWord from "@/components/clipCountWord";
import ClipTimer from "@/components/clipTimer";
import React from "react";
import { MainContainer, TaskContainer } from "./style";

export default function TabTwoScreen() {
  const [text, setText] = React.useState("");
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="create" style={styles.headerImage} />
      }
    >
      <MainContainer id="mainContainer">
        <TaskContainer screenWidth={width}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Writing Task</ThemedText>
          </ThemedView>
          <ThemedText>
            Task 1 of the Writing section of CELPIP is email writing. Your task
            will be to write an email to a person regarding a particular
            situation. The time limit is 26 minutes, and the word limit is 150
            to 200 words. Examples are given below.
          </ThemedText>
          <View style={styles.questionContainer}>
            <Card
              title="Question:"
              content={[
                "You are studying a short course in another country. Your accommodation was arranged  by the course provider. There is a major problem with the accommodation. Write a  letter to the course provider.",
              ]}
              bullet={false}
            />
            <Card
              title="Criterion:"
              content={[
                "Say what the problem is.",
                "Describe the accommodation you thought you were getting.",
                "Ask the provider to solve the problem.",
              ]}
              bullet={true}
            />
          </View>
          <TextArea text={text} setText={setText} />
          <View style={styles.inputContainer}>
            <View style={styles.instructContainer}>
              <CilpCountWord icon="counter" text={text} />
              <ClipTimer icon="timer" duration={1560} />
            </View>
            <CustomButton
              icon="arrow-left-bottom"
              text="Submit"
              onPress={() => {}}
            />
          </View>
        </TaskContainer>
      </MainContainer>
    </ParallaxScrollView>
  );
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  questionContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    ...(width < 768 ? { flexDirection: "column" } : {}),
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    gap: 16,
    ...(width < 768 ? { flexDirection: "column" } : {}),
  },
  instructContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    width: "50%",
    ...(width < 768 ? { width: "100%" } : {}),
  },
});
