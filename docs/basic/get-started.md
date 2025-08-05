# 快速上手 {#get-started}

在本章节中，我们将介绍如何快速上手微信小程序开发。

## 精简项目 {#get-started-simplify-project}

首先，我们将无关紧要的文件删除，只保留必要的文件。

如下图所示

```text
├── app.js
├── app.json
├── app.wxss
└── pages
    └── index
        ├── index.js
        ├── index.json
        ├── index.wxml
        └── index.wxss
```

:::code-group

```json [app.json]
{
  "entryPagePath": "pages/index/index",
  "pages": ["pages/index/index"],
  "window": {
    "navigationBarTitleText": "微信小程序演示", # 页面名字 //[!code ++]
    "navigationBarBackgroundColor": "#0000ff", # 顶部颜色 //[!code ++]
    "enablePullDownRefresh": true, # 是否支持下拉刷新 //[!code ++]
    "backgroundColor": "#eaeaea", # 背景颜色 //[!code ++]
    "backgroundTextStyle": "light" # 背景文字颜色 //[!code ++]
  },
  "style": "v2",
  "componentFramework": "glass-easel",
  "sitemapLocation": "sitemap.json",
  "lazyCodeLoading": "requiredComponents"
}
```

```js [app.js]
// app.js
App({});
```

```json [pages/index/index.json]
{
  "usingComponents": {},
  "navigationBarTitleText": "首页", # 页面名字 //[!code ++]
  "navigationBarBackgroundColor": "#000000", # 顶部颜色 //[!code ++]
  "enablePullDownRefresh": true, # 是否支持下拉刷新 //[!code ++]
  "backgroundTextStyle": "light" # 背景文字颜色 //[!code ++]
}
```

```js [pages/index/index.js]
Page({
  //
});
```

```html [pages/index.index.wxml]
<!--index.wxml-->
<view>
  <text>Hello World</text>
</view>
```

:::

## tabbar 配置 {#tabbar-configuration}

`tabbar` 用于底部或顶部的 tab 导航页。

在项目根目录下的全局配置文件 `app.json` 中配置 `tabbar`。

```json
{
  "entryPagePath": "pages/index/index",
  "pages": [
    "pages/index/index",
    "pages/my/my" //[!code ++]
  ],
  // ...
  "tabBar": {
    //[!code ++]
    "selectedColor": "#000000", //[!code ++]
    "position": "bottom", //[!code ++]
    "list": [
      //[!code ++]
      {
        //[!code ++]
        "pagePath": "pages/index/index", //[!code ++]
        "text": "首页", //[!code ++]
        "iconPath": "/images/tabbar/home.png", //[!code ++]
        "selectedIconPath": "/images/tabbar/home-selected.png" //[!code ++]
      }, //[!code ++]
      {
        //[!code ++]
        "pagePath": "pages/my/my", //[!code ++]
        "text": "个人中心", //[!code ++]
        "iconPath": "/images/tabbar/my.png", //[!code ++]
        "selectedIconPath": "/images/tabbar/my-selected.png" //[!code ++]
      } //[!code ++]
    ] //[!code ++]
  } //[!code ++]
}
```

并将图片 `home.png`、`home-selected.png`、`my.png`、`my-selected.png` 放入项目根目录下的 `images/tabbar` 目录下。

::: tip 温馨提示
`pages/my/my` 页面在 `app.json`中配置后会自动生成。
:::

## 常用组件 {#common-components}

对比 html 中的标签，包括：`div`、`a`、`span`、`img`等，小程序中对应的叫做[组件](https://developers.weixin.qq.com/miniprogram/dev/component/)。

比如对应关系：

- `div` 对应小程序中的 [`view` 组件](https://developers.weixin.qq.com/miniprogram/dev/component/view.html)
- `a` 对应小程序中的 [`navigator` 组件](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)
- `span` 对应小程序中的 [`text` 组件](https://developers.weixin.qq.com/miniprogram/dev/component/text.html)
- `img` 对应小程序中的 [`image` 组件](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)

### view 组件 {#view-component}

小程序中的 `view` 组件用于创建一个块级元素，用于包裹其他组件。

```html
<view>
  <text>Hello World</text>
</view>
```

官方文档：https://developers.weixin.qq.com/miniprogram/dev/component/view.html

### navigator 组件 {#navigator-component}

小程序中的 `navigator` 组件用于创建一个链接，用于跳转到其他页面。

```html
<navigator url="/pages/my/my">
  <text>跳转到个人中心</text>
</navigator>
```

官方文档：https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html

### text 组件 {#text-component}

小程序中的 `text` 组件用于创建一个文本元素，用于显示文本内容。

```html
<text>Hello World</text>
```

官方文档：https://developers.weixin.qq.com/miniprogram/dev/component/text.html

### image 组件 {#image-component}

小程序中的 `image` 组件用于创建一个图片元素，用于显示图片内容。

```html
<image src="/images/avatar.png"></image>
```

### icon 组件 {#icon-component}

```html
<icon type="success" color="blue" size="64" />
```

`type` 可以取下面的列表值：`success`, `success_no_circle`, `info`, `warn`, `waiting`, `cancel`, `download`, `search`, `clear`。

官方文档：https://developers.weixin.qq.com/miniprogram/dev/component/icon.html

## 尺寸单位 `rpx` {#size-unit}

在 web 开发中，尺寸单位一般采用 `px` 像素值，在小程序开发中，一般采用 `rpx` 单位，`rpx` 单位是小程序开发中常用的尺寸单位，它是相对于屏幕宽度的比例单位。

```html
<view style="width: 750rpx; height: 300rpx; background-color: azure;"></view>
```

:::tip 注意
宽度 `750rpx` 则占据屏幕宽度的 100%。
:::

## 样式 {#style}

微信小程序中包含全局样式 `app.wxss` 、局部页面样式 `page.wxss`和局部组件样式 `component.wxss`。

::: tip 注意
样式一般写在 `wxss` 文件中，一般不直接写在 `style` 中。
:::

### 全局样式 {#app-wxss}

全局样式 `app.wxss` 定义了全局的样式，所有页面都生效。

:::code-group

```css
/* 使用类选择器选择组件 */
.container {
  width: 750rpx;
  height: 350rpx;
  background-color: azure;
}
```

```html
<view class="container"></view>
```

:::

### 局部页面样式 {#page-wxss}

局部页面样式 `page.wxss` 定义了当前页面的样式，只在当前页面生效。
