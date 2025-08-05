# 引入矢量图标库 {#import-icon-library}

在小程序中引入阿里云 [iconfont](https://www.iconfont.cn/) 矢量图标库。

## 生成 CSS 代码 {#generate-css-code}

1. 挑选图标
   [打开 iconfont](https://www.iconfont.cn/)，使用中文搜索需要的图标，比如：`安全`、`密码`、`提示` 等。

2. 将选中的图标添加到购物车
   选中图标后，点击购物车图标，将图标添加到购物车。

3. 将购物车中的图标添加到新项目
   点击购物车图标，进入购物车页面，点击 `添加到项目` 按钮，将购物车中的图标添加到当前项目。

4. 添加 base64 字体格式
   点击项目设置，进入项目设置页面，勾选 `base64` 选项。

5. 生成 CSS 代码
   选择 `Font class` 选项，点击 `生成 CSS` 按钮，生成 CSS 代码。

## 引入 CSS 代码 {#import-css-code}

将生成的 CSS 代码添加到项目中，即可在小程序中使用图标。

1.  写入 CSS 代码

    在项目根目录下的 `/static/fonts/` 中新建一个 **`.wxss`** 的样式文件，比如 `iconfont.wxss`，将生成的 CSS 代码写入该文件中。

    ```css
    @font-face {
      font-family: "iconfont"; /* Project id 4992267 */
      src: url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAASMAAsAAAAACOQAAAQ/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDHAqFGIRZATYCJAMQCwoABCAFhGcHPhvXB1GU7k2H7GeCMe6ghlOHQjQX245BnZwSQQQR9IHe5Dfx0Lcfvzs7+0UkubbveMKrWukkaw1S5BDFMvnNu1/bnSde93GWVAT2T3x/WBN7nW6RSKLSIDSxZI1GhHl17RNcvVdMJAVvET2bmER8VGkfG6wMC3ztWl7zdAeX49qawNkDQHNMDR/so2nZA7WnjYUJTWFqGLu8yGMEOm2xY14IiWbB3OscMgbz2HRsEOXH65JOC/A5jVrBCO3y1qZzq/hAmPKu3OK99/n4Zyf4FC1J3+T6U986uP3S/2WiBgH5jYMRYP+CFiTWFqaL59WWh1hBZA1LZ1GI7QDAr7Ur/Fxt85dNg3ibkrQbf3kUIYlWuqQbUfZU6cC4FkLhpwIh+NPXSEiqg9vRha9ArAHF9DBXSi3Lqsq6OnLy6spQXK1ImjoFAsgMLkhIkXMqS1CQsITLkjkxkxKczk1dlJSmVCGH7bAkwULTJBsS9DNNvj6+AhA3QoLR6dRbCWhrs5Wyp7ktJmJv2B22azyjOu/KxDI40/Fa/GSUdBC2Y3QdQSfQMPNy8tnkAlLGZihVnEMskUpJbWTS66vJEoVv0EThTBcnwaJpaGomWY6KwFMqCitWoaQ6z8iUQKfUOXFGnqTgHD57TilomstbVE3iLkpKus4va7CXBPd+dJd1cB0MJC3/yB4NYRHTUX6bKp2HAE8GlzGQ/ZFZBIPBOo4yEhNix/LLYuY6YU1hOgnhOkVkrLlLNvnH/cdijfYi3O0qiNsm011PVFAB/c3/+kkq1XRefkjNPvJKK2JtNKeBGtL+mppja094ICnlfgXXaF9IfWw5coaOQ6TfT64WpaVArH7k52H3uOgZnDLQ4HV2usHBh4tBjWidwYNroJf9/LIkLzoZELEk5XuTiZhh67xRWXJf0J7rQZWZ+opOl6avv2ImZuLKdf1rJmPkcy549cbN27u65+KJ/z0f1z/+vP30qYvBiKLIb1yTWw4EUwDNbYYKKgDNWaL0l2Ps/MrSv6afTzIiX+7Jev3ndz2wqu83kz+eq2FX0EwK3jq3MecfkaY3RK2Kl1qLBBbvv7Ncx+FCBZ2Gnp8iwaD3IWRDOERoT3AZFG2mILWbIVTKCrTosgOt2h1Cp1W+xV2GTLFE7cCCAwCh3xUUvT5D6ndHqJQHaDHqG1r1+4NOd0N6vS4LsRaIUYugddjegb21yZgy5cTDm0adjWEL5wXzCNM96IcqG7t0PIDGCPcxgd7sqAmhIIUnI+inh6HhcAKneNJHa0TeJWRqVtgWFj1EvjYZAQ8MaSGQdVDbDqhnzcQY5aCT5O+lIR0bhlpwQ0LehNGYjfBDKnLKBoSAZNyo7EI60zZ1qBEEhQdRsIkRyK+YkKERmYCmxb36kDWEXLdDaMpMgdCophL59LLR7W2CTvpaNUpk1GhR35SMWtycytmGlc6uL5nSAAAA")
          format("woff2"), url("//at.alicdn.com/t/c/font_4992267_ji416f9700o.woff?t=1754391150203")
          format("woff"),
        url("//at.alicdn.com/t/c/font_4992267_ji416f9700o.ttf?t=1754391150203")
          format("truetype");
    }

    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .icon-mima:before {
      content: "\e62f";
    }

    .icon-anquan:before {
      content: "\e621";
    }

    .icon-tips:before {
      content: "\e96a";
    }
    ```

2.  引入 CSS 代码

    在项目根目录下的 `app.wxss` 中引入 `iconfont.wxss` 文件，代码如下：

    ```css
    @import "/static/fonts/iconfont.wxss";
    ```

3.  在页面 `.wxml` 中使用图标

    ```html
    <view class="tips">
      <text
        ><text class="iconfont icon-tips"></text> 欢迎使用我们的系统，谢谢
        🙏</text
      >
    </view>
    ```
