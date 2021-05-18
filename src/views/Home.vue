<template>
  <dv-full-screen-container>
    <div class="container">
      <div class="header">
        <p class="title"></p>
        <div class="next-btn" @click="btnEvent">全产业链<img src="../assets/img/next.png" alt=""></div>
      </div>
      <div class="main">
        <div class="main-left">
          <bordeBox class="pie-chart">
            <template #boxTitle>羽肠粉加工</template>
            <template #boxMain>
              <div class="main-content">
                <div class="digital-container" v-for="item in String(digitalData)">
                  <div v-if="item === '.'" class="digital-dot">.</div>
                  <div v-else class="digital-box">
                    <dv-digital-flop :config="formatDigital(item)" style="width:100%;height:100%" />
                  </div>
                </div>
              </div>
            </template>
          </bordeBox>
          <bordeBox class="fan-chart">
            <template #boxTitle>用户增量走势</template>
            <template #boxMain>
              <div class="main-content">
                <div class="content-left content-common">
                  <div ref="fanLeft" class="fan-common"></div>
                </div>
              </div>
            </template>
          </bordeBox>
        </div>
        <div class="main-middle">
          <bordeBox class="banner" noBorder>
            <template #boxTitle>产业园全景图</template>
            <template #boxMain>
              <div class="main-content">
                <div class="map">
                  <div id="china-map"></div>
                  <dv-flyline-chart-enhanced class="flyline-chart" :config="config" dev style="width:1000px;height:900px;" />
                </div>
              </div>

            </template>
          </bordeBox>
          <bordeBox class="introduction">
            <template #boxTitle>产业园介绍</template>
            <template #boxMain>
              <div class="main-content">
                <img src="../assets/img/img-introducation.png" alt="">
                <div class="introduction-text">
                  <p class="introduction-title">
                    <span>圣越产业园建有:</span> 总占地：585亩
                  </p>
                  <p class="introduction-desc">
                    甘肃圣越农牧发展有限公司位于甘肃省庆阳市镇原县金龙工业集中区，成立于2020年7月，注册资金3.5亿元，是福建圣农控股集团旗下的一家集饲料加工、种鸡养殖、种蛋孵化、肉鸡饲养、肉鸡加工、产品销售为一体的肉鸡生产加工企业，是农业产业化国家重点龙头企业。
                  </p>
                </div>
              </div>
            </template>
          </bordeBox>
        </div>
        <div class="main-right">
          <bordeBox class="video-box">
            <template #boxTitle>商家增长趋势</template>
            <template #boxMain>
              <div ref="barChart" class="bar-chart_container"></div>
            </template>
          </bordeBox>
          <bordeBox class="wushui-box">
            <template #boxTitle>污水处理厂</template>
            <template #boxMain>
              <div class="pie-chart_container" ref="pieChart"></div>
            </template>
          </bordeBox>
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
import bordeBox from '@/components/bordeBox.vue'
require('../assets/js/china.js')
var seriesData = [
  {
    name: '北京',
    value: 100
  }, {
    name: '天津',
    value: 0
  }, {
    name: '上海',
    value: 60
  }, {
    name: '重庆',
    value: 0
  }, {
    name: '河北',
    value: 60
  }, {
    name: '河南',
    value: 60
  }, {
    name: '云南',
    value: 0
  }, {
    name: '辽宁',
    value: 0
  }, {
    name: '黑龙江',
    value: 0
  }, {
    name: '湖南',
    value: 60
  }, {
    name: '安徽',
    value: 0
  }, {
    name: '山东',
    value: 60
  }, {
    name: '新疆',
    value: 0
  }, {
    name: '江苏',
    value: 0
  }, {
    name: '浙江',
    value: 0
  }, {
    name: '江西',
    value: 0
  }, {
    name: '湖北',
    value: 60
  }, {
    name: '广西',
    value: 60
  }, {
    name: '甘肃',
    value: 0
  }, {
    name: '山西',
    value: 60
  }, {
    name: '内蒙古',
    value: 0
  }, {
    name: '陕西',
    value: 0
  }, {
    name: '吉林',
    value: 0
  }, {
    name: '福建',
    value: 0
  }, {
    name: '贵州',
    value: 0
  }, {
    name: '广东',
    value: 597
  }, {
    name: '青海',
    value: 0
  }, {
    name: '西藏',
    value: 0
  }, {
    name: '四川',
    value: 60
  }, {
    name: '宁夏',
    value: 0
  }, {
    name: '海南',
    value: 60
  }, {
    name: '台湾',
    value: 0
  }, {
    name: '香港',
    value: 0
  }, {
    name: '澳门',
    value: 0
  },
  {
    name: "南海诸岛", value: 0,
    itemStyle: {
      normal: {opacity: 0, label: {show: false}}
    },
    show: false,
    label: {
      show: false
    },
    tooltip: {
      show: false
    }
  }
];
export default {
  name: 'Home',
  components: {
    bordeBox,
  },
  data () {
    return {
      isCloseAll: false,
      toolTipContent: {},
      activeVideo: '',
      isShowVideoDialog: false,
      digitalData: '234567.66',
      config: {
        points: [
          {
            name: '郑州',
            coordinate: [0.48, 0.35],
            /*icon: {
              src: '/img/flylineChart/mapCenterPoint.png',
              width: 30,
              height: 30
            }*/
          },
          {
            name: '新乡',
            coordinate: [0.52, 0.23]
          },
          {
            name: '焦作',
            coordinate: [0.43, 0.29]
          },
          {
            name: '开封',
            coordinate: [0.59, 0.35]
          },
          {
            name: '许昌',
            coordinate: [0.53, 0.47]
          },
          {
            name: '平顶山',
            coordinate: [0.45, 0.54]
          },
        ],
        lines: [
          {
            source: '郑州',
            target: '新乡'
          },
          {
            source: '郑州',
            target: '焦作'
          },
          {
            source: '郑州',
            target: '开封'
          },
          {
            source: '郑州',
            target: '许昌'
          },
          {
            source: '郑州',
            target: '平顶山'
          },
        ],
        /*icon: {
          show: true,
          src: '/img/flylineChart/mapPoint.png'
        },*/
      }
    }
  },
  mounted () {
    this.digitalData = Array(String(this.digitalData).length-1).fill(0).join('')
    setTimeout(() => {
      this.getEchartData()
      this.digitalData = '234567.66'
      this.initEcharts("china")
      this.$forceUpdate();
    })
  },
  methods: {
    formatDigital (item) {
      return item === '.' ? '.' :{
        number: [Number(item)],
        content: '{nt}'
      }
    },
    btnEvent () {
      this.$router.push({path: './second'})
    },
    getEchartData () {
      this.initLineData()
      this.initBarData()
      this.initPieData()
    },
    // 折线图
    initLineData () {
      const myChart = new this.$charts(this.$refs.fanLeft)
      const options = {
        title: {
          text: '周销售额趋势',
          style: {
            fill: '#24c8fb'
          }
        },
        xAxis: {
          name: '日期',
          data: ['4-29', '4-30', '5-01', '5-02', '5-03', '5-04', '5-05'],
        },
        yAxis: {
          name: '数量',
          data: 'value'
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: 'line',
            label:{
              show: false
            },
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.9)', 'rgba(55, 162, 218, .4)']
            },
            lineStyle: {
              stroke: '#24c8fb',
              lineWidth: 2
            },
            linePoint:{
              radius: 4,
              style: {
                fill: '#24c8fb',
                stroke: '#24c8fb',
                lineWidth: 0
              }
            },
          }
        ]
      }
      myChart.setOption(options)

    },
    // 柱状图
    initBarData () {
      const myChart = new this.$charts(this.$refs.barChart)
      const options = {
        xAxis: {
          name: '月份',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '数量',
          data: 'value'
        },
        series: [
          {
            data: [2339, 1899, 2118, 1790, 3265, 4465, 3996],
            type: 'bar',
            gradient: {
              color: ['#01eefe', '#00585c']
            }
          }
        ]
      }
      myChart.setOption(options)

    },
    // 饼状图
    initPieData () {
      const myChart = new this.$charts(this.$refs.pieChart)
      const options = {
        legend: {
          show: true,
          data: {
            name: 'asdf'
          }
        },
        series: [
          {
            type: 'pie',
            data: [
              { name: '可口可乐', value: 5 },
              { name: '百事可乐', value: 30 },
              { name: '哇哈哈', value: 10 },
              { name: '康师傅', value: 5 },
            ],
            radius: ['40%', '50%'],
            insideLabel: {
              show: true
            },
            outsideLabel: {
              show: true
            },
            pieStyle: {
            }
          }
        ]
      }
      myChart.setOption(options)

    },


    initEcharts(pName, Chinese_) {
      var option = {
        tooltip: {
          show: true,
          formatter: (val => {
            return `<p style="color: rgba(255,255,255, .8)">省内商家数 &nbsp;<span style="color: #0550c3">${val.data.value}</span></p>
<p style="color: rgba(255,255,255, .8)">省内代理数 &nbsp;<span style="color: #0550c3">${val.data.value}</span></p>`
          })
        },
        series: [
          {
            name: Chinese_ || pName,
            type: 'map',
            mapType: pName,
            roam: true,//是否开启鼠标缩放和平移漫游
            data: seriesData,
            top: "middle",//组件距离容器的距离
            zoom:1.2,
            selectedMode : 'single',
            tooltip: {
              backgroundColor: 'rgba(2, 25, 93, .4)'
            },

            label: {
              normal: {
                show: true,//显示省份标签
                textStyle:{color:"#fbfdfe"}//省份标签字体颜色
              },
              emphasis: {//对应的鼠标悬浮效果
                show: true,
                textStyle:{color:"#323232"}
              }
            },
            itemStyle: {
              normal: {
                borderWidth: .5,//区域边框宽度
                borderColor: '#0550c3',//区域边框颜色
                areaColor:"rgba(55, 162, 218, .6)",//区域颜色

              },

              emphasis: {
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor:"#ece39e",
              }
            },
          }
        ]

      };
      let myChart = this.$echarts.init(document.getElementById('china-map'));
      myChart.setOption(option);

      myChart.off("click");
    },
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/css/common.scss";
  .main{
    position: relative;
    display: flex;
    flex: 1;
    width: 100%;
    &-left{
      flex: 1;
      .pie-chart{
        height: 300px;
        margin-bottom: 20px;
        .main-content{
          display: flex;
          width: 100%;
          height: 100%;
          .digital-container{
            color: $whiteColor;
            &>*{
              height: 60px;
              line-height: 60px;

            }

            .digital-box{
              margin-right: 10px;
              width: 50px;
              text-align: center;
              border: 1px solid #00d7ff;
            }
            .digital-dot{

            }
          }
        }
      }

      .fan-chart{
        height: 520px;
        .fan-common{
          width: 100%;
          height: 500px;
        }
      }
    }
    &-middle{
      margin: 0 10px;
      flex: 1.5;
      .banner{
        width: 100%;
        margin-bottom: 10px;
        .main-content{
          width: 100%;
          .map{
            position: relative;
            width: 1000px;
            height: 900px;
            .flyline-chart{
              pointer-events: none;
              position: absolute;
              top: 0;
              left: 0;
            }
            #china-map{
              pointer-events: auto;
              width: 100%;
              height: 100%;
              @extend .flyline-chart
            }
          }
        }
      }

      .introduction{
        .main-content{
          display: flex;
          padding: 19px 22px;
          color: $whiteColor;
          font-size: 20px;
          img{
            margin-right: 20px;
            width: 237px;
          }
          .introduction-text{
            line-height: 1.8;
            .introduction-title{
              margin-bottom: 10px;
              span{
                font-size: 22px;
                color: $fontColor;
              }
            }
          }
        }
      }
    }
    &-right{
      flex: 1;
      .video-box{
        margin-bottom: 20px;
        width: 100%;
        .bar-chart_container{
          width: 100%;
          height: 400px;
        }
      }

      .wushui-box{
        position: relative;
        .pie-chart_container{
          width: 100%;
          height: 320px;
        }
      }
    }

  }

</style>
