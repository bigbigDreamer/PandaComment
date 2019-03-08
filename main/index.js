import PandaComment from './CommentModule'

// 导出模块
export default PandaComment;
//global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('Panda-Comment', PandaComment);
}

