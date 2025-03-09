import ImageSlider from "@/components/ImageSlider";
import PropertyDetails from "@/components/PropertyDetails";
import icons from "@/constants/icons";
<<<<<<< HEAD
import {router, useLocalSearchParams} from "expo-router";
import React from "react";
import {FlatList, Image, SafeAreaView, ScrollView, TouchableOpacity, View} from "react-native";
import {useAppwrite} from "@/libs/useAppwrite";
import {getPropertiesById} from "@/libs/appwrite";
import {galleryImages} from "@/libs/data";

const Property = () => {
    const params = useLocalSearchParams();
    // @ts-ignore
    const {data: property, loading} = useAppwrite({
        fn: getPropertiesById,
        params: {
            id: params.id,
        }
    });

    const renderItems = () => (
        <View className="relative flex-1 bg-white">
            <ImageSlider gallery={property?.gallery} loading={loading}/>
            <View className="absolute top-2 left-5 w-full px-2 flex flex-row justify-between items-center">
                <TouchableOpacity onPress={() => router.push("/")}>
                    <Image
                        source={icons.backArrow}
                        className="size-8 mix-blend-multiply"
                    />
                </TouchableOpacity>

                <View className="flex-row gap-2 mr-8">
                    <TouchableOpacity>
                        <Image source={icons.heart} className="size-6" tintColor="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={icons.send} className="size-6" tintColor="black"/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* --Property Details-- */}
            <PropertyDetails id={params.id} propertyData={property} loading={loading}/>
        </View>
    )

    return (

        <FlatList
            data={[1]} // You can pass any dummy data to ensure the list renders
            renderItem={renderItems}
            keyExtractor={(item) => item.toString()}
        />

    );
=======
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
>>>>>>> 2b14d347f4f951a54df0daea6542f90c81abf513
};

export default Property;
