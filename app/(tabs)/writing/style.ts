import styled, { css } from "@emotion/native";

export const MainContainer = styled.View({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
});
interface TaskContainerProps {
  screenWidth: number;
}
export const TaskContainer = styled.View((props: TaskContainerProps) => ({
    flexDirection: "column",
    width: props.screenWidth > 1200 ? 1200 : '100%',
    gap: props.screenWidth > 1200 ?24:16,
  }));

