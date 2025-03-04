import images from "@/constants/images";
import React from "react";
import {View, Image, Dimensions, ActivityIndicator} from "react-native";
import Swiper from "react-native-swiper";
import NoResults from "@/components/NoResults";

const {width} = Dimensions.get("window");

const imageList = [images.newYork, images.japan, images.newYork, images.japan];

const ImageSlider = ({gallery, loading}: { gallery: any, loading: boolean }) => {
    if (loading) {
        return <ActivityIndicator size="small"/>
    }
    return (
        <>
            {
                gallery?.length === 0 || !gallery?.length || false ?
                    (<View className="w-52 h-52 mb-12 mx-auto">
                        <NoResults/>
                    </View>)
                    :
                    <View className="h-72 w-full">
                        <Swiper
                            loop
                            autoplay
                            showsButtons={false}
                            dot={<View className="w-2 h-2 bg-gray-400 rounded-full mx-1"/>}
                            activeDot={<View className="w-3 h-3 bg-blue-600 rounded-full mx-1"/>}
                        >
                            {gallery?.map((item: any, index: number) => (
                                <View key={index} className="w-full h-72">
                                    <Image
                                        source={{uri: item.image}}
                                        className="w-full h-72 object-cover"
                                    />
                                </View>))}
                        </Swiper>
                    </View>
            }
        </>


    )
        ;
};

export default ImageSlider;
