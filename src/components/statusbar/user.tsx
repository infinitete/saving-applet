import React from "react";
import { View, Text } from "@tarojs/components";

const UserPageStatusBar: React.FC<{ style: React.CSSProperties }> = (props) => {
  return (
    <View className="flex flex-center font-color-ffffff" {...props}>
      <Text>我的</Text>
    </View>
  );
};

export default UserPageStatusBar;
