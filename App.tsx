import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

// Importar telas
import MembersScreen from "./app/screens/MembersScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import HomeScreen from "./app/screens/HomeScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
    card: "#fff",
    text: "#000",
    border: "#fff",
  },
};

// Stack para o Perfil
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "Perfil",
          headerTitleAlign: "left", // título alinhado à esquerda
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
          },
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={28}
              color="#000"
              style={{ marginLeft: 12 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            switch (route.name) {
              case "Pesquisar":
                iconName = "search";
                break;
              case "Publicar":
                iconName = "add-circle-outline";
                break;
              case "Chat":
                iconName = "chatbubble-outline";
                break;
              case "Perfil":
                iconName = "person-outline";
                break;
              default:
                iconName = "home-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#DAB377",
          tabBarInactiveTintColor: "#6D7881",
          headerShown: false,

          tabBarStyle: {
            backgroundColor: "#001A2B",
            borderTopWidth: 0,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Pesquisar"
          component={MembersScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Perfil" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
