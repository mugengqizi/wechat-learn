Page({
  goLogin(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  goMy(){
    wx.switchTab({
      url: '../my/my',
    })
  }
})