import React from "react";
import { View, Text } from "@tarojs/components";

const HomepageStatusBar: React.FC<{ style: React.CSSProperties }> = (props) => {
  return (
    <View
      className="flex flex-center flex-row background-color-1e90ff"
      {...props}
    >
      <View className="flex flex-1 flex-center">
        <View className="font-size-34px">
          <Text>首页</Text>
        </View>
      </View>
    </View>
  );
};

export default HomepageStatusBar;
