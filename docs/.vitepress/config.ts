import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  base: "/wechat-miniprogram-study/",
  title: "微信小程序学习",
  description: "微信小程序学习，记录一些工作中常用的代码片段。",
  lastUpdated: true,
  themeConfig: {
    logo: "",
    siteTitle: "微信小程序学习",
    outline: {
      label: "章节导航",
      level: "deep",
    },
    lastUpdated: {
      text: "最后更新时间",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    editLink: {
      pattern:
        "https://github.com/curder/wechat-miniprogram-study/edit/master/docs/:path",
      text: "编辑它",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/curder/wechat-miniprogram-study",
      },
    ],
    nav: nav(),
    sidebar: {
      "/basic": sidebarBasic(),
    },
  },
});

function nav() {
  return [
    {
      text: "基础",
      link: "/basic/overview",
    },
  ];
}

function sidebarBasic() {
  return [
    { text: "概述", link: "/basic/overview" },
    { text: "快速上手", link: "/basic/get-started" },
  ];
}
