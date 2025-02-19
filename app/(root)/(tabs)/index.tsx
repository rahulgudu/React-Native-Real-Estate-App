import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text className="text-3xl font-rubik text-gray-500">
        Welcome to my app
      </Text>
    </View>
  );
}
