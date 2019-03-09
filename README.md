# PandaCommentComponent

![](https://img.shields.io/badge/Open%20Source-ByEricWang-orange.svg)
![](https://img.shields.io/badge/pandacomment-V1.0.7-brightgreen.svg)
![](https://img.shields.io/badge/npm-V6.7.0-brightgreen.svg)
![](https://img.shields.io/badge/vue-2.x-brightgreen.svg)

### Introduction

>This is a Vue-based comment component, you are free to make a second transformation on it, become your stuff, and finally apply it to real projects. I call it the Panda Comment component.

### How To Use？
 
```bash
npm i pandacomment
```

#### InTheTemplate

```javascript
import {PandaComment} from 'pandacomment'

//In vue template

export default {
    components: {
        PandaComment
      }
}

```

```vue
<div>
<PandaComment :commentList = "[
{
   username:'',
   content:'', 
}
]"/>
</div>
//The commentList this prop is of type Array. Note that you must keep the field name consistent!

```
### 效果演示

![alt](https://github.com/bigbigDreamer/PandaComment/blob/master/imgBox/demo.gif?raw=true)


### LICENSE

Copyright (c) 2019 Eric Wang
