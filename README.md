# typeMonkey.js 

## Demo 

![文字动画](https://wx1.sinaimg.cn/mw690/4d227521ly1fzda7zr393g204607kao9.gif)  

[在线预览：Demo](https://nostarsnow.github.io/typeMonkey.js/dist/) 

[图文配乐版 - 通过mp3音乐文件和lrc歌词文件](https://nostarsnow.github.io/typeMonkey.js/dist/music/) 

[歌曲配歌词配动画版 - 情人节给女朋友的礼物](https://nostarsnow.github.io/typeMonkey.js/dist/loving/) 


[介绍](https://nostarsnow.github.io/2019/01/20/typemonkey/) 


## 起步

```bash
# 开发模式。使用gulp。源文件位于/src目录下
npm run dev

# 打包模式。打包后文件位于/dist目录下
npm run build
```


## 前言 

首先必须声明。我不喜欢抖音。不喜欢快手。 

但这个世界不是你不喜欢就能改变的。所以我偶尔看看土味。 

抖音快手中有一种视频。人声在念笑话或者鸡汤。视频里会跟随跳动出现一句一句话。如果你玩肯定见到过。 

我查了一下。最初是用AE的typeMonkey制作的。后来字说APP做了个易用版。都挺不错的。

于是。机缘巧合之下。我也搜了一下好像没有web端实现的。那么。我来试试。 

## 制作 

### 构思 

说起来产生这个想法已经很久了。我都忘记是从什么时候开始的。大概是发现身边的人都盯着抖音开始的吧。 

功能大概就是：

* 文字一行一行跟随音频出现在页面水平垂直中心。 
* 每行文字宽度始终固定为一个长度。超出缩小。不够则放大。过程中有动画。 
* 每行文字出现也有或没有动画。
* 段落与段落之间切换会有翻转动画。
* 之后的段落中每行出现的时候。之前的所有段落所有行也会随之放大缩小上下移动
* 文字会有特定的颜色。
* 等等。。。

### 简易版

要说其中的最难点。就是整体放大缩小/段落翻转引发整体翻转/在前两者的情况下当前行居中的问题。

> 整体放大缩小：代表放大缩小的设置需要配置给所有段落外层的父级。 

> 段落翻转引发整体翻转：代表翻转也必须配置给所有段落外层的父级。但翻转时候的中心点origin需要根据具体内容来设置。向左翻转时候中心点是最后一行文字的左下角。向右翻转则是最后一行文字的右下角。注意：是文字的左/右下角。 

> 上前两者情况下当前行居中。就是计算呗。。。

### music版

通过lrc中的时间戳来控制typeMonkey的每一行出现






### Remotion重构

项目已引入 [Remotion](https://www.remotion.dev/) 用于视频渲染，原有的 typeMonkey 字幕特效在 `src/remotion` 中通过 React 组件封装。

```bash
# 预览视频
npm run preview

# 导出视频
npm run render TypeMonkey out.mp4
```
