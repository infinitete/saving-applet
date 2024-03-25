import React, { ReactElement } from "react";
import { View } from "@tarojs/components";

type IProps = {
  children?: ReactElement;
};

const StatusBar: React.FC<IProps> = (props: IProps) => {
  return <View>{props.children}</View>;
};

export default StatusBar;
