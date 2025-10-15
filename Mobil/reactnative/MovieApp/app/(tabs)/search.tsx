import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const {
    data: movies,
    loading: loading,
    error: error,
    refetch
  } = useFetch(() => fetchMovies({ query: searchQuery }), true);

  // searchQuery değiştiğinde debouncing ile API'yi çağır
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      refetch();
    }, 500); // 500ms bekle

    // Cleanup function - yeni keystrokes geldiğinde önceki timeout'u iptal et
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="bg-primary flex-1">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        numColumns={3}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10 mx-auto my-4" />
            </View>
            <View className="my-5">
              <SearchBar placeholder="Search movies..." 
              onChangeText={(text:string) => setSearchQuery(text)} 
              value={searchQuery}
              />
            </View>
            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3r self-center"
              />
            )}
            {error && (
              <Text className="text-red-500 text-center">{error.message}</Text>
            )}
            {!loading &&
              !error &&
              searchQuery.trim() &&
              movies?.length > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search Results for{" "}
                  <Text className="text-purple-400">{searchQuery}</Text>
                </Text>
              )}
            {!loading &&
              !error &&
              !searchQuery.trim() &&
              movies?.length > 0 && (
                <Text className="text-xl text-white font-bold">
                  Popular Movies
                </Text>
              )}
          </>
        }
        ListEmptyComponent={!loading && !error ? (
          <Text className="text-white text-center">No movies found</Text>
        ) : null}
      />
    </View>
  );
};

export default search;
