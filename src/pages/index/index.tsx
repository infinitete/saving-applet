import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { AtCalendar } from "taro-ui";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <AtCalendar marks={[{ value: "2024/04/01" }]} />
    </View>
  );
}
