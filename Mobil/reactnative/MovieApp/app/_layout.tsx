import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import './globals.css';

export default function RootLayout() {
  return (
    <>
      {/* Durum çubuğu (saat, pil, sinyal kısmı) */}
      <StatusBar backgroundColor="black" style="dark" />
      
      {/* Stack navigator with header ayarları */}
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="movies/[id]"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
}
