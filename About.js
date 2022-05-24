import { View, Text, SafeAreaView } from "react-native";
import styled from "styled-components";

const Title = styled.Text`
  text-align: center;
  font-size: 50px;
  margin-top: 10px;
`;
const Description = styled.Text`
  font-size: 20px;
  margin: 15px 15px;
`;

function About() {
  return (
    <SafeAreaView>
      <Title>About</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus
        aspernatur nobis sequi officiis dolorem, adipisci, tempore similique
        qui, voluptatem beatae eos reiciendis cupiditate iusto!
      </Description>
    </SafeAreaView>
  );
}

export default About;
