import { View, Text } from "@tarojs/components";
import React from "react";
import { AtCalendar } from "taro-ui";

const Home: React.FC = () => {
  return (
    <View className="width-100vw">
      <View className="home-total-card">
        <View className="summary">
          <Text className="digit">19283</Text>
        </View>
      </View>
      <View className="width-100vw height-32px" />
      <View>
        <AtCalendar />
      </View>
    </View>
  );
};

export default Home;
