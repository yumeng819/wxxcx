Page({
  data: {
     markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      desc: '我现在的位置'
    }],
    actionSheetHidden: true,
    actionSheetItems: ['点我没用', '我也是'],
    modalHidden: true,
    covers: [{
      latitude: 23.099794,
      longitude: 113.324520,
      iconPath: '../imgs/integral.png',
      rotate: 10
    }, {
      latitude: 23.099298,
      longitude: 113.324129,
      iconPath: '../imgs/integral.png',
      rotate: 90
    }],
    src:'/video/jj2.mp4',
    current: 0,
    list: [],
    refreshHidden: true,
    loadmoreHidden: true,
    scrollTop: 1,
    action: {
        method: 'play'
      },
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 0,
      duration: 300
    },
    imgUrls: [
      '/imgs/s1.jpg',
      '/imgs/s2.jpg',
      '/imgs/pic2.jpg',
      '/imgs/pic3.jpg'
    ]
  },
  actionSheetTap: function(e) {
      this.setData({
        actionSheetHidden: !this.data.actionSheetHidden
      })
    },
    actionSheetChange: function(e) {
      this.setData({
        actionSheetHidden: !this.data.actionSheetHidden
      })
    },
    modalTap: function(e) {
    this.setData({
      modalHidden: false
    })
  },
  modalChange: function(e) {
    this.setData({
      modalHidden: true
    })
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:666/mock/comlist.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
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
      url: 'http://localhost:666/mock/c-more.json',
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
  },
  switchSlider: function (event) {
    this.setData({
      current: event.target.dataset.index
    })
  },

  changeSlider: function (event) {
    console.log(0);
    this.setData({
      current: event.detail.current
    });
  },
    videoErrorCallback: function(e) {
      console.log('视频错误信息:')
      console.log(e.detail.errMsg)
    }
});
