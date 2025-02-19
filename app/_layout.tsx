import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import GlobalProvider from "@/libs/global-provider";
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubic-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubic-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubic-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubic-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubic-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubic-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GlobalProvider>
  );
}
