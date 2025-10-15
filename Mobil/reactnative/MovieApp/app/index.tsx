import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (

       <>

      {/* Sayfa içeriği */}
      <View className="flex-1 items-center justify-center bg-black">
        <Text className="text-white font-bold text-4xl mb-20 text-center">Hüseyin Movie App</Text>
        <Link href="/movie/avanger" className="bg-red-600 px-4 py-2 rounded">
          <Text className="text-white font-semibold">Avanger</Text>
        </Link>
      </View>
    </>
  
  )
;}
