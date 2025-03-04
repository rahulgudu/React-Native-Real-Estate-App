import {Image, Text, View} from 'react-native';
import images from "@/constants/images";
import icons from "@/constants/icons";

const ReviewCard = ({item}: {item: any}) => {

    return (
        <View className="bg-white p-4 rounded-lg shadow-md mb-12">
            {/*User Info*/}
            <View className="flex-row items-center mb-2">
                <Image source={{uri: item?.avatar}} className="w-10 h-10 rounded-full" />
                <Text className="font-rubic-bold text-black ml-3">{item?.name}</Text>
            </View>

            {/*Review Text*/}
            <Text className="text-gray-700 mb-3">
                {item?.review}
            </Text>

            {/*Likes & Date*/}
            <View className="flex flex-row justify-between items-center">
                <View className="flex-row items-center">
                    <Image source={icons.heart} className="size-6" tintColor="black"/>
                    <Text className="ml-2 text-black">928 Likes</Text>
                </View>
                <Text className={"text-gray-400 text-xs"}>3/3/2025</Text>
            </View>
        </View>
    )
}
export default ReviewCard;