# taptap微信小程序模仿
 - 声明：本项目仅作学习使用，版权均归taptap社区所有，若有侵权，请联系1972105453@qq.com删除

## 项目中的一些坑
- 对scroll-view使用display:flex 发现不识别
  scroll-view 设置 white-space 让子元素可以不换行



## 项目心得
- 伪类使用 :nth-child() :before :not
- :nth-child选择器是根据父元素的同一类子元素来查找的

- 自定义导航条
  bindtap data-set 
  使用block包裹元素，然后用wx:if判断是否渲染
  wx:if是局部判断 hidden是全部都判断并提前渲染
- 当bindtap触发改变data-set时，经{{}}控制元素的类
  对于图片 改变url
  对于文字 可以改颜色 粗细之类的

- 前端测试数据
  wx.request({url,success (res) => {}})
  可以使用fastmock来制作测试数据

