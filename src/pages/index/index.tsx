import { View } from "@tarojs/components";
import Taro, { useLaunch } from "@tarojs/taro";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatusBarComp from "../../components/statusbar";
import HomePageStatusBar from "../../components/statusbar/home";
import UserPageStatusBar from "../../components/statusbar/user";
import TabbarComp from "../../components/tabbar/index";
import { SET_VIEW_PORT } from "../../constants/viewport";
import { ReducersType } from "../../reducers";
import "./index.scss";
import { tabbarItems } from "./tabs";

const Index: React.FC = () => {
  const { ViewPort } = useSelector((s: ReducersType) => s);
  const dispatch = useDispatch();
  const { statusBarHeight } = ViewPort;

  // 自一定tabbar，根据也看进行
  // 定义的索引一定与tabbtar.ts中的页面索引对应
  // 页面不需要单独维护自己的tabbar
  const statusBarComps = React.useMemo(() => {
    const _style = {
      height: `${ViewPort.menuButtonHeight + 8}px`,
      paddingTop: `${statusBarHeight}px`,
    };
    return [
      <HomePageStatusBar key="home" style={_style} />,
      <React.Fragment key="empty" />,
      <UserPageStatusBar key="user" style={_style} />,
    ];
  }, [ViewPort]);

  // tabbar激活的索引和对应的组件
  const [tabIndex, updateTabIndex] = React.useState(0);

  const MainComp = tabbarItems[tabIndex].comp!!;

  // tabbar点击时的反应
  const onTabbarItemClick = React.useCallback(
    (index: number) => {
      if (index === tabIndex) {
        return;
      }
      let nextComp = tabbarItems.find((item) => item.index === index);
      if (nextComp == undefined || nextComp.comp == undefined) {
        return;
      }

      // 如果页面需要登录
      /* if (nextComp.mustLogin && LoginInfo.User === null) {
       *   Taro.navigateTo({
       *     url: "/pages/login/index",
       *   });
       *   return;
       * }
       */
      updateTabIndex(index);
      Taro.setNavigationBarTitle({
        title: nextComp.title!!,
      });
    },
    [tabIndex],
  );

  useLaunch(() => {
    if (Taro.canIUse("getUpdateManager")) {
      const updateManager = Taro.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        // console.log("onCheckForUpdate====", res);
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          // console.log("res.hasUpdate====");
          updateManager.onUpdateReady(function () {
            Taro.showModal({
              title: "更新提示",
              content: "新版本已经准备好，是否重启应用？",
              success: function (resolve) {
                if (resolve.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate();
                }
              },
            });
          });
          updateManager.onUpdateFailed(function () {
            // 新的版本下载失败
            Taro.showModal({
              title: "已经有新版本了哟~",
              content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~",
            });
          });
        }
      });
    }
  });

  // 获取navbar高度
  React.useEffect(() => {
    if (ViewPort.statusBarHeight === 0) {
      let h0 = Taro.getSystemInfoSync().statusBarHeight;
      let h1 = Taro.getMenuButtonBoundingClientRect();
      dispatch({
        type: SET_VIEW_PORT,
        viewport: {
          statusBarHeight: h0,
          menuButtonHeight: h1.height,
          menuButtonTop: h1.top,
        },
      });
    }
  }, []);

  const statusBar = statusBarComps[tabIndex];

  return (
    <View className="app-home">
      <View className="app-home-content">
        <View>
          <StatusBarComp>{statusBar}</StatusBarComp>
        </View>
        <MainComp />
      </View>
      <View className="app-home-footer">
        <TabbarComp
          active={tabIndex}
          items={tabbarItems}
          onItemClick={onTabbarItemClick}
        />
      </View>
    </View>
  );
};

export default Index;
