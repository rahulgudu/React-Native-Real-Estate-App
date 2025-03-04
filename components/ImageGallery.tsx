import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Modal,
    ScrollView,
} from "react-native";
import React, {useState} from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import NoResults from "@/components/NoResults";

// const imagesList = [
//     {
//         uri: images.japan,
//     },
//     {
//         uri: images.newYork,
//     },
//     {
//         uri: images.japan,
//         more: true,
//     },
//     {
//         uri: images.newYork,
//     },
//     {
//         uri: images.japan,
//     },
//     {
//         uri: images.newYork,
//     },
// ];
const ImageGallery = ({gallery}: { gallery: any }) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <>
            {
                gallery.length === 0 || !gallery.length || false ?
                    (<View className="flex-col border-t border-gray-200 mt-6 pt-4">
                        <Text className="text-lg font-rubic-bold text-black">ImageGallery</Text>
                            <View className="w-32 h-20 mx-auto -mt-32 mb-36">
                                <NoResults/>
                            </View>
                    </View>) :
                    (<View className="border-t border-gray-200 mt-6 pt-4">
                        <Text className="text-lg font-rubic-bold text-black">ImageGallery</Text>
                        <View className="flex-row justify-between mt-3">
                            {gallery?.slice(0, 3).map((image: any, index: number) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => gallery.length > 3 && setShowModal(true)}
                                    className="w-1/3 px-1 relative">
                                    <Image
                                        source={{uri: image.image}}
                                        resizeMode="cover"
                                        className="w-full h-28 rounded-lg"
                                    />
                                    {gallery.length > 3 && index === 2 && (
                                        <View
                                            className="absolute w-full left-1 inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                                            <Text className="text-white text-lg font-rubic-bold">
                                                {gallery.length}
                                            </Text>
                                        </View>
                                    )}
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Modal to display */}
                        <Modal visible={showModal} animationType="fade" transparent={true}>
                            <View className="flex-1 bg-black/50 justify-center">
                                <TouchableOpacity
                                    className="absolute top-5 left-8 z-10"
                                    onPress={() => setShowModal(false)}>
                                    <Image
                                        source={icons.backArrow}
                                        className="size-8"
                                        tintColor={"white"}
                                    />
                                </TouchableOpacity>
                                <ScrollView className="p-5">
                                    {gallery?.map((image: any, index: number) => (
                                        <Image
                                            key={index}
                                            source={{uri: image.image}}
                                            className="w-full h-64 mb-3 rounded-lg"
                                        />
                                    ))}
                                </ScrollView>
                            </View>
                        </Modal>
                    </View>)
            }

        </>

    );
};

export default ImageGallery;
