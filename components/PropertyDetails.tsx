import {View, Text, Image, TouchableOpacity, ActivityIndicator} from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";
import ImageGallery from "./ImageGallery";
import LocationMap from "./LocationMap";
import ReviewCard from "@/components/ReviewCard";
import ReviewSection from "@/components/ReviewSection";
import uri from "ajv/lib/runtime/uri";

const facilities = [
    {icon: icons.carPark, label: "Car Parking"},
    {icon: icons.swim, label: "Swimming"},
    {icon: icons.dumbell, label: "Gym & Fitness"},
    {icon: icons.cutlery, label: "Restaurant"},
    {icon: icons.wifi, label: "Wi-fi & Net"},
    {icon: icons.dog, label: "Pet Center"},
    {icon: icons.run, label: "Sport Center"},
    {icon: icons.laundry, label: "Laundry"},
];
const PropertyDetails = ({id, propertyData, loading}: { id: string, propertyData: any, loading: boolean }) => {
    if (loading) {
        return <ActivityIndicator size="large"/>;
    }
    return (
        <View className="bg-white p-5 rounded-xl shadow-md">
            {/* Title, Badge and Ratngs */}
            <View className="flex-col items-start gap-3">
                <Text className="text-xl font-rubic-bold text-black-300">
                    {propertyData?.property?.name}
                </Text>
                <View className="flex-row gap-4">
                    <View className="bg-blue-100 px-3 py-1 rounded-full">
                        <Text className="text-blue-600 font-rubic-semibold text-xs">
                            {propertyData?.property?.type}
                        </Text>
                    </View>
                    <View className="flex-row items-center">
                        <Image source={icons.star} className="size-5"/>
                        <Text className="text-gray-700 font-rubic-semibold ml-1">{propertyData?.property?.rating}</Text>
                        <Text className="text-gray-500 font-rubic text-sm ml-1">
                            ({propertyData?.property?.reviews?.length} reviews)
                        </Text>
                    </View>
                </View>
            </View>

            {/* Properties Features */}
            <View className="flex-row justify-between items-center mt-4">
                <View className="flex-row items-center gap-2">
                    <View className="bg-blue-100 rounded-full p-2">
                        <Image source={icons.bed} className="size-5"/>
                    </View>
                    <Text className="text-black-200 font-rubic-medium">{propertyData?.property?.bedrooms} Beds</Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <View className="bg-blue-100 rounded-full p-2">
                        <Image source={icons.bath} className="size-5"/>
                    </View>
                    <Text className="text-black-200 font-rubic-medium">{propertyData?.property?.bathrooms} Bath</Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <View className="bg-blue-100 rounded-full p-2">
                        <Image source={icons.area} className="size-5"/>
                    </View>
                    <Text className="text-black-200 font-rubic-medium">{propertyData?.property?.area} sqft</Text>
                </View>
            </View>

            {/* Agents Section */}
            <View className="border-t border-gray-200 mt-6 pt-4">
                <Text className="text-lg font-rubic-bold text-black-300">Agent</Text>

                <View className="flex-row justify-between items-center mt-3">
                    <View className="flex-row items-center gap-2">
                        <Image source={{uri: propertyData?.agent?.avatar}} className="w-12 h-12 rounded-full"/>
                        <View>
                            <Text className="text-lg font-rubic-semibold text-black">
                                {propertyData?.agent?.name}
                            </Text>
                            <Text className="text-sm text-black-200">Owner</Text>
                        </View>
                    </View>

                    <View className="flex-row gap-4">
                        <TouchableOpacity className="p-2">
                            <Image source={icons.chat} className="size-6"/>
                        </TouchableOpacity>
                        <TouchableOpacity className="p-2">
                            <Image source={icons.phone} className="size-6"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Overview Section */}
            <View className="border-t border-gray-200 mt-6 pt-4">
                <Text className="text-lg font-rubic-bold text-black">Overview</Text>
                <Text className="text-gray-500 mt-2 font-rubic-medium leading-relaxed">
                    {propertyData?.property?.description}
                </Text>
            </View>

            {/* Facilities Section */}
            <View className="border-t border-gray-200 mt-6 pt-4">
                <Text className="text-lg font-rubic-bold text-black">Facilities</Text>
                <View className="flex-wrap flex-row justify-between mt-3">
                    {propertyData?.property?.facilities?.map((facility: string, index: number) => (
                        <View key={index} className="items-center mb-4">
                            {/*<View className="bg-blue-100 p-4 rounded-full">*/}
                            {/*    <Image*/}
                            {/*        source={facility.icon}*/}
                            {/*        className="size-8"*/}
                            {/*        tintColor="#3B82F6"*/}
                            {/*    />*/}
                            {/*</View>*/}
                            <Text className="text-gray-600 text-sm font-rubic-medium text-center mt-1">
                                {facility}
                            </Text>
                        </View>
                    ))}
                </View>

                <ImageGallery gallery={propertyData?.gallery}/>
                <LocationMap address={propertyData?.property?.address}/>
                <ReviewSection id={id} reviews={propertyData?.reviews}/>

                {/*Action Button*/}
                <View className="border-t border-gray-200 mt-6 pt-4 flex-row items-center justify-between">
                    <View className="px-4">
                        <Text className="text-xs uppercase font-rubic-medium tracking-wide text-gray-400">Price</Text>
                        <Text
                            className="text-xl text-blue-500 font-rubic-semibold">${propertyData?.property?.price}</Text>
                    </View>
                    <TouchableOpacity className="p-4 bg-primary-300 w-[60%] rounded-full">
                        <Text className="text-center text-white font-bold"> Booking Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PropertyDetails;
