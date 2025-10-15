import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import './globals.css';

export default function RootLayout() {
  return (
    <>
      {/* Durum çubuğu (saat, pil, sinyal kısmı) */}
      <StatusBar backgroundColor="black" style="dark" />
      
      {/* Stack navigator with header ayarları */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white", // başlık yazısı beyaz
        }}
      />
    </>
  );
}
