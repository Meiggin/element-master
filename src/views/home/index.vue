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
        <!-- 导航 -->
        <el-row class="meiggin home_main">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#434a54" default-active='home' :router=true >
            <!-- <img src='./../../styles/images/logo.png'/> -->
            <div style="float:left">LOGO</div>
            <el-menu-item index="my">关于我们</el-menu-item>          
            <el-menu-item index="map">电子地图</el-menu-item>
            <el-menu-item index="home">首页</el-menu-item>
          </el-menu>
        </el-row>
        <!-- 轮播图 -->
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        <!-- 数据展示 -->
        <div class="datanav">
          <div class="txt"><span>累计交易</span><em>101</em><span>元</span></div>
            <div class="txt"><span>累计交易</span><em>1.02</em><span>次</span></div>
            <div class="txt"><span>上架车位</span><em>3316</em><span>个</span></div>
            <div class="txt"><span>注册会员</span><em>2203</em><span>位</span></div>
        </div>
        <!-- 最新上架和成交 -->
        <el-row class="meiggin" style="margin:0 auto;">
          <el-col :span="14">
            <el-card shadow="always">
				      <div class="home_new_trading">
                最新上架
              </div>
                <el-table
                :data="tableData4"
                style="width: 100%"
                max-height="400">
					
                  <el-table-column
                    prop="name"
                    label="小区信息"
                    width="120">
                  </el-table-column>
                  <el-table-column
                  fixed
                  prop="date"
                  label="回购年限"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="固定收益"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="车位价格"
                  width="120">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="120">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, tableData4)"
                      type="text"
                      size="small">
                      详情
                    </el-button>
                  </template>
                </el-table-column>
                <!-- </el-table-column>    -->
                
              </el-table>
            </el-card>
          </el-col>
          <el-col :span="9"  :offset="1">
			  <el-card shadow="always">
				<div class="home_new_trading">
                最新成交
              </div>
                <el-table
                :data="tableData"
                style="width: 100%"
                max-height="400">
					
                  <el-table-column
                    prop="name"
                    label="固定收益"
                    width="120">
                  </el-table-column>
                  <el-table-column
                  fixed
                  prop="date"
                  label="车位价格"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="会员姓名"
                  width="120">
                </el-table-column>
                <!-- <el-table-column
                  fixed="right"
                  label="操作"
                  width="120">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, tableData4)"
                      type="text"
                      size="small">
                      详情
                    </el-button>
                  </template>
                </el-table-column> -->
                
              </el-table>
            </el-card>
          </el-col>
        </el-row>
		<el-card class="meiggin charcanvs">
			<div id="myChart" :style="{width: '1100px', height: '500px'}"></div>
		</el-card>
      </el-main>
      <el-footer>
		  
	  </el-footer>
    </el-container>
    
  </div>
</template>

<script>
  export default {
	name: 'home',
    data() {
      return {
		msg: 'Welcome to Your Vue.js App',
        activeIndex: '1',
        activeIndex2: '1',
        tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '1'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '1000'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '100000'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '10000000'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '1'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '1000'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '100000'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '1'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '1000'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '100000'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '1'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '1000'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '100000'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '1'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '1000'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '100000'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '1'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '1000'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '100000'
        },]
      };
	},
	mounted(){
		// option = null;
		
		this.drawLine();
		// if (option && typeof option === "object") {
		// 	myChart.setOption(option, true);
		// }
	},
    methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		deleteRow(index, rows) {
			rows.splice(index, 1);
		},
		formatter(row, column) {
			return row.address;
		},
		drawLine(){
		  //基于准备好的dom，初始化echarts实例
		  	let myChart = this.$echarts.init(document.getElementById('myChart'))
		  	let base = +new Date(1968, 9, 3);
			let oneDay = 24 * 3600 * 1000;
			let date = [];
			let data = [Math.random() * 300];
			for (let i = 1; i < 20000; i++) {
				let now = new Date(base += oneDay);
				date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
				data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
			}
		   	myChart.setOption({
            tooltip: {
				trigger: 'axis',
				position: function (pt) {
					return [pt[0], '10%'];
				}
			},
			title: {
				left: 'center',
				text: '走势图',
			},
			toolbox: {
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					restore: {},
					saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: date
			},
			yAxis: {
				type: 'value',
				boundaryGap: [0, '100%']
			},
			dataZoom: [{
				type: 'inside',
				start: 0,
				end: 10
			}, {
				start: 0,
				end: 10,
				handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
				handleSize: '80%',
				handleStyle: {
					color: '#fff',
					shadowBlur: 3,
					shadowColor: 'rgba(0, 0, 0, 0.6)',
					shadowOffsetX: 2,
					shadowOffsetY: 2
				}
			}],
			series: [
				{
					name:'模拟数据',
					type:'line',
					smooth:true,
					symbol: 'none',
					sampling: 'average',
					itemStyle: {
						color: 'rgb(255, 70, 131)'
					},
					
					data: data
				}
			]
		});
	  }
    }
  }
</script>

<style scope>
  @import url('@/../../../styles/style.css');
</style>
