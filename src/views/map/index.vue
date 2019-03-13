<template>
  <div class="app-home">
    <el-container>
      <el-header height="40px">
        <!-- 头部 -->
          <el-row class="home_header meiggin">
            <el-col :span="5"><i class="el-icon-phone"></i><span>客服电话：400000000</span></el-col>
            <el-col class="active" style="float:right"><button>登陆</button></el-col>
            <el-col class="active" style="float:right"><button>注册</button></el-col>
          </el-row>
      </el-header>
      <el-main>
        <el-row class="meiggin home_main">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#434a54" default-active='map' :router=true >
            <!-- <img src='./../../styles/images/logo.png'/> -->
            <div style="float:left">LOGO</div>
            <el-menu-item index="my">关于我们</el-menu-item>          
            <el-menu-item index="map">电子地图</el-menu-item>
            <el-menu-item index="home">首页</el-menu-item>
          </el-menu>
        </el-row>
      </el-main>
      <el-footer>
        
      </el-footer>
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

<style scope>
  @import url('@/../../../styles/style.css');
</style>
