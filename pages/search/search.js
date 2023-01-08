// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      items:[
        {
          id:1,
          context:"年度结果大赏"
        },
        {
          id:2,
          context:"香肠排队"
        },
        {
          id:3,
          context:"原神"
        },{
          id:4,
          context:"超能力冲刺"
        },{
          id:5,
          context:"王国纪元"
        },{
          id:6,
          context:"蛋仔派对"
        },{
          id:7,
          context:"原神 最新兑换码"
        },{
          id:8,
          context:"鹅鸭杀"
        }
        ,{
          id:9,
          context:"我的世界"
        }
        ,{
          id:10,
          context:"暗影战姬"
        }
      ],
      tags:[
        {
          id:1,
          tagname:"策略",
          hash:""
        },
        {
          id:2,
          tagname:"角色扮演",
          hash:""
        },
        {
          id:3,
          tagname:"单机",
          hash:""
        },
        {
          id:4,
          tagname:"模拟经营",
          hash:""
        },
        {
          id:5,
          tagname:"多人联机",
          hash:""
        },
        {
          id:6,
          tagname:"休闲",
          hash:""
        },
        {
          id:7,
          tagname:"解谜",
          hash:""
        },
        {
          id:8,
          tagname:"卡牌",
          hash:""
        },
        {
          id:9,
          tagname:"Roguelike",
          hash:""
        },
        {
          id:10,
          tagname:"音游",
          hash:""
        }
      ],
      searchhistory:[
        {
          context:"蛋仔排队 礼包码",
          hash:""
        },
        {
          context:"原神 七圣召唤",
          hash:""
        }
      ]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})