export default defineAppConfig({
  pages: ["pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "首页",
    navigationBarTextStyle: "black",
  },
  lazyCodeLoading: "requiredComponents",
});
