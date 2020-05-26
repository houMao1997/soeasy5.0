<template>
  <div id="app">
    
   <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
   
  },
    mounted() {
        if (document.getElementById('play')) {  //避免多次引入

        }else if(!document.getElementById('play')){
            // const link = document.createElement('link');
            // link.rel = 'stylesheet';
            // link.href = '';
            // link.id = 'qiniuCss';
            // document.body.removeChild(link);
        }
    }
}
</script>

<style lang="less">
  .headers .el-menu .el-menu-item{
     font-size: 0.9em;
      padding:0 10px!important;
    }
  .fenye .el-dialog, .el-pager li{
    opacity: 0.7;
  }
  .fenye .el-pagination .btn-next, .el-pagination .btn-prev{
    opacity: 0.7;
  }
    /* .el-table td, .el-table th.is-leaf{
        border: 1px solid #D4D4E2!important;
    } */
    /* .el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #D4D4E2!important;
} */
    .el-table--border th, .el-table__fixed-right-patch{
      /* border: 1px solid #D4D4E2;   */
    }
  
    .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
        /* border-right: 1px solid #D4D4E2 !important; */
    }
 .zhuceForm .el-dialog{
  min-width: 400px;
}
.shengqing  .el-dialog__header{
    text-align:center
}
.el-message-box {
    margin-top:-20%;

  }
.v-modal {

background-color: none!important;
opacity: 0!important;
 }
.item1 .el-input.el-input--prefix{
      width:70%;
      border-radius:20px;
      background-color: red;
  }
.classManage .el-tabs__nav-scroll{
        margin-left: 80px !important;
    }
.personal .el-divider .el-divider--vertical{
    background: red;
    width: 5px;
    height: 80px;
    margin-left: 33.3%;
    margin-top: -121px;
}
.el-timeline-item__timestamp.is-top{
    margin-left: -100px;
}
.el-tabs__header{
    margin: 0 !important;
}
.bjzy .el-dialog__wrapper .el-dialog{
    /*width: 200px;*/
    /*height: 300px;*/
    border-radius: 10px;
    width: 400px !important;
}
.bjzy .el-dialog__wrapper .el-dialog .el-dialog__header{
    background: #FED467;
    text-align: center;
    font-size: 18px;
    color: #fff;
    border-radius: 10px 10px 0 0 ;
}
.bjzy .el-dialog__wrapper .el-dialog .el-dialog__header .el-dialog__title{
    color:#fff
}
.bjzy .el-dialog__wrapper .el-dialog .el-dialog__footer{

}
.bjzy .el-dialog__wrapper .el-dialog .el-dialog__header .el-dialog__headerbtn .el-dialog__close {
    color: #909399;
    background: rgba(192,192,192,0.5);
    width: 30px;
    height: 30px;
    margin-top: -10px;
    line-height: 30px;
    border-radius: 50%;
}


.xzbj .el-dialog__wrapper .el-dialog{
    /*width: 200px;*/
    /*height: 300px;*/
    border-radius: 10px;
    width: 400px !important;
}
.xzbj .el-dialog__wrapper .el-dialog .el-dialog__header{
    background: #FED467;
    text-align: center;
    font-size: 18px;
    color: #fff;
    border-radius: 10px 10px 0 0 ;
}
.xzbj .el-dialog__wrapper .el-dialog .el-dialog__header .el-dialog__title{
    color:#fff
}
.xzbj .el-dialog__wrapper .el-dialog .el-dialog__footer{

}
.xzbj .el-dialog__wrapper .el-dialog .el-dialog__header .el-dialog__headerbtn .el-dialog__close {
    color: #909399;
    background: rgba(192,192,192,0.5);
    width: 30px;
    height: 30px;
    margin-top: -10px;
    line-height: 30px;
    border-radius: 50%;
}
.center .el-radio-group .el-radio__input.is-checked .el-radio__inner{
  background: #F9672E;
  /* // color:#F9BB75!important; */
  border-color: #F9672E;
  &:hover{
        border-color: #F9672E;
  }
}
 .center  .el-radio-group .el-radio__input.is-checked+.el-radio__label{
  color:#EE7008;
}
 .center  .el-radio-group  .el-radio__inner:hover{
      border-color: #F9672E;
 }
 .center  .select .el-input__inner{
  width:200px;
  height: 30px;
  line-height: 30px;
}
 .chart>div{
      width: 100%!important;
      canvas{
        width: 100%!important; 
      }
}
</style>
