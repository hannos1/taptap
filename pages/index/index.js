// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    bar:0,
    message:0,
    mymessage:0,
    concerns:[],
    currentvideo:null,
    hots:[],
    officials:[],
    recentgames:[],
    suggest:[],
    navHeight:app.globalData.navHeight,
    navTop:app.globalData.navTop,
    objectheight:app.globalData.objectheight,
    },

  // 事件处理函数
  bindViewTap() {

  },

  selectbar(e){
    // console.log(e);
    let bar = e.currentTarget.dataset.bar;
    // console.log(bar);
    this.setData({
      bar:bar
    })
  },

  selectmessage(e){
    let message = e.currentTarget.dataset.message;
    // console.log(message)
    this.setData({
      message:message
    })
  },

  selectmymessage(e){
    let mymessage = e.currentTarget.dataset.mymessage;
    // console.log(message)
    this.setData({
      mymessage:mymessage
    })
  },

  messageswiper(e){
    // console.log(e)
    if(e.detail.source == 'touch'){
      let message = e.detail.current;
      // console.log(message)
      this.setData({
        message:message
      })
    }
  },

  videoplay(e){
    // console.log(e)
    let lastcurrentvideo = this.data.currentvideo;
    let currentvideo = wx.createVideoContext(e.target.id)
    this.setData({
      currentvideo:currentvideo
    })
    // console.log(this.data.currentvideo,e.target.id)
    if(lastcurrentvideo && lastcurrentvideo !== currentvideo){
      lastcurrentvideo.pause();
    }
  },

  searchbar(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  onLoad() {
    wx.request({
      url: 'https://www.fastmock.site/mock/dfd6cd04918aa964002f30ba98a805c4/mapmap/home',
      success:(res) => {
          // console.log(res)
          let {concerns,hots,officials,recentgames,suggest,concern} = res.data.data;
          this.setData({
            concerns:concerns,
            hots:hots,
            officials:officials,
            recentgames:recentgames,
            suggest:suggest,
            concern:concern
          })
          // console.log(this.data.suggest)
        }
    })
  },


  getUserProfile(e) {
    
  },
  getUserInfo(e) {
    
  }
})
