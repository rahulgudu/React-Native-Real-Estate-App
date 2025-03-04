import { View, Text, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import icons from "@/constants/icons";
const LocationMap = ({ address }: { address: string }) => {
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    if (!address) {
      return;
    }

    console.log(process.env.EXPO_PUBLIC_MAP_KEY);

    const fetchCoordinates = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.error("Permission to access location was denied");
          return;
        }

        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=${process.env.EXPO_PUBLIC_MAP_KEY}`
        );

        const data = await response.json();

        if (data.results.length > 0) {
          setCoordinates(data.results[0].geometry.location);
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, [address]);

  console.log(coordinates);

  return (
    <View className="border-t border-gray-200 mt-6 pt-4">
      <Text className="text-lg font-rubic-bold text-black">LocationMap</Text>
      <View className="flex-row itmes-center">
        <Image source={icons.location} className="size-5 mt-1" />
        <Text className="text-gray-600 mt-1"> {address}</Text>
      </View>

      <View className="mt-2">
        {coordinates ? (
          <MapView
            style={{ width: "100%", height: 250, borderRadius: "50px" }}
            initialRegion={{
              latitude: coordinates.lat,
              longitude: coordinates.lng,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}>
            <Marker
              coordinate={{
                latitude: coordinates.lat,
                longitude: coordinates.lng,
              }}
            />
          </MapView>
        ) : (
          <ActivityIndicator className="mt-4" size="small" color="blue" />
        )}
      </View>
    </View>
  );
};

export default LocationMap;
