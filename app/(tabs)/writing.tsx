import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Card from "@/components/card";
import TextArea from "@/components/textArea";
import CustomButton from "@/components/button";
import CilpComponent from "@/components/clip";
import { clipType } from "@/constants/type";
import React from "react";

export default function TabTwoScreen() {
  const [text, setText] = React.useState("");
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Writing Task</ThemedText>
      </ThemedView>
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>
      <View style={styles.questionContainer}>
        <Card
          title="Question:"
          content="You are studying a short course in another country. Your accommodation was arranged  by the course provider. There is a major problem with the accommodation. Write a  letter to the course provider."
        />
        <Card title="Criterion:" content="" />
      </View>
      <TextArea text={text} setText={setText}/>
      <View style={styles.questionContainer}>
        <CilpComponent icon="counter" onPress={()=>{}} text={text} type={clipType.wordCount}/>
        <CilpComponent icon="timer" onPress={()=>{}} text="10 : 00" type={clipType.timer}/>
        <CustomButton
          icon="arrow-left-bottom"
          text="Submit"
          onPress={() => {}}
        />
      </View>
    </ParallaxScrollView>
  );
}

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
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
});
