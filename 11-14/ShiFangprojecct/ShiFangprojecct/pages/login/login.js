Page({
  goMy(){
    wx.switchTab({
      url: '../my/my',
    })
  },
  goZhuCe(){
    wx.navigateTo({
      url: '../zhuce/zhuce',
    })
  }
})