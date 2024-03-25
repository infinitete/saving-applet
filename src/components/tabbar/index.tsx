import React from "react";
import { View, Text, Image } from "@tarojs/components";

type tabbarItemType = {
  index: number;
  icon: {
    default: string;
    active: string;
  };
  className: string;
  title?: string;
  comp?: React.FC;
  iconClass?: string;
};

type IProps = {
  items: tabbarItemType[];
  onItemClick: React.Dispatch<React.SetStateAction<number>>;
  active: number;
};

const Tabbar: React.FC<IProps> = (props: IProps) => {
  const tabbarItemRedered = props.items.map((item: tabbarItemType) => {
    const active = props.active === item.index;
    const src = active ? item.icon.active : item.icon.default;

    return (
      <View
        key={item.index}
        className={item.className}
        onClick={() => {
          props.onItemClick(item.index);
        }}
      >
        <View className="relative margin-bottom-4px margin-top-12px">
          <Image
            src={src}
            className={`${item.iconClass} width-46px height-46px`}
            style="bottom: 24rpx;left: -31rpx"
          />
        </View>
        {item.title ? (
          <View
            className={`font-size-24px ${
              active ? "font-color-active" : "font-color-default"
            }`}
          >
            <Text>{item.title}</Text>
          </View>
        ) : (
          <React.Fragment />
        )}
      </View>
    );
  });

  return (
    <View className="height-110px width-100vw bg-color-fff flex flex-row tabbar-box-shadow">
      {tabbarItemRedered}
    </View>
  );
};

export default Tabbar;
