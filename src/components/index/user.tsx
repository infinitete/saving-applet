import { View, Image, Input, Button, BaseEventOrig } from "@tarojs/components";
import React from "react";

const Home: React.FC = () => {
  const [avatar, setAvatar] = React.useState("");

  const getAvatar = React.useCallback(
    (e: BaseEventOrig<{ avatarUrl: string }>) => {
      setAvatar(e.detail.avatarUrl);
    },
    [setAvatar],
  );

  return (
    <View className="width-100vw">
      <View className="user-main-card">
        <View className="main">
          <View className="avatar">
            <Button
              openType="chooseAvatar"
              onChooseAvatar={getAvatar}
              className="avatar"
              disabled={avatar.length > 0}
              style={{ padding: 0, margin: 0 }}
            >
              <Image className="avatar" src={avatar} />
            </Button>
          </View>
          <View className="text">
            <Input
              defaultValue="兽人永不为奴"
              placeholder="兽人永不为奴"
              type="nickname"
              style={{ width: "100px", textAlign: "center" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
