---
title: PreAngel公开课：60分钟入门神经网络 - 智能革命即将到来
author: huan-li
categories: tutorial
tags:
  - ai
  - home
  - entrepreneur
  - talk
  - featured
image: assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-01.jpg
---
<!-- markdownlint-disable MD052 -->

2017年，人工智能开始不断的从我们想象中的遥远世界里，迅速的融入到我们生活和工作中，成为了一种新的生活方式。技术天翻地覆的变革不断的跳到我们面前，投资人和创业者们该如何抓住未来最大的人工智能机会？

> 注：课程完整视频共80分钟，见文末。

我认为，为了拥抱人工智能，首先我们需要和AI交朋友，对AI技术进行真正的了解。因为只有真正理解了AI技术，才能理解如何将其融入具体的应用场景中。其次，我们必须聚焦专注的抓住一个痛点，并将其解决到极致。

* 2016年，我开始不再关注移动互联网行业的天使投资，开始深度关注人工智能。我最初阅读了[Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)，然后完成了吴恩达的[Coursera Machine Learning](https://www.coursera.org/learn/machine-learning)课程。接下来，我开始阅读大量论文和代码，并自己动手写了一些GitHub上开源的机器学习项目，如[FaceNet](https://github.com/zixia/node-facenet)。
* 2017年，我定位只投资AI领域，并开始PreAngel投资了5个AI早期项目。11月份，我得到了机器学习[博士入学的Offer](https://weibo.com/1663343825/FwVey3c3k)。

<!--more-->

![Slide Page 2][slide-02]

AI is like Teenage SEX:

> Everyone talks about it,  
> Nobody really knows how to do it,  
> Everyone thinks everyone else is doing it,  
> so everyone claims they are doing it.  

![Slide Page 3][slide-03]

DeepLearning深度学习研究生从不同角度看起来的样子。今天，AI现在正是像乐高积木块一样，每个模块都在专注提供一个基本能力，我们可以用它来搭出飞机、大炮、城市、各种各样的东西。

![Slide Page 4][slide-04]

现在我核心关注的方向是聊天机器人(ChatBot)的AI软件领域。为什么做聊天机器人的软件领域？因为软件的发展和更新速度永远都会比硬件快。我去计划读博的这个方向就是做Chat UI。

一直以来，电脑软件和我们交互的界面，都像是机械开关一样，有一个面板，需要人去用手操作。无论是电脑上的菜单，还是手机APP上的按钮，都像是一个操作台，让我们不断重复着繁琐和死板的点击和输入操作。

为什么会这样？因为过去的电脑没有智能，无法理解人类的直接指令。现在不一样了，现在的人工智能，自然语言理解等能力，已经可以和人类直接进行交流了。未来，我们只需要把我们需求说给电脑听，电脑就可以像你的助理一样帮你完成任务，比如订票。

订票是我最喜欢的例子，也是很多AI平台标准的例子。现在大家通过携程APP订票，需要点很多很多下。如果你有一个助理呢？那么恭喜你，你只需要在微信上跟他说一句我明天要去上海，需要下午3点到虹桥，请帮我订一下机票，助理就会告诉你：老板票已经订好了，航班号XY123。

很简单：你一句话过去，那边一句话回来这个任务就完成了，和携程的APP比起来这是一个非常非常质变的，这就是聊天机器人在未来机会，我们叫做ChatUI聊天的界面。你只要跟他说话就好。

![Slide Page 5][slide-05]

除了人工智能，我也喜欢飞滑翔伞，跳SALSA舞，打泰拳，跑酷。

![Slide Page 6][slide-06]

如何深度入门人工智能？我这里要给大家推荐的一个专业课，也是我上的启蒙课。授课老师是参与了Google Brain和百度大脑创始的科学家，斯坦福大学教授Andrew Ng，他也是Coursera的联合创始人。

课程地址：[Coursera Machine Learning](https://www.coursera.org/learn/machine-learning)

![Slide Page 7][slide-07]

接下来的内容，分为两部分：

第一部分，介绍深度神经网络的发展，里面会涉及到一些简单的数学知识，会帮助大家揭开人工智能的面纱。

第二部分，我会给大家分享十几个机器学习能解决问题的例子，希望可以帮助大家打开应用人工智能的脑洞。

![Slide Page 8][slide-08]

人工智能的神经网络，是从人脑里的神经元、神经网络仿生借来的。图中就是人脑的神经元。很多这样的神经元连接在一起，每个神经元都会根据别的神经元兴不兴奋，来决定自己兴奋与否。

机器学习科学家看到后，发现它们很容易通过数学公式模拟：每个神经元的输入就是一堆x1，x2，x3。接下来把它们每个都乘上系数，做成a\*x1 + b\*x2 + c\*x3就得到了输出的值y。最终，这个神经元根据这个输出值y来决定兴不兴奋。

![Slide Page 9][slide-09]

能够模拟一个神经元，就可以模拟多个神经元，进而组成神经网络。上图中，每一个圆圈都是一个神经元。每一个神经元都接收前面神经元的输出，然后计算出自己的输出后，再传递给后面的神经元。

平时我们提起的神经网络，深度学习，就是多层这样神经元的堆叠。粗略地说，几乎所有的神经网络，都是由这样的数学模型所堆叠起来的。

大家无论看到任何复杂的神经网络，不管是做图像的文字的还是声音的，它里面核心的原理都可以粗略的理解为是基于这个结构而构建的。

![Slide Page 10][slide-10]

这里给大家举个例子：最经典的识别物体模型。上面四张图中，分别是行人、车、摩托和卡车。怎么把这些图片到最终识别出来？

我们可以做这样一个神经网络，右侧蓝色框框中，它的输出有四个神经元代表不同的结果。是行人那么第一个神经元就会兴奋，如果第二个神经元兴奋说明看到的是车，第三个神经元兴奋说明看到的是摩托，第四个是卡车。

图片如何输入到神经网络中？我们知道图片由像素组成。上图最左侧蓝色的圈：每一个神经元的输入是蓝色的圈，把像素传给蓝色的圈就可以了，很简单。

那么问题来了：如果图片的分辨率是100乘100的分辨率的话，有多少个像素？10,000个。10,000个像素就意味着我们需要10,000个蓝圈。

而第二列的黄色圆圈神经元，每一个都需要把前面一万个蓝圈的数字乘上系数相加，那么就需要有一万个参数需要存储。如果第二列的黄色圆圈神经元也有一万个的话，那么会有多少个参数呢？

将会有 10,000 x 10,000 = 100,000,000，也就是一亿个。

一亿个已经很大了，但是注意我们是以100x100作为图像分辨率来计算的。如果图片分辨率增加到1,000x1,000，那么一亿将会变为一万亿。

所以通过这种简单的网络，神经元们相加相乘，自助决定性不兴奋，一层层堆叠下来，它就实现了数学上面的非线性拟合，最终达到把图片像素左边输进来，右边对应的四个分类神经元之一，就会最兴奋，比如最兴奋的是第三个摩托。

这时候神经网络就会做出判断：这是一个摩托。

![Slide Page 11][slide-11]

我们通过近代神经网络的发展史，可以看到三次兴起。每一次兴起，就是神经元变得越来越复杂的过程。从一个单独的神经元到两层，然后变三层，最后变了很多很多层。

在Google的ResNet深度网络中，层数达到了惊人的150层。如果按照刚才我们计算的一层有一万亿参数，那么150层就是150万亿。这种海量的数学运算就是过去限制神经网络发展最大的瓶颈。

![Slide Page 12][slide-12]

所以到现在神经网络能够取得巨大的成就，最重要的原因之一就是计算力飞速提升。从最开始的单层神经网络到我们用CPU计算的可以有几层神经网络，到我们现在深度这些网络里面有这种集群或者GPU，深度神经网络的发展离不开硬件运算能力和集群的发展。

![Slide Page 13][slide-13]

什么是人工智能技术？

以前需要人才能干的活，现在可以用机器做了。这种机器的能力，就可以认为是人工智能技术。

![Slide Page 14][slide-14]

大家现在已经了解一些基本神经网络的技术概念了。下面让我们就看一些有趣的例子，他们都是我碰到过的感觉很有趣的解决问题方案。

![Slide Page 15][slide-15]

第一个例子，是我的最爱：电脑写作。它通过深度神经网络来学习人类写出来的文字。

我最喜欢的就是上面这个第一句：“每个人，闭上眼睛的时候，才能真正面对光明”

![Slide Page 16][slide-16]

模拟莎士比亚名著写作。AI写出来的内容，无论是排版，人名的变化，基本语意等都和莎士比亚原著很难区分。

![Slide Page 17][slide-17]

AI能写作，那么能看图说话吗？

* 你给它一张左边的图，它就会告诉你说这是一只黑白猫站在了浴室的洗手池上。
* 你给它右边的图，它就会告诉你说有一个年轻人在玩滑板。

AI是如何做到？它会首先识别出来图片里的物体，然后再根据这些物体去给你整理出来一个描述。

![Slide Page 18][slide-18]

再看有一些挑战的图片。

* 左边这张图，AI会说这是一架飞机停在机场。
* 右边这张图，AI说这是一群人站在沙滩上。

基本上我们不能说AI是错的，因为图片里面的东西大概也是这么个意思，但是同时也看得出来，它还是只能做出非常初级的描述。

![Slide Page 19][slide-19]

能看图说话，那么能不能给出文字描述，让AI把图片画出来呢？

* 画一朵红黄花
* 画一只黄黑鸟

![Slide Page 20][slide-20]

为黑白照片上色。这个效果感觉起来超赞。

![Slide Page 21][slide-21]

更多黑白上色的例子：色彩还原度完美。

有好事之人用这种技术去给这个老黑白电影上色，然后就变成彩色电影了。

![Slide Page 22][slide-22]

AI漫画助手：帮助漫画家将草稿变成成稿。

![Slide Page 23][slide-23]

AI学习玩超级玛丽游戏。

![Slide Page 24][slide-24]

这些早期的80年代的简单游戏，AI从零开始自己学习，通过不断的失败和总结经验，最终能够学习进步到玩到完美。

比如乒乓球游戏，种很简单：上、下，两个很简单的操作。我们把这个游戏的视频图片直接输入到神经网络中，然后让神经网络输出控制操作。

最开始的时候，神经网络不知道该怎么做，所以输出的时候是在乱摁上下。

不停地让神经网络来玩这个游戏。通过大量的玩，最开始的时候不会就瞎玩，但是每一次玩的好了就奖励，让它把刚才的这个行为加强，玩得不好就惩罚，让它把刚才的这个行为减弱。

通过很多次这样的训练之后，这种游戏基本上现在的AI能够玩到完美，就是永远能过关：根据图片中的道路信息，决定球板应该向上走还是向下走。

![Slide Page 25][slide-25]

双足行走的平衡控制，在神经网络发达之前，一度是业界认为非常难以解决的问题。

这里的机器人，随机初始化的神经网络控制全身的肌肉，通过遗传算法(Genetic Algorithem)，对第一次随机造出的无数个AI来，进行优胜劣汰，然后通过交配互换基因，再生出下一代宝宝，重复优胜劣汰和持续繁殖的过程。

到了第900代之后，机器人的双足行走已经和人类无异了。

![Slide Page 26][slide-26]

人工智能对人的语言学习之后，它能够理解一些关系。

* 男人减去男人加上女人是什么？女人。
* 叔叔减去男人加上女人是什么？阿姨。
* 国王减去男人加上女人是什么？王后。

神经网络通过学习人类的文字之后，意识到了男人和女人之间的差别。

![Slide Page 27][slide-27]

* 北京 - 中国 + 俄国 = 莫斯科
* 寿司 - 日本 + 美国 = 披萨
* Windows - Microsoft + Google = Android

机器通过自然语言得到了各种各样的次与此之间向量关系。

![Slide Page 28][slide-28]

* 带着眼镜的男人 - 男人 + 女人 = 带眼镜的女人
* 笑的女人 - 没表情的女人 + 没表情的男人 = 笑的男人

![Slide Page 29][slide-29]

除了加减男人女人以外，我们还可以把图像风格来做加减，叫做风格迁移(Style Transfer)。

这里左边的图是斯坦福的《钟》，下面是梵高的《星月夜》。两个图片相加之后，那么右边我们就会看到神经网络生成的星月夜风格的斯坦福钟楼照片。

![Slide Page 30][slide-30]

网上有很多实现这个功能的软件，甚至有专门的创业项目做这个方向：[那个把照片变名画的Versa又融资 红杉领投3000万元Pre-A轮](https://www.pencilnews.cn/p/15937.html)

这是一个典型的案例：神经网络经过包装之后做成产品，并成功获得了VC的投资。

大家可以想一想，除了风格迁移，其实有很多的点都可以去做的。

![Slide Page 31][slide-31]

我们小时候可能都会有一些记忆：躺在夏天的草地上，看着蓝天白云，总能把天上的云彩都能够想象出来一些自己的样子，比如，像一条龙，像一只兔子。

那么如果一个神经网络看了非常多的我们的图片之后，我们也告诉它是什么给它这样一个蓝天白云的图，它会觉得里面有什么呢？

Google的实验室就做了一个叫做DeepDream的一个神经网络，它就通过学习完的图片，在右边看这个蓝天白云，得到了这样一个结论，他看到了各种各样奇怪的东西，那么究竟是什么呢？我们给它放大一些。

![Slide Page 32][slide-32]

这里有三个放大的例子。

* 左边这个山水里面，AI好像看到了一个庙。
* 中间的一棵树。AI好像看到了一个更热闹的庙。
* 右边的向日葵，AI看到了几只奇怪的鹌鹑

这是神经网络，通过它的知识，感知到的图片中隐藏的物体。

![Slide Page 34][slide-34]

下面这个场景的需求是来自我之前天使过的一个项目叫微差事。

微差事这个APP做的事情，简单来说是帮很多品牌调研公司，把调研任务通过移动互联网发到某一个特定地理位置附近的用户。用户打开APP后可以看到附近的任务，譬如说请你去最近的家乐福超市把所有摆放有宝洁货品的货架都拍好照片上传，每上传一张合格的照片，奖励十块钱。

* 用户很开心：我逛超市的时候我就多赚十块钱吧，相当于打折了。
* 品牌调研公司很开心：这些任务本来是由神秘顾客去做的，品牌调研公司会派很多人出差去做，现在通过这种平台就可以很容易的把任务分下去.

效率提升后，品牌公司可能一夜之间就收到了全国所有家乐福超市的海飞丝的货架照片，这样的话就是数万张货架照片。

与此而来带来的问题：如何统计分析这些货架照片，最终算出有多少瓶海飞丝呢？

![Slide Page 33][slide-33]

以前很高的成本，大家到现场去弄完了，写个报告就结了，现在你能比较低成本的收集到几万张这样的图片怎么办？人工智能可以完美解决这个问题。

解决方案是训练一个识别海飞丝的神经网络。这个网络就是能够寻找图片里面的海飞丝，当然也可以寻找别的东西。

当我们把货架照片拿给神经网络看之后，它就告诉我们，货架上面有多少瓶海飞丝，同时也帮你把这个海飞丝圈出来。训练好的神经网络经过实测效果非常好。

如果是人做，而且成本会更高，更容易犯错。AI比一百个小姑娘还很难管，买几个GPU服务器就跑起来了。

这个神经网络，是我亲自指导的一个从来以前没有做过深度学习神经网络的计算机系的研究生实现的。

![Slide Page 35][slide-35]

最后的例子，大家很熟悉的AlphaGo，战胜了人类棋圣。

AlphaGo出来之后，强AI时代已经降临了的论调就开始不绝于耳。

![Slide Page 36][slide-36]

AlphaGo之后是AlphaGo Zero，大家可能知道，AlphaGo Zero是100比0把AlphaGo给灭了。

AlphaGo Zero最大的特点是从零学起。AlphaGo这个哥哥是看了大量的人类的棋谱才把人类打败了，但是AlphaGo Zero是没有看过人类的棋谱，直接就是从规则学起，自己跟自己玩就把AlphaGo给打败。

AI真的已经像很多人说的那样，已经强大到让人类惊慌吗？

![Slide Page 37][slide-37]

有一部电影，是我少有的喜欢的亲情片，叫做《我是山姆》。

这个电影讲述的就是一个成年人，一个智障，他只有六岁小孩的智商，他每天上班工作就是去咖啡厅把所有咖啡厅里面桌子上面的不整齐的瓶瓶罐罐给摆齐了，如果说缺糖或者缺餐巾纸，就把糖补上把餐巾纸补上，他就做这么一件工作，但是他可以做得很好。

右边的图中，大家可以到很多机械手在联系分拣小东西，这个是Google不知坐落在哪里的实验室，这些机械手它负责每天就在这个盒子里面分拣这些小东西，希望能够把这些东西分解得很好用这样的话可以替代我们人类做很多事，但是实际上一直到现在这种事情机器人还做得很差。

最近两天的日本机器人大会上面展示了一个很牛的机器人，它能干什么？它能把毛巾对折，因为很难，

在今天，很多任务对于我们一个六岁的小朋友能很简单的做到，但是对人工智能来说，大多时候还是很难的。所以，人工智能有它强大的地方，但是局限性很大，这个我们要意识得到。

![Slide Page 38][slide-38]

我最早用电脑的时候1993年，我第一台电脑是一台386：

* 主频是40兆赫兹，现在都是2G赫兹或更多
* 内存是4兆，我家现在的电脑是32GB，
* 网络连接是9.6Kbps，现在带宽基本上都是百兆入户

今天和15年前，整个计算机的能力，各个维度从存储到性能都了一个一万倍的提升，

如果我们现在再类比一下人工智能：今天，无论是图像处理，语义识别，语音转文字，还是波士顿动力的这种能够后空翻的机器人，这些都是今天我们看到的AI的能力。

此时此刻是2017年。我们再假想一下，20年后，这些人工智能的这些能力也有1万倍的提升，他们会达到一个什么样子？

如果大家会感觉到有不可思议的事情发生，那么你就可以理解我为什么对人工智能非常非常兴奋了。因为我相信它对未来的生产力的提升一定会远远超过过去20年里面我们见到最厉害的互联网对人类社会生产力的提升。

如果在20年之后的时代，人工智能改变了世界的话，那么在今天，此时此刻的我们，能不能抓到这个机会？这就需要看我们每一个人每一个创业项目选择方向的时候，能不能抓到一个自己属于自己的人工智能切入点。

![Slide Page 39][slide-39]

有一种观点，说没有数据无法做机器学习。

这种观点我并不认可。因为随着技术的不断进步，我们已经可以使用很少的数据进行机器学习的训练，比如使用迁移学习（Transfer Learning）的技术。

![Slide Page 40][slide-40]

如何借力AI，不错过这次人工智能的浪潮？

让我们看一看：

1. 2000年的时候的QQ的网站：看一下这是多么非常非常烂的简易的网站？
1. 1998年的时候的Google的网站：那个时候Google才只索引了2000万张网页，2000万个网页相对于今天来讲是多么小的一个数字！

新事物刚刚出现的时候，虽然初级，但是成长的力量是巨大的。它们在整个互联网发展的过程中，从新技术刚刚出现，就抓住了这个点，随着行业的爆发，终于成长成为了今天这样的巨头。

![Slide Page 41][slide-41]

对于创业者，我相信如果在今天大家每一个人都能够在自己的领域，通过了解人工智能，进而找到真正的人工智能里面能够解决自己公司业务里面某一个，哪怕是某一个维度的小点，那么对于未来都会为大家的核心竞争力产生一个质的变化。

AI Revolution，希望大家每个人都参与进来并获得成功。

![Slide Page 42][slide-42]

谢谢！

![Slide Page 43][slide-43]

## 课程视频

<div class="zoom-container" style="
    position: relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
">
  <iframe
    src="https://v.qq.com/txp/iframe/player.html?vid=l0519epyx7l"
    width='560'
    height='315'
    allowfullscreen
    webkitallowfullscreen
    frameborder="0"
    style="
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    "
  ></iframe>
</div>

* Youtube视频地址: [创业者如何拥抱人工智能 - 挑战60分钟入门深度神经网络][huan-ai-talk]
* 腾讯视频地址： [创业者如何拥抱人工智能 - 挑战60分钟入门深度神经网络][huan-ai-talk-tencent]

## 课程幻灯片

<div class="video-container" style="
    position: relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSaHDDULD3Vl4b3wOvgcRDS5cSkDYteRtNKBPePZ7sONmIecxBoLC-ml3CzAi-xA0M1_6OevXCMjGZk/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
"></iframe></div>

* Google Slide: [创业者如何拥抱人工智能 - 挑战60分钟入门深度神经网络][huan-ai-slide]
* PDF: [创业者如何拥抱人工智能 - 挑战60分钟入门深度神经网络][huan-ai-pdf]

### 《立志朋友圈》节目访谈

* [人工智能专家李卓桓：什么是神经网络和机器学习！][lizhi-ximalaya]

[huan-ai-slide]: https://docs.google.com/presentation/d/17bv7w8A-0x6H_aAhlIRj5AEzJByDsaV-jRROOi1g-d4/edit?usp=sharing
[huan-ai-talk]: https://youtu.be/jDvVJtBtjlE
[huan-ai-talk-tencent]: https://v.qq.com/x/page/l0519epyx7l.html
[huan-ai-pdf]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-preangel-entrepreneur-meet-ai.pdf' | relative_url }}

[lizhi-ximalaya]: http://m.ximalaya.com/40080673/sound/60728903

[slide-01]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-01.jpg' | relative_url }}
[slide-02]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-02.jpg' | relative_url }}
[slide-03]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-03.jpg' | relative_url }}
[slide-04]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-04.jpg' | relative_url }}
[slide-05]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-05.jpg' | relative_url }}
[slide-06]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-06.jpg' | relative_url }}
[slide-07]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-07.jpg' | relative_url }}
[slide-08]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-08.jpg' | relative_url }}
[slide-09]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-09.jpg' | relative_url }}
[slide-10]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-10.jpg' | relative_url }}
[slide-11]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-11.jpg' | relative_url }}
[slide-12]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-12.jpg' | relative_url }}
[slide-13]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-13.jpg' | relative_url }}
[slide-14]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-14.jpg' | relative_url }}
[slide-15]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-15.jpg' | relative_url }}
[slide-16]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-16.jpg' | relative_url }}
[slide-17]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-17.jpg' | relative_url }}
[slide-18]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-18.jpg' | relative_url }}
[slide-19]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-19.jpg' | relative_url }}
[slide-20]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-20.jpg' | relative_url }}
[slide-21]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-21.jpg' | relative_url }}
[slide-22]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-22.jpg' | relative_url }}
[slide-23]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-23.jpg' | relative_url }}
[slide-24]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-24.jpg' | relative_url }}
[slide-25]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-25.jpg' | relative_url }}
[slide-26]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-26.jpg' | relative_url }}
[slide-27]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-27.jpg' | relative_url }}
[slide-28]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-28.jpg' | relative_url }}
[slide-29]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-29.jpg' | relative_url }}
[slide-30]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-30.jpg' | relative_url }}
[slide-31]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-31.jpg' | relative_url }}
[slide-32]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-32.jpg' | relative_url }}
[slide-33]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-33.jpg' | relative_url }}
[slide-34]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-34.jpg' | relative_url }}
[slide-35]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-35.jpg' | relative_url }}
[slide-36]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-36.jpg' | relative_url }}
[slide-37]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-37.jpg' | relative_url }}
[slide-38]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-38.jpg' | relative_url }}
[slide-39]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-39.jpg' | relative_url }}
[slide-40]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-40.jpg' | relative_url }}
[slide-41]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-41.jpg' | relative_url }}
[slide-42]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-42.jpg' | relative_url }}
[slide-43]: {{ 'assets/2017/12-entrepreneur-meet-ai/huan-ai-talk-43.jpg' | relative_url }}
