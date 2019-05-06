<template>
  <div class="CommentModule">
      <img id="circle"
        src="https://github.com/bigbigDreamer/GraphBed/blob/master/MyBlogImg/panda_meitu_1.jpg?raw=true" alt="" class="circle">
    <input class="CommentPlace"
           v-model="defaultCommentContent"
           placeholder="请输入您的精彩评论！"
    />
    <div class="button" @click="publishComment">
      Panda一下
      <span class="SmallTriangle"></span>
    </div>

    <div class="CommentList">
      <div class="title">
        评论
      </div>
      <div class="dividingLine"></div>
      <br>
      <div class="usersCommentList" v-for="(item,index) in commentLists" :key="index">
        <img :src="logo" alt="alt" ref="logo">
        <span class="username">{{item.username}}</span>
        <div class="commentContent">
          {{item.content}}
        </div>
        <div class="commentTime">
          <i class="fa fa-calendar" aria-hidden="true"></i> {{item.nowDate}}
        </div>
        <div class="dividing_line"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommentModule',
  props: {
    commentList: {
      type: Array,
      default () {
        return [
          {
            username: 'EricWang',
            content: 'I love this World! I love China!!!',
            nowDate: '1945.10.1 8:00'
          },
        ]
      }
    },
    logo:{
      type:String,
      default(){
        return 'https://avatar-static.segmentfault.com/928/619/928619883-5b164a92bff52_big64'//https://ivu1314.club/images/logo.jpg';
      }
    }
  },

  data () {
    return {
      defaultCommentContent: '',
      // commentList:
      nowDate: new Date().getFullYear() + '.' + (Number.parseInt(new Date().getMonth()) + 1) + '.' + new Date().getDate() + '  ' + new Date().getHours() + ':' + new Date().getMinutes(),
      commentLists: this.commentList
    }
  },
  methods: {

    publishComment () {
      this.commentLists.push({
        username: '灼华',
        content: this.defaultCommentContent,
        nowDate: new Date().getFullYear() + '.' + (Number.parseInt(new Date().getMonth()) + 1) + '.' + new Date().getDate() + '  ' + new Date().getHours() + ':' + new Date().getMinutes()
      })
    }
  },
  mounted () {
    // 定时器1，主要用来控制样式的添加
    const timerOne = setInterval(() => {
      document.querySelector('#circle').classList.add('animated', 'rubberBand')
    }, 500)
    // 定时器2，主要用来删除样式，二者结合的主要目的在于，循环切换
    const timerTwo = setInterval(() => {
      document.querySelector('#circle').classList.remove('animated', 'rubberBand')
    }, 1000)
    setTimeout(() => {
      clearInterval(timerOne)
      clearInterval(timerTwo)
    }, 5000)
  }
}
</script>

<style scoped lang="less">
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
  @import "https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css";

  @borderStyle: 1px solid #70BE70;
  @bcColor: #70BE70;
  @fontColor: #70BE70;
  .fontStyle() {
    color: snow;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  .CommentModule {
    width: 600px;
    margin: 0 auto;

    .circle {
      position: relative;
      top:25px;
      left: 25px;
      width: 120px;
      height: 80px;
      z-index: -1;
      border-top-left-radius: 90px;
      border-top-right-radius: 90px;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
     // border: @borderStyle;
      padding-left: 40px;
      padding-top: 30px;
      border-bottom-color: transparent;
      //background-color: @bcColor;

      .Panda {
        font-size: 22px;
        .fontStyle();
      }
    }

    .CommentPlace {
      border-radius: 20px;
      width: 580px;
      height: 80px;
      border: @borderStyle;
      padding-left: 20px;
      outline: unset;
      color: @fontColor;
    }

    .button {
      position: relative;
      left: 450px;
      width: 110px;
      height: 30px;
      background-color: @bcColor;
      margin-top: 8px;
      border-radius: 30px;
      border-bottom-left-radius: unset;
      padding-left: 10px;
      padding-top: 5px;
      font-size: 18px;
      .fontStyle();

      .SmallTriangle {
        width: 0;
        height: 0;
        border: 8px solid;
        border-color: transparent #70BE70 transparent transparent;
        position: absolute;
        top: 13px;
        left: -16px;
        overflow: hidden;
      }

      &:active {
        background-color: #239A3B;
      }

      &:active .SmallTriangle {
        border-color: transparent #239A3B transparent transparent;
      }
    }

    .CommentList {
      margin-top: 50px;

      .title {
        width: 55px;
        height: 22px;
        border: @borderStyle;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        border-bottom-color: transparent;
        padding-left: 15px;
        padding-top: 8px;
        color: @fontColor;

      }

      .dividingLine {
        width: 530px;
        height: 1px;
        background-color: @bcColor;
        float: right;
      }

      .usersCommentList {
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          position: relative;
          top: 30px;
          margin-right: 8px;
        }

        .username {
          color: @fontColor;
          font-size: 14px;
        }

        .commentContent {
          margin-left: 80px;
          margin-top: 18px;
          color: #333333;
          font-weight: 400;
          font-size: 14px;
        }

        .commentTime {
          float: right;
          color: @fontColor;
          font-size: 14px;
          position: relative;
          top: -60px;
        }

        .dividing_line {
          width: 600px;
          height: 1px;
          background-color: #EAECEF;
          margin-top: 50px;
        }
      }
    }
  }
</style>
