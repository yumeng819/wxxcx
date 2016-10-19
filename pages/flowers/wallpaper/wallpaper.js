Page({
  data: {
    current: 0,
    list: [],
    wlist: [],
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
      url: 'http://localhost:666/mock/wplist.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          wlist: res.data,
          list: res.data
        });
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },
   actionToupper: function () {
    console.log(1);
    var that = this;
    this.setData({
      refreshHidden: false
    });
    wx.request({
      url: 'http://localhost:666/mock/wplist.json',
      success: function (res) {
        console.log(res);
        setTimeout(function () {
          that.setData({
            wlist: res.data.concat(that.data.wlist),
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
      url: 'http://localhost:666/mock/wplist.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            wlist: res.data.concat(that.data.wlist),
            list: that.data.list.concat(res.data),
            loadmoreHidden: true,
            scrollTop: 1
          });
        }, 1500);
      }
    });
  }
});
