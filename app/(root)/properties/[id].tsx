import ImageSlider from "@/components/ImageSlider";
import PropertyDetails from "@/components/PropertyDetails";
import icons from "@/constants/icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <ScrollView className="relative flex-1 bg-white">
      <ImageSlider />
      <View className="absolute top-2 left-5 w-full px-2 flex flex-row justify-between items-center">
        <TouchableOpacity onPress={() => router.push("/")}>
          <Image
            source={icons.backArrow}
            className="size-8 mix-blend-multiply"
          />
        </TouchableOpacity>

        <View className="flex-row gap-2 mr-8">
          <TouchableOpacity>
            <Image source={icons.heart} className="size-6" tintColor="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.send} className="size-6" tintColor="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* --Property Details-- */}
      <PropertyDetails />
    </ScrollView>
  );
};

export default Property;
