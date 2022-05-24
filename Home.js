import { View, Text, SafeAreaView } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 50px;
`;

function Home() {
  return (
    <SafeAreaView>
      <Container>
        <Title>Home</Title>
      </Container>
    </SafeAreaView>
  );
}

export default Home;
