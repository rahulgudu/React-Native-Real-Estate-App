import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import ReviewCard from "@/components/ReviewCard";
import {Link, router, useNavigation, useRouter} from "expo-router";

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

export default function ReviewSection({id, reviews}: { id: string, reviews: any }) {

    const handlePress = () => {

        // @ts-ignore
        router.push(`/reviews/${id}`);
    };
    return (
        <View className="border-t border-gray-200 mt-6 pt-4">
            {/*Header*/}
            <View className="flex-row justify-between  items-center mb-4">
                <View className="flex-row items-center">
                    <Image source={icons.star} className="size-7" tintColor={"orange"}/>
                    <Text>{reviews[0]?.rating || 0} ({reviews?.length || 0} ratings)</Text>
                </View>
                {
                    reviews.length !== 0 && <TouchableOpacity onPress={handlePress}>
                        <Text className="text-primary-300 font-rubic-semibold">See All</Text>
                    </TouchableOpacity>
                }
            </View>

            {/*Reviews List*/}
            {
                reviews.length === 0 ? <Text>No Reviews</Text> :
                    <FlatList
                        data={reviews.slice(0, 1)}
                        renderItem={({item}) => <ReviewCard item={item}/>}
                        keyExtractor={(item) => item.$id}
                    />
            }
        </View>
    );
}
