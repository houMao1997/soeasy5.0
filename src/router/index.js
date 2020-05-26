import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
// 手机号登录页面
import ForgetPas from '../components/forgetPas/forgetPas.vue'
// 登录首页
import Index from '../components/index.vue'
import Welcome from '../components/Welcome.vue' 
// 教师端
// 课程资源
import my_course from '../components/video/my_course.vue'   //我的课程
import Lead_in_course from '../components/video/Lead_in_course.vue'  //校本课程
import Video from '../components/video/video.vue'      //系统课程
import studentLookList from '../components/video/studentLookList.vue'
import Import_video from '../components/video/Import_video.vue'
import Course_Details from '../components/video/Course_Details'
import Video_play from '../components/video/video_play.vue'
import New_curriculum from '../components/video/New_curriculum.vue'
 //备课系统
import bekexitong from '../components/bekexitong/bekexitong.vue'  //我的课件
import xiaobenkejian from '../components/bekexitong/xiaobenkejian.vue'   //校本课件  
// 课堂教学
import ketangjiaoxue from '../components/ketangjiaoxue/ketangjiaoxue.vue'   //课堂教学

// 直播课堂
import zhiboketangs from '../components/zhiboketang/zhiboketangs.vue'  //直播课堂
import liveshow from '../components/zhiboketang/liveshow.vue'
// 作业管理
import zuoyeguanli from '../components/zuoyeguanli/zuoyeguanli.vue'   //  作业管理
// 考试管理  xiaobenshijuan
import myshijuan from '../components/shijuan/myshijuan.vue'   //我的试卷
import xiaobenshijuan from '../components/shijuan/xiaobenshijuan.vue'  //校本试卷
import ShijuanList from '../components/shijuan/shijuanList.vue'  //考试统计
import Shijuan from '../components/shijuan/shijuan.vue'
import OtherKaoshi from '../components/shijuan/otherkaoshi.vue'
import FourAdd from '../components/shijuan/fourAdd.vue' //新增四级试卷
import SixAdd from '../components/shijuan/sixAdd.vue' //新增六级试卷
import AAdd from '../components/shijuan/aAdd.vue' //新增a级试卷
import BAdd from '../components/shijuan/bAdd.vue' //新增b级试卷
import OtherAdd from '../components/shijuan/otherAdd.vue' //新增其他试卷

// 系统管理
import ClassManage from '../components/classManages/classMange.vue'   //班级管理  
import studentmanage from '../components/classManages/studentmanage.vue'  //学生管理
import Class from '../components/classManages/class.vue'
import Classstudent from '../components/classManages/classstudent.vue'
import SchoolClass from '../components/classManages/schoolClass.vue'
import Print from '../components/classManages/print.vue'
import StuMassage from '../components/classManages/stuMassage.vue'
import Mystudent from '../components/classManages/mystudent.vue'
import TeachStu from '../components/classManages/teachStu.vue'
import teacherList from '../components/classManages/teacherList.vue'

// 题库管理
import xitongtiku from '../components/tikuguanli/xitongtiku.vue'  //系统题库、
import mytiku from '../components/tikuguanli/mytiku.vue'  //我的题库
import schooltiku from '../components/tikuguanli/schooltiku.vue'  //我校题库
import List from '../components/tikuguanli/List.vue'
import FourList from '../components/tikuguanli/fourList.vue'
import SixList from '../components/tikuguanli/sixList.vue'
import AList from '../components/tikuguanli/aList.vue'
import BList from '../components/tikuguanli/bList.vue'
// 在线交流
import zaixianjiaoliu from '../components/zaixianjiaoliu/zaixianjiaoliu.vue'  //chatList
import chatList from '../components/zaixianjiaoliu/chatList.vue'
// 直播课堂
import zhiboketang from '../components/student/zhiboketang/zhiboketang.vue'   //直播课堂
import kouyucepin from '../components/student/kouyucepin/kouyucepin.vue'   //口语测聘
import chongzhizhongxin from '../components/student/gerenzhongxin/chongzhijilu.vue'   //充值中心
import xiaofeijilu from '../components/student/gerenzhongxin/xiaofeijilu.vue'   // 消费记录
import wodeshoucang from '../components/student/gerenzhongxin/wodeshoucang.vue'   //我的收藏
import shangyehezuo from '../components/student/gerenzhongxin/shangyehezuo.vue'//商业合作
import aList from "../components/tikuguanli/aList.vue"
import bList from "../components/tikuguanli/bList.vue"
import fourList from "../components/tikuguanli/fourList.vue"
import sixList  from "../components/tikuguanli/sixList";
import Chengji from '../components/chengji/chengji.vue'   //数据分析
import bishi from "../components/student/dengjikaoshi/bishi"
import koushi from "../components/student/dengjikaoshi/koushi"
import zhuanxiangtupo from "../components/student/dengjikaoshi/zhuanxiangtupo"
import datijiqiao from "../components/student/dengjikaoshi/datijiqiao"
// 数据统计
import Score from '../components/chengji/score.vue'
import Error_statistics from '../components/chengji/Error_statistics.vue'
import Video_statistics from '../components/chengji/Video_statistics.vue'
import Live_broadcast_statistics from '../components/chengji/Live_broadcast_statistics.vue'
import AddPaper from '../components/shijuan/addPaper.vue'

