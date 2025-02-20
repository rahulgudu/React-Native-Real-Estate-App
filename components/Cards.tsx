import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
interface Props {
  onPress?: () => void;
}
export const FeaturedCards = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative">
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-xl absolute bottom-0"
      />
      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5 text-primary-300 ml-1" />
        <Text className="text-xs font-rubic-bold text-primary-300 ml-1">
          4.4
        </Text>
      </View>

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubic-extrabold text-white"
          numberOfLines={1}>
          Mordern Appartment
        </Text>
        <Text className="text-base font-rubik text-white">
          22 W 15th St, New York
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubic-extrabold text-white">
            $2,500
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 p-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative">
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-3.5 text-primary-300 ml-1" />
        <Text className="text-xs font-rubic-bold text-primary-300 ml-1">
          4.4
        </Text>
      </View>

      <Image source={images.newYork} className="w-full h-60 rounded-lg" />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubic-bold text-black-300">
          Cozy Studio
        </Text>
        <Text className="text-xs font-rubik text-blac-200">
          22 W 15th St, New York
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubic-bold text-primary-300">
            $2,500
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#000"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
