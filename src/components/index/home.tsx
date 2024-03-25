import { View, Image, Text } from "@tarojs/components";
import InComeOneIcon from "../../assets/icons/income-one.svg";
import CycleIcon from "../../assets/icons/cycle.svg";
import TargetIcon from "../../assets/icons/target.svg";
import React from "react";
import { AtCalendar, AtDivider, AtProgress } from "taro-ui";

const Home: React.FC = () => {
  return (
    <View className="width-100vw">
      <View className="home-total-card">
        <View className="summary">
          <Image className="icon" src={InComeOneIcon} />
          <Text className="digit">19283</Text>
        </View>

        <View className="continuous">
          <View className="flex-1" />
          <View className="days">
            <View className="texts">
              <Text className="sub">天数</Text>
              <Text className="main">321</Text>
            </View>
            <View>
              <Image className="icon" src={CycleIcon} />
            </View>
          </View>
          <View className="milestone">
            <View>
              <Image className="icon" src={TargetIcon} />
            </View>
            <View className="texts">
              <Text className="main">12</Text>
              <Text className="sub">目标</Text>
            </View>
          </View>
          <View className="flex-1" />
        </View>
      </View>
      <View className="width-100vw height-32px" />
      <View>
        <AtCalendar />
      </View>
      <View className="targets">
        <View className="target">
          <View className="title">
            <Image className="icon" src={TargetIcon} />
            <Text className="text">买车</Text>
          </View>
          <AtProgress status="progress" percent={50} />
        </View>

        <View className="target">
          <View className="title">
            <Image className="icon" src={TargetIcon} />
            <Text className="text">买房</Text>
          </View>
          <AtProgress status="success" percent={100} />
        </View>
      </View>
    </View>
  );
};

export default Home;
