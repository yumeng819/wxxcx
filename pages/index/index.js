//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '花田小憩',
    userInfo: {},
    poster: '/imgs/xbmusic.png',
    name: '小半',
    author: '陈粒',
    src: '/audio/xiaoban.mp3',
    action: {
        method: 'pause'
      },
  },
  
  //事件处理函数
  onLoad: function () {
    setTimeout(function(){
       wx.navigateTo({
      url: '../flowers/special/special'
    });
    },2000);
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
