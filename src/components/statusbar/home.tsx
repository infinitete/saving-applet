import React from "react";
import { View, Text } from "@tarojs/components";

const HomepageStatusBar: React.FC<{ style: React.CSSProperties }> = (props) => {
  return (
    <View className="status-bar-home" {...props}>
      <View className="flex flex-1 flex-center">
        <View className="font-size-34px">
          <Text>蜜罐</Text>
        </View>
      </View>
    </View>
  );
};

export default HomepageStatusBar;
