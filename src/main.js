import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import "./assets/css/index.css"; // 公共样式
import moment from 'moment';  //引入时间的组件
import echarts from 'echarts'
require ("../static/lib/aliyun-upload-sdk/lib/aliyun-oss-sdk-5.3.1.min")
require("../static/lib/aliyun-upload-sdk/lib/aliyun-upload-sdk-1.5.0.min")
require("../static/lib/aliyun-upload-sdk/lib/es6-promise.min")
// 引入播放器组件
// vue-video-player
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import 'videojs-contrib-hls' //单是 RTMP 的话不需要第三方库，如果是 HLS 的话需要引入videojs-contrib-hls，看具体情况而定。
Vue.use(VideoPlayer);
//涉及到源码样式要更改所以这里静态引入   弹幕的组件
import { vueBaberrage } from 'vue-baberrage'
Vue.use(vueBaberrage);
// 引入jquery
// import $ from jquery;
// // 引入全局的样式
import './assets/css/global.css'
// 引入axios  并将其挂载到vue原型上
import "./config/global.js"; // 引全局路径
import axios from 'axios'
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts
axios.defaults.baseURL = "http://192.168.1.168/";
// axios.defaults.baseURL = "http://127.0.0.1/";
// BASE_URL = "http://192.168.1.134/";
// axios.defaults.baseURL = "http://ruanjian.chinadingao.com/"; //线上
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

Vue.config.productionTip = false

// 富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// 表情
// function toEmotion(text, isNoGif){
//   var list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '愉快', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极', '嘿哈', '捂脸', '奸笑', '机智', '皱眉', '耶', '红包', '鸡'];
//   if (!text) {
//       return text;
//   }
//   text = text.replace(/\[[\u4E00-\u9FA5]{1,3}\]/gi, function(word){
//       var newWord = word.replace(/\[|\]/gi,'');
//       console.log(newWord);
//
//       var index = list.indexOf(newWord);
//       console.log(index);
//
//       var backgroundPositionX = -index * 24
//       console.log(backgroundPositionX);
//
//       var imgHTML = '';
//       if(index<0){
//           return word;
//       }
//
//       if (isNoGif) {
//           console.log(isNoGif);
//           if(index>104){
//               return word;
//           }
//           imgHTML = `<i class="static-emotion" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/default218877.gif) ${backgroundPositionX}px 0;"></i>`
//       } else {
//           var path = index>104 ? '/img' : 'https://res.wx.qq.com/mpres/htmledition/images/icon';
//           imgHTML = `<img class="static-emotion-gif" style="vertical-align: middle" src="${path}/emotion/${index}.gif">`
//       }
//       return imgHTML;
//   });
//   return text;
// }


Vue.directive('emotion', {
  bind: function (el, binding) {
      el.innerHTML = toEmotion(binding.value)
  }
});


// 时间处理器
Vue.filter('time', function (value, formatString) {  //挂载全局 时间格式化 过滤器  value  是输入内容
  if (value == 0) {
    return '无时间限制'
  } else {
    formatString = formatString || 'YYYY-MM-DD HH:mm';
    return moment.unix(value).format(formatString); // 这是时间戳转时间
  }
});

// 路由导航守卫
router.beforeEach((to, from, next) => {

  if (to.path === "/login"||to.path === "/home"||to.path=="/forgetPas") {
    next();
    return;
  }
  const user = localStorage.getItem("identity");
  console.log(user);

  if (user) {
    // 登录
    next();
  } else {
    // 没有登录
    next('/login')
  }
});







new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
