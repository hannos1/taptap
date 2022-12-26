// app.js
App({
   onLaunch() {
    wx.getSystemInfo({
      success: res => {
        let menuButtonObject = wx.getMenuButtonBoundingClientRect();
        // console.log(menuButtonObject);
        let statusBarHeight = res.statusBarHeight;
        // console.log(statusBarHeight)
        let navHeight = menuButtonObject.height + menuButtonObject.top + (menuButtonObject.top - statusBarHeight)
        // console.log(navHeight)
        // let windowHeight = res.windowHeight;
        let navTop = menuButtonObject.top
        // console.log(navTop)
        Object.assign(this.globalData,{
          navHeight,
          navTop,
        })
      }
    })
  },
  globalData: {
    navHeight:0,
    navTop:0,
  }
})
