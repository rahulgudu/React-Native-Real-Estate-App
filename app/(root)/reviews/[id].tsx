import {View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator} from 'react-native'
import React, {useEffect} from 'react'
import images from "@/constants/images";
import icons from "@/constants/icons";
import ReviewCard from "@/components/ReviewCard";
import {router, useLocalSearchParams, useRouter} from "expo-router";
import {useAppwrite} from "@/libs/useAppwrite";
import {getPropertiesById} from "@/libs/appwrite";

const reviews = [
    {
        name: "Sushant Bishoi",
        image: images.avatar,
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    }, {
        name: "Sushant Bishoi",
        image: images.avatar,
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    }, {
        name: "Sushant Bishoi",
        image: images.avatar,
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    },
];
const Reviews = () => {
    const params = useLocalSearchParams()
    console.log(params)
    const {data: propertyData, loading} = useAppwrite({
        fn: getPropertiesById,
        params: {
            id: params.id,
        }
    })

    return (
        <View className="p-4 bg-white flex-1">
            {/*Header*/}
            <View className="flex-row items-center mb-4">
                <TouchableOpacity className="mr-4" onPress={() => router.back()}>
                    <Image source={icons.backArrow} className="size-6" tintColor="black"/>
                </TouchableOpacity>
                <Text className="font-rubic-bold text-xl text-black">All Reviews</Text>
            </View>

            {/*Reviews List*/}
            {loading ? <ActivityIndicator size="large" color="black"/> : <FlatList
                data={propertyData?.reviews}
                renderItem={({item}) => <ReviewCard item={item}/>}

            />}

        </View>
    )
}

export default Reviews