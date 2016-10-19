Page({
  data: {
    current: 0,
    list: [],
    loadingHidden: false,
    refreshHidden: true,
    loadmoreHidden: true,
    scrollTop: 1,
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 0,
      duration: 300
    }
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:666/mock/list.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        setTimeout(function () {
          that.setData({
            list: res.data,
            loadingHidden: true
          });
        }, 1500);
      },
      fail: function (error) {
        console.log(error);
      }
    });
   
  },
  onPullDownRefresh: function () {
      console.log('onPullDownRefresh', new Date())
    },

   actionToupper: function () {
    console.log(1);
    var that = this;
    this.setData({
      refreshHidden: false
    });
    wx.request({
      url: 'http://localhost:666/mock/s-refresh.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            list: res.data.concat(that.data.list),
            refreshHidden: true,
            scrollTop: 1
          });
        }, 1500);
      }
    });
  },
  actionTolower: function () {
    console.log(0);
    var that = this;
    this.setData({
      loadmoreHidden: false
    });
    wx.request({
      url: 'http://localhost:666/mock/s-more.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            list: that.data.list.concat(res.data),
            loadmoreHidden: true,
            scrollTop: 1
          });
        }, 1500);
      }
    });
  }


});
