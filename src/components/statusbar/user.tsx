import React from "react";
import { View, Text } from "@tarojs/components";

const UserPageStatusBar: React.FC<{ style: React.CSSProperties }> = (props) => {
  return (
    <View className="flex flex-center status-bar-user" {...props}>
      <Text>我的</Text>
    </View>
  );
};

export default UserPageStatusBar;
