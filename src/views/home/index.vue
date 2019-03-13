<template>
  <div class="app-home">
    <el-container>
      <el-header height="40px">
          <el-row class="home_header meiggin">
            <el-col :span="5"><i class="el-icon-phone"></i><span>客服电话：400000000</span></el-col>
            <el-col class="active" style="float:right"><button>登陆</button></el-col>
            <el-col class="active" style="float:right"><button>注册</button></el-col>
          </el-row>
      </el-header>
      <el-main>
        <el-row class="meiggin home_main">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#434a54" default-active='home' :router=true >
            <!-- <img src='./../../styles/images/logo.png'/> -->
            <div style="float:left">LOGO</div>
            <el-menu-item index="my">关于我们</el-menu-item>          
            <el-menu-item index="map">电子地图</el-menu-item>
            <el-menu-item index="home">首页</el-menu-item>
          </el-menu>
        </el-row>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        <div class="datanav">
          <div class="txt"><span>累计交易</span><em>101</em><span>元</span></div>
            <div class="txt"><span>累计交易</span><em>1.02</em><span>次</span></div>
            <div class="txt"><span>上架车位</span><em>3316</em><span>个</span></div>
            <div class="txt"><span>注册会员</span><em>2203</em><span>位</span></div>
        </div>
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

<style scope>
.el-container{
  width: 100%;
}
/** 头部------ */
.home_header{
  margin: 0 auto;
}
.el-header .el-col{
  font:10px/40px 'microsoft yahei';
  color:#E6E6E6;
}
.el-header .el-col span{
    display:block;
    float:left;
  }
.el-header  .el-icon-phone{
    float:left;
    margin:15px 10px 0 0;
  }
.el-header{
  background:#434a54;
  padding:0;
}
.el-header button{
  width:100%;
  height:40px;
  font:10px/40px 'microsoft yahei';
  padding:0;
  margin:0;
  border:none;
  background:#434a54;
  color:#E6E6E6;
  outline:none;
}
.el-header .grid{
  height:30px;
}
.el-header .active{
  width: 30px
}
.el-header .active button:hover{
  background:#313531;
  cursor:pointer;
}

/** main------ */
.home_main{
  margin:0 auto;
}
.el-main{
  padding:0;
}
.el-main .el-menu{
  margin-top:20px;
}
.el-main .el-menu img{
  width:200px;
}
.el-menu--horizontal>.el-menu-item{
  float:right;
}

/*数据导航*/
.datanav{
	height:60px;
	background-color:#fff;
	margin:20px auto;
	padding-bottom:20px;
  padding: 0 20px;
}
.datanav .txt{
	width:25%;
	height:70px;
	float:left;
	text-align:center;
}
.datanav .txt span{
	font:14px/60px 'microsoft yahei';
	color:#666;
}
.datanav .txt em{
	font:32px/60px 'microsoft yahei';
	text-align:center;
	color:#F60;
}
.el-menu--horizontal>.el-menu-item{
    line-height: 42px;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
/* 轮播图数据 */
.el-carousel__item{
  margin-top:20px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
