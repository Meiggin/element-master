<template>
  <div class="app-home">
    <el-container>
      <el-header height="30px">
          <el-row class="home_header">
            <el-col :span="5"><i class="el-icon-phone"></i><span>客服电话：400000000</span></el-col>
            <el-col :span="15"><div class="grid"></div></el-col>
            <el-col  :span="2" class="active"><button>登陆</button></el-col>
            <el-col  :span="2" class="active"><button>注册</button></el-col>
          </el-row>
      </el-header>
      <el-main>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#434a54" :router=true>
          <el-menu-item index="home">首页</el-menu-item>
          <el-menu-item index="map">电子地图</el-menu-item>
          <el-menu-item index="my">关于我们</el-menu-item>
        </el-menu>
        
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.el-col{
  font:10px/30px '';
  color:#f0f0f0;
  
}
.el-col span{
    display:block;
    float:left;
  }
  .el-icon-phone{
    float:left;
    margin:9px;
  }
.el-header{
  background:#434a54;
}
button{
  width:50px;
  height:30px;
  font:10px/30px '';
  padding:0;
  margin:0;
  border:none;
  background:#434a54;
  color:#f0f0f0;
  outline:none;
}
.grid{
  height:30px;
}
.active button:hover{
  background:#313531;
  cursor:pointer;
}

</style>