import ziZhuzujuan from '../components/shijuan/zizhuzujuan.vue'

// 售后管理
import stuCreateGongdan from '../components/shouhou/stucreateGongdan.vue'
import gongDanLlist from '../components/shouhou/gongdanLlist.vue'
import changePad from '../components/shouhou/changePsd.vue'
import aboutUs from '../components/shouhou/aboutUs.vue'

import upload from '../components/upload/upload'
import play from '../components/upload/play'

// 学生预约
import StuOrder from '../components/order/stuOrder.vue'

// 学会端
// 学生端首页
import StuWelcome from '../components/stuwelcome.vue'
import StuScore from '../components/chengji/stuscore.vue'
import StuError from '../components/chengji/stuerror.vue'
import OnlineCourse from '../components/student/onlinecourse.vue'
import OnLineMoNi from '../components/student/onlinemoni.vue'
import TiKuLianXi from '../components/student/tikulianxi.vue'
import StuFourKaoshi from '../components/student/kaoshi/stufourKaoshi.vue'
import StuSixKaoshi from '../components/student/kaoshi/stusixKaoshi'
import StubKaoshi from '../components/student/kaoshi/stubKaoshi'
import fourKaos from '../components/student/kaoshi/fourkaos'
import sixKaos from '../components/student/kaoshi/sixkaos'
import StuaKaoshi from '../components/student/kaoshi/stuaKaoshi'
import StuFourList from '../components/student/stufourlist.vue'
import StuSixList from '../components/student/stusixlist.vue'
import StuaList from '../components/student/stualist.vue'
import StubList from '../components/student/stublist.vue'
import StuCourseDetail from '../components/student/stucoursedetail.vue'
import StuVideoPlay from '../components/student/stuvideoplay.vue'
import subScribeList from '../components/student/subscribeList.vue'
import subScribeKaoshi from '../components/student/subscribeKaoshi.vue'
import wuZhihua from '../components/student/wuzhihua.vue'
import Dengjikaoshi from '../components/student/dengjikaoshi/dengjikaoshi.vue'   //等级考试
import KaoshiList from '../components/student/dengjikaoshi/kaoshiList.vue'      //考试列表
import Kehouzuoye from '../components/student/kehouzuoye/kehouzuoye.vue' 
import Xitongziyuan from '../components/student/courseziyuan/xitongziyuan.vue'

