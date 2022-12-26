// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    bar:0,
    concerns:[],
    hots:[],
    officials:[],
    recentgames:[],
    navHeight:app.globalData.navHeight,
    navTop:app.globalData.navTop,
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
          let {concerns,hots,officials,recentgames} = res.data.data;
          this.setData({
            concerns:concerns,
            hots:hots,
            officials:officials,
            recentgames:recentgames
          })
          console.log(this.data.officials)
        }
    })
  },


  getUserProfile(e) {
    
  },
  getUserInfo(e) {
    
  }
})
