import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabsLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: "#f5f5f5" },
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: "#f5f5f5",
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarActiveTintColor: "#6200ee",
          tabBarInactiveTintColor: "#666666",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Today's Habits",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar-today"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="streaks"
          options={{
            headerShown: false,
            title: "Streaks",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-line"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="add-habit"
          options={{
            headerShown: false,
            title: "Add Habit",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