import Tinglixunlian from '../components/student/zhuanxiangxunlian/tinglixunlian.vue'
import Xiezuoxunlian from '../components/student/zhuanxiangxunlian/xiezuoxunlian.vue'
import Dancixunlian from '../components/student/zhuanxiangxunlian/dancixunlian.vue'
import Fanyixunlian from '../components/student/zhuanxiangxunlian/fanyixunlian.vue'
import Kouyuxunlian from '../components/student/zhuanxiangxunlian/kouyuxunlian.vue'
import Cuotijijin from '../components/student/cuotijijin/cuotijijin.vue'  


Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/forgetPas', component: ForgetPas, name: 'forgetPas' },
 
    // 教师端
    {
        path: "/index",
        name: "index",
        component: Index,
        redirect: { name: "welcome" },
        children: [
            // 教师端 
            { path: '/welcome', name: 'welcome', component: Welcome },  //教师端首页
            { path: '/stuwelcome', name: 'stuwelcome', component: StuWelcome },   //学生端首页
            // 课程资源
            { path: '/my_course', name: 'my_course', component: my_course },   //我的课程
            { path: '/Lead_in_course', name: 'Lead_in_course', component: Lead_in_course },   //校本课程
            { path: '/video', name: 'video', component: Video },   //系统课程
            { path: '/Import_video', name: 'Import_video', component: Import_video },        
            { path: '/video_play', name: 'video_play', component: Video_play },
            { path: '/Course_Details', name:'Course_Details', component: Course_Details },
            { path: '/New_curriculum', name: 'New_curriculum', component: New_curriculum },
           
            // 备课系统
            { path: '/bekexitong', name: 'bekexitong', component: bekexitong },   //教师端 备课系统  我的课件 
            { path: '/xiaobenkejian', name: 'xiaobenkejian', component: xiaobenkejian },  //校本课件 xiaobenkejian  
            
            // 课堂教学
            { path: '/ketangjiaoxue', name: 'ketangjiaoxue', component: ketangjiaoxue },  //课堂教学
            // 直播课堂
            { path: '/zhiboketangs', name: 'zhiboketangs', component: zhiboketangs },  
            { path: '/liveshow', name: 'liveshow', component: liveshow },
            // 作业管理
            { path: '/zuoyeguanli', name: 'zuoyeguanli', component: zuoyeguanli },
            // 试卷管理
            { path: '/myshijuan', name: 'myshijuan', component: myshijuan },   //我的试卷
            { path: '/xiaobenshijuan', name: 'xiaobenshijuan', component: xiaobenshijuan }, //校本试卷
            { path: '/shijuan', name: 'shijuan', component: Shijuan },   
            { path: '/shijuanList', name: 'shijuanList', component:ShijuanList },  //考试统计
            { path: '/addPaper', name: 'addPaper', component: AddPaper },
            { path: '/otherKaoshi', name: 'otherKaoshi', component: OtherKaoshi },
            { path: '/fourAdd', name: 'fourAdd', component: FourAdd },
            { path: '/sixAdd', name: 'sixAdd', component: SixAdd },
            { path: '/aAdd', name: 'aAdd', component: AAdd },
            { path: '/bAdd', name: 'bAdd', component: BAdd },
            { path: '/otherAdd', name: 'otherAdd', component: OtherAdd },
            { path: '/zizhuzujuan', name: 'zizhuzujuan', component: ziZhuzujuan },
           
            // 系统管理
            { path: '/classmanage', name: 'classmanage', component: ClassManage },   //班级管理
            { path: '/studentmanage', name: 'studentmanage', component: studentmanage },   //学生管理
            { path: '/mystudent', name: 'mystudent', component: Mystudent },   
            { path: '/classstudent', name: 'classstudent', component: Classstudent },   
            { path: '/teachStu', name: 'teachStu', component: TeachStu },
            { path: '/teacherList', name: 'teacherList', component: teacherList },
            { path: '/schoolClass', name: 'schoolClass', component: SchoolClass },
            { path: '/print', name: 'print', component: Print },
            { path: '/stuMassage', name: 'stuMassage', component: StuMassage },
            { path: '/chengji', name: 'chengji', component: Chengji },
           
            // 题库管理
            { path: '/xitongtiku', name: 'xitongtiku', component: xitongtiku },//系统题库
            { path: '/mytiku', name: 'mytiku', component: mytiku },  //我的题库
            { path: '/schooltiku', name: 'schooltiku', component: schooltiku },  //我校题库
            { path: '/list', name: 'list', component: List },
            { path: '/fourList', name: 'fourList', component: FourList },
            { path: '/sixList', name: 'sixList', component: SixList },
            { path: '/aList', name: 'aList', component: AList },
            { path: '/bList', name: 'bList', component: BList },
            // 数据分析
            { path: '/score', name: 'score', component: Score },           
            { path: '/Error_statistics', name: 'Error_statistics', component: Error_statistics },
            { path: '/Video_statistics', name: 'Video_statistics', component: Video_statistics },
            { path: '/Live_broadcast_statistics', name: 'Live_broadcast_statistics', component: Live_broadcast_statistics },

            // 个人中心
            { path: '/shangyehezuo', name: 'shangyehezuo', component: shangyehezuo },   //教师端 商业合作
            { path: '/wodeshoucang', name: 'wodeshoucang', component: wodeshoucang },   //我的收藏
            { path: '/changePad', name: 'changePad', component: changePad }, //修改密码
            { path: '/aboutUs', name: 'aboutUs', component: aboutUs },
            { path: '/gongdanLlist', name: 'gongdanLlist', component: gongDanLlist },
            { path: '/stucreateGongdan', name: 'stucreateGongdan', component: stuCreateGongdan },
            // 在线交流 chatList
            { path: '/zaixianjiaoliu', name: 'zaixianjiaoliu', component: zaixianjiaoliu },
            { path: '/chatList', name: 'chatList', component: chatList },
            
             //学生预约
             { path: '/stuOrder', name: 'stuOrder', component: StuOrder },
             { path: '/upload', name:'upload', component:upload },
             { path: '/play', name:'play', component:play },
                                 
            { path: '/kouyucepin', name: 'kouyucepin', component: kouyucepin },
            { path: '/xiaofeijilu', name: 'xiaofeijilu', component: xiaofeijilu },
           
            { path: '/chongzhizhongxin', name: 'chongzhizhongxin', component: chongzhizhongxin },

            // 学生端
            { path: '/dengjikaoshi', name:'dengjikaoshi',component:Dengjikaoshi},   //等级考试  
            { path: '/kaoshiList', name:'kaoshiList', component:KaoshiList},
            { path: '/kehouzuoye', name:'kehouzuoye', component:Kehouzuoye},
            { path: '/xitongziyuan', name:'xitongziyuan', component:Xitongziyuan}, 
            { path: '/tinglixunlian', name:'tinglixunlian', component:Tinglixunlian},
            { path: '/xiezuoxunlian', name:'xiezuoxunlian', component:Xiezuoxunlian},
            { path: '/dancixunlian', name:'dancixunlian', component:Dancixunlian},
            { path: '/fanyixunlian', name:'fanyixunlian', component:Fanyixunlian},
            { path: '/kouyuxunlian', name:'kouyuxunlian', component:Kouyuxunlian},
            { path: '/cuotijijin', name:'cuotijijin', component:Cuotijijin},
            { path: '/stuscore', name: 'stuscore', component: StuScore },
            { path: '/stuerror', name: 'stuerror', component: StuError },
            { path: '/stuerror', name: 'stuerror', component: StuError },
            { path: '/onlinecourse', name: 'onlinecourse', component: OnlineCourse },
            { path: '/stuvideoplay', name: 'stuvideoplay', component: StuVideoPlay },
            { path: '/stucoursedetail', name: 'stucoursedetail', component: StuCourseDetail },
            { path: '/subscribeList', name: 'subscribeList', component: subScribeList },
            { path: '/subscribeKaoshi', name: 'subscribeKaoshi', component: subScribeKaoshi },
            { path: '/wuzhihua', name: 'wuzhihua', component: wuZhihua },

            { path: '/stucreateGongdan', name: 'stucreateGongdan', component: stuCreateGongdan },
            { path: '/fourkaos', name: 'fourkaos', component: fourKaos },
            { path: '/sixkaos', name: 'sixkaos', component: sixKaos },
            {path:'/stufourlist',name: 'stufourlist', component: StuFourList },
            {path:'/stusixlist',name: 'stusixlist', component: StuSixList },
            {path:'/stualist',name: 'stualist', component: StuaList },
            {path:'/stublist',name: 'stublist', component: StubList },
            { path: '/onlinemoni', name: 'onlinemoni', component: OnLineMoNi },
            { path: '/tikulianxi', name: 'tikulianxi', component: TiKuLianXi },
            { path: '/stusixKaoshi', name: 'stusixKaoshi', component: StuSixKaoshi },
            { path: '/stufourKaoshi', name: 'stufourKaoshi', component: StuFourKaoshi },
            { path: '/stubKaoshi', name: 'stubKaoshi', component: StubKaoshi },
            { path: '/stuaKaoshi', name: 'stuaKaoshi', component: StuaKaoshi },
            { path: '/zhiboketang', name: 'zhiboketang', component: zhiboketang},   //直播课堂
            { path: '/aList', name: 'aList', component: aList},
            { path: '/bList', name: 'bList', component: bList},
            { path: '/fourList', name: 'fourList', component: fourList},
            { path: '/sixList', name: 'sixList', component: sixList},
            { path: '/studentLookList', name: 'studentLookList', component: studentLookList},
            { path: '/bishi', name: 'bishi', component: bishi},
            { path: '/koushi', name: 'koushi', component: koushi},
            { path: '/zhuanxiangtupo', name: 'zhuanxiangtupo', component: zhuanxiangtupo},
            { path: '/datijiqiao', name: 'datijiqiao', component: datijiqiao},
        ]
    },

]

const router = new VueRouter({
    routes
})

export default router