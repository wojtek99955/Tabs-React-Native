import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import About from "./About";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const Tabs = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Ionicons name="home" size={25} />,
          }}
        />
        <Tabs.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: () => <Ionicons name="information-circle" size={25} />,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
