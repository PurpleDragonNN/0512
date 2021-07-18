<template>
  <div class="full-container">
    <div class="container">
      <div class="header">
        <p class="title">贯鱼数据监控大屏</p>
      </div>
      <div class="main">
        <div class="main-left">
          <bordeBox class="digital-chart">
            <template #boxTitle>电商数据</template>
            <template #boxMain>
              <div class="main-content">
                <p class="digital-chart_title">日销售额</p>
                <div class="digital-items">
                  <div class="digital-item" v-for="item in String(digitalData)">
                    <div v-if="item === '.'" class="digital-dot">.</div>
                    <div v-else class="digital-box">
                      <dv-digital-flop :config="formatDigital(item)" style="width:100%;height:100%" />
                    </div>
                  </div>
                </div>
                <div class="digital-bar">
                  <div class="digital-bar_title">1416787.00</div>
                  <div class="digital-bar_main">
                    <div class="digital-bar_desc">用户量</div>
                    <div class="digital-bar_chart" ref="digitalBar"></div>
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
            <template #boxMain>
              <div class="main-content">
                <div class="map">
                  <div id="china-map"></div>
                  <dv-flyline-chart-enhanced class="flyline-chart" :config="config" dev style="width:100%;height:100%;" />
                  <img src="../assets/img/map-shadow.png" class="map-shadow"/>
                </div>
              </div>

            </template>
          </bordeBox>
          <bordeBox class="introduction">
            <template #boxTitle>大额订单</template>
            <template #boxMain>
              <div class="main-content">
                <dv-scroll-board :config="scrollConfig" style="width:100%;height:269px" />
              </div>
            </template>
          </bordeBox>
        </div>
        <div class="main-right">
          <bordeBox class="tongji-box">
            <template #boxTitle>统计数据</template>
            <template #boxMain>
              <div class="box-main">
                <div class="main-item" v-for="item in tongjishuju">
                  <img :src="item.imgUrl" alt="">
                  <div class="main-item_right">
                    <p class="title">{{item.title}}</p>
                    <p class="subtitle">{{item.subtitle}}</p>
                  </div>
                </div>
              </div>
            </template>
          </bordeBox>
          <bordeBox class="shangjia-box">
            <template #boxTitle>商家增长趋势</template>
            <template #boxMain>
              <div ref="barChart" class="bar-chart_container"></div>
            </template>
          </bordeBox>
          <bordeBox class="wushui-box">
            <template #boxTitle>代理月收益额</template>
            <template #boxMain>
              <div class="pie-chart_container" ref="pieChart"></div>
            </template>
          </bordeBox>
        </div>
      </div>
    </div>
  </div>
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
      tongjishuju: [
        {
          imgUrl: require('../assets/img/tongji1.png'),
          title: '30',
          subtitle: '订单总额',
        },
        {
          imgUrl: require('../assets/img/tongji2.png'),
          title: '42',
          subtitle: '销售总量（万元）',
        },
        {
          imgUrl: require('../assets/img/tongji3.png'),
          title: '88',
          subtitle: '人均消费',
        },
        {
          imgUrl: require('../assets/img/tongji4.png'),
          title: '82',
          subtitle: '近10分钟新增订单',
        },
      ],
      config: {
        icon: {
          show: true,
          src: require('../assets/img/zuobiao.png'),
          width: 50,
          height: 50
        },
        points: [
          {
            name: '内蒙古',
            coordinate: [0.59, 0.37],
            icon: {
              show: true,
              src: require('../assets/img/zuobiao-center.png'),
              width: 50,
              height: 50
            },
            halo: {
              show: true,
            },
          },
          {
            name: '青海省',
            coordinate: [0.36, 0.52]
          },
          {
            name: '四川省',
            coordinate: [0.48, 0.66]
          },
          {
            name: '北京市',
            coordinate: [0.68, 0.35]
          },
        ],
        lines: [
          {
            source: '内蒙古',
            target: '青海省'
          },
          {
            source: '内蒙古',
            target: '四川省',
            color: '#00feff'
          },
          {
            source: '内蒙古',
            target: '北京市'
          },
        ],
        line: {
          width: 2
        },
      },
      scrollConfig: {
        header: ['列1', '列2', '列3', '列4', '列5', '列6'],
        data: [
          ['行1列1', '行1列2', '行1列3','行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3','行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3','行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3','行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3','行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3','行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3','行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3','行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3','行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3','行10列1', '行10列2', '10列3']
        ],
        columnWidth: [150],
        headerBGC: 'rgba(19,34,57,1)',
        oddRowBGC: 'rgba(1,1,1,0)',
        evenRowBGC: 'rgba(12,24,53,.85)',
        headerHeight: 42,
      }
    }
  },
  mounted () {
    this.resizeFn()
    window.onresize = this.resizeFn
    this.digitalData = Array(String(this.digitalData).length-1).fill(0).join('')
    setTimeout(() => {
      this.getEchartData()
      this.digitalData = '234567.66'
      this.initEcharts("china")
      this.$forceUpdate();
    })
  },
  methods: {
    resizeFn () {
      let win_w = document.documentElement.clientWidth ||  document.body.clientWidth
      let win_h = document.documentElement.clientHeight || document.body.clientHeight
      let ratioX = win_w / 1920
      let ratioY = win_h / 1080;
      this.resize = {
        transform: "scale(" + ratioX + ", " + ratioY + ")",
        transformOrigin: "left top",
      }
    },
    formatDigital (item) {
      return item === '.' ? '.' :{
        number: [Number(item)],
        content: '{nt}',
        style: {
          fill: '#fff'
        }
      }
    },
    btnEvent () {
      this.$router.push({path: './second'})
    },
    getEchartData () {
      this.initLineData()
      this.initBarData()
      this.initPieData()
      this.initSmallBarData()
    },
    initSmallBarData () {
      let barLeft = this.$echarts.init(this.$refs.digitalBar);
      // 指定图表的配置项和数据
      let option = (option) => ( {
        tooltip: {
          show: true,
          formatter: function() {
            return option.toolTip
          }
        },
        grid: {   // 直角坐标系内绘图网格
          left: '0',  //grid 组件离容器左侧的距离,
          //也可以是'80%'这样相对于容器高度的百分比
          top: '0',
          right: '0',
          bottom: '0',
        },
        xAxis: {  //直角坐标系grid中的x轴,
          type: 'value',//坐标轴类型,分别有：
                        //'value'-数值轴；'category'-类目轴;
                        //'time'-时间轴;'log'-对数轴
          splitLine: {show: false},//坐标轴在 grid 区域中的分隔线
          axisLabel: {show: false},//坐标轴刻度标签
          axisTick: {show: false},//坐标轴刻度
          axisLine: {show: false},//坐标轴轴线
        },
        yAxis: {
          type: 'category',
          axisTick: {show: false},
          axisLine: {show: false},
          axisLabel: {show: false},
          data: ['a']//类目数据，在类目轴（type: 'category'）中有效。
          //如果没有设置 type，但是设置了axis.data,则认为type 是 'category'。
        },
        series: [//系列列表。每个系列通过 type 决定自己的图表类型
          {
            name: '%',//系列名称
            type: 'bar',//柱状、条形图
            barWidth: 24,//柱条的宽度,默认自适应
            data: [90],//系列中数据内容数组
            itemStyle: {//图形样式
              borderRadius: 4,//柱条圆角半径,单位px.
              //也可以分开设置[10,10,10,10]顺时针左上、右上、右下、左下
              color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [{
                    offset: 0,
                    color: option.color1
                  },
                    {
                      offset: 1,
                      color: option.color2
                    }
                  ]
              )
            },
            zlevel:1//柱状图所有图形的 zlevel 值,
                    //zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
          },
          {
            name: '进度条背景',
            type: 'bar',
            barGap: '-100%',//不同系列的柱间距离，为百分比。
            // 在同一坐标系上，此属性会被多个 'bar' 系列共享。
            // 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
            //并且是对此坐标系中所有 'bar' 系列生效。
            barWidth: 24,
            data: [100],
            color: '#000b33',//柱条颜色
            itemStyle: {
              borderColor: "#fff",
              borderRadius: 4
            }
          }
        ]
      })

      // 使用刚指定的配置项和数据显示图表。
      barLeft.setOption(option({
        color1: '#0093ff',
        color2: '#00e1ff',
        toolTip: '56万'
      }));
    },
    // 折线图
    initLineData () {
      const myChart = new this.$charts(this.$refs.fanLeft)
      const options = {
        title: {
          text: '新增用户量',
          style: {
            fill: '#25c7fd',
            fontSize: 17,
          }
        },
        xAxis: {
          name: '日期',
          data: ['4-29', '4-30', '5-01', '5-02', '5-03', '5-04', '5-05', '5-06', '5-07', '5-08'],
        },
        yAxis: {
          name: '数量',
          data: 'value'
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985, 5500, 6200, 7985],
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
      /*options.xAxis.data.forEach((item,index,arr) => {
        arr[index] += '日'
      })*/
      myChart.setOption(options)

    },
    // 柱状图
    initBarData () {
      const myChart = new this.$charts(this.$refs.barChart)
      const options = {
        xAxis: {
          name: '月份',
          data: ['1月', '2月', '3月', '4月', '5月', '6月']
        },
        yAxis: {
          name: '数量',
          data: 'value'
        },
        series: [
          {
            data: [2339, 1899, 2118, 1790, 3265, 4465],
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
      const myChart = this.$echarts.init(this.$refs.pieChart)
      const options = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        legend: {
          top: '10%',
          left: 'center',
          textStyle: {
            color: '#fff',
          }
        },
        series: [
          {
            name: '代理月收益额',
            type: 'pie',
            radius: ['30%', '50%'],
            top: '20%',
            avoidLabelOverlap: false,
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            label:{
              color: "#fff",
              fontSize: 16,
              formatter: '{b}({d}%)'
            },
            labelLine: {
              lineStyle: {
                color: '#e46a64',
              }
            },
            data: [
              { name: '可口可乐', value: 10 },
              { name: '百事可乐', value: 60 },
              { name: '哇哈哈', value: 20 },
              { name: '康师傅', value: 10 },
            ],
            itemStyle: {
              color: function (params) {
                var colorList = [
                  '#e46a64', '#28b1fc', '#8b6bed','#f9dd6c'
                ];
                return colorList[params.dataIndex]
              },
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
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
            return `<p style="color: rgba(255,255,255, .8)">省内商家数 &nbsp;<span style="color: #00aeff">${val.data.value}</span></p>
<p style="color: rgba(255,255,255, .8)">省内代理数 &nbsp;<span style="color: #00aeff">${val.data.value}</span></p>`
          })
        },
        series: [
          {
            name: Chinese_ || pName,
            type: 'map',
            mapType: pName,
            roam: false,//是否开启鼠标缩放和平移漫游
            data: seriesData,
            top: "middle",//组件距离容器的距离
            zoom:1.2,
            selectedMode : 'single',
            tooltip: {
              backgroundColor: 'rgba(0, 29, 122, .6)'
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
                borderColor: '#4df0fb',//区域边框颜色
                // areaColor:"rgba(5, 85, 201, 1)",//区域颜色
                areaColor:{
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [
                    {
                      offset: 0, color: '#0674e5' // 0% 处的颜色
                    },
                    {
                      offset: 0.3, color: '#0564d9' // 0% 处的颜色
                    },
                    {
                      offset: 0.6, color: '#0456da' // 100% 处的颜色
                    },
                    {
                      offset: 1, color: '#0237cd' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },//区域颜色
                shadowColor: 'rgba(255, 255, 255, 0.5)',
                shadowBlur: 10,

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
    position: absolute;
    top: 87px;
    left: 0;
    display: flex;
    flex: 1;
    height: calc(100vh - 87px);
    width: 100%;
    background: none;
    &-left{
      display: flex;
      flex-direction: column;
      padding: 0 14px;
      flex: 1;
      background: rgba(3,19,60,.5);
      .digital-chart{
        height: 488px;
        color: #fff;
        .main-content{
          width: 100%;
          height: 100%;
          .digital-chart_title{
            margin: 40px 0 20px;
            font-size: 18px;
            color: $fontColor;
          }
          .digital-items{
            display: flex;
            .digital-item{
              color: $whiteColor;
              &>*{
                height: 60px;
                line-height: 60px;

              }

              .digital-box{
                margin-right: 10px;
                width: 50px;
                text-align: center;
                background: rgba(47,95,233,.15);
                border: 1px solid #2a5ce5;
              }
              .digital-dot{
                font-weight: bold;
                padding: 20px 10px 0 0;
              }
            }
          }
          .digital-bar{
            margin-top: 40px;
            padding: 12px 20px;
            background: url("../assets/img/digital-bg.png") no-repeat;
            background-size: 100% 100%;
            width: 362px;
            height: 105px;
            box-sizing: border-box;
            &_title{
              margin-bottom: 10px;
              font-size: 34px;
            }
            &_main{
              display: flex;
              width: 100%;
              .digital-bar_desc{
                margin-right: 20px;
                white-space: nowrap;
                font-size: 18px;
              }
              .digital-bar_chart{
                flex: 1;
                height: 27px;
              }
            }
          }
        }
      }

      .fan-chart{
        flex: 1;
        .fan-common{
          width: 100%;
          height: 459px;
        }
      }
    }
    &-middle{
      margin: 0 10px;
      width: 939px;
      .banner{
        width: 100%;
        ::v-deep .box-header{
          display: none;
        }
        .main-content{
          width: 100%;
          .map{
            position: relative;
            width: 100%;
            height: 663px;
            .flyline-chart{
              pointer-events: none;
              position: absolute;
              top: 0;
              left: 0;
            }
            .map-shadow{
              position: relative;
              margin-top: 33px;
              pointer-events: none;
              width: 100%;
              height: 100%;
              opacity: 0.6;
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
        ::v-deep .box-header{
          background: url("../assets/img/longTitle.png") no-repeat;
          background-size: 100% 100%;
          background-position: center;
        }
        .main-content{
          display: flex;
          ::v-deep .dv-scroll-board{
            .header{
              color: #48ece7;
            }
            .rows{
              .row-item{
              }
            }
          }
        }
      }
    }
    &-right{
      background: rgba(3,19,60,.5);
      flex: 1;
      .tongji-box{
        width: 100%;
        height: 306px;
        .box-main{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          .main-item{
            display: flex;
            padding: 40px 14px;
            width: 49%;
            color: #fff;
            img{
              width: 36px;
              height: 41px;
              margin-right: 20px;
            }
            .main-item_right{
              .title{
                font-size: 24px;
              }
              .subtitle{
                font-size: 14px;
              }
            }
          }
        }
      }

      .shangjia-box{
        height: 341px;
        .bar-chart_container{
          width: 100%;
          height: 100%;
        }
      }

      .wushui-box{
        position: relative;
        margin-top: 16px;
        height: 312px;
        .pie-chart_container{
          width: 100%;
          height: 100%;
        }
      }
    }

  }

</style>
