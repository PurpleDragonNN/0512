<template>
  <div class="container" :style="resize">
    <div class="header">
      <p class="title">圣越产业园</p>
      <div class="next-btn" @click="btnEvent">全产业链<img src="../assets/img/next.png" alt=""></div>
    </div>
    <div class="main">
      <div class="main-left">
        <bordeBox class="pie-chart">
          <template #boxTitle>羽肠粉加工</template>
          <template #boxMain>
            <div class="main-content">
              <div class="content-left content-common">
                <div ref="doughnutLeft" class="doughnut"></div>
              </div>
              <div class="content-right content-common">
                <div ref="doughnutRight" class="doughnut"></div>
              </div>
            </div>
          </template>
        </bordeBox>
        <div class="bar-chart_box">
          <bordeBoxTriangle class="bar-chart">
            <template #boxTitle>有机肥</template>
            <template #boxMain>
              <div class="main-content">
                <div class="content-left content-common">
                  <p class="bar-number">56万</p>
                  <p class="bar-unit">累计（吨）</p>
                </div>
                <div class="content-right content-common">
                  <div ref="barLeft" class="bar-echart"></div>
                  <p class="bar-text">今年累计生产有机肥</p>
                </div>
              </div>
            </template>
          </bordeBoxTriangle>
          <bordeBoxTriangle class="bar-chart">
            <template #boxTitle>饲料</template>
            <template #boxMain>
              <div class="main-content">
                <div class="content-left content-common">
                  <p class="bar-number">60万</p>
                  <p class="bar-unit">年产能（吨）</p>
                </div>
                <div class="content-right content-common">
                  <div ref="barRight" class="bar-echart"></div>
                  <p class="bar-text">设计年产能60万吨</p>
                </div>
              </div>
            </template>
          </bordeBoxTriangle>
        </div>
        <bordeBox class="fan-chart">
          <template #boxTitle>肉鸡加工</template>
          <template #boxMain>
            <div class="main-content">
              <div class="content-left content-common">
                <div ref="fanLeft" class="fan-common"></div>
              </div>
              <div class="content-right content-common">
                <div ref="fanRight" class="fan-common"></div>
              </div>
            </div>
          </template>
        </bordeBox>
        <bordeBox class="water-bubble">
          <template #boxTitle>孵化</template>
          <template #boxMain>
            <div class="main-content">
              <div class="content-left content-common">
                <div class="water-bubble_left">
                  <div ref="liquidFillLeft" class="liquid-fill"></div>
                  <p class="left_title">柳咀孵化中心</p>
                </div>
                <div class="water-bubble_right">
                  <p class="right-desc1">设计年孵化</p>
                  <p class="right-desc2">
                    <i>4800</i> 万羽
                  </p>
                </div>
              </div>
              <div class="content-right content-common">
                <div class="water-bubble_left">
                  <div ref="liquidFillRight" class="liquid-fill"></div>
                  <p class="left_title">瓜坪孵化中心</p>
                </div>
                <div class="water-bubble_right">
                  <p class="right-desc1">设计年孵化</p>
                  <p class="right-desc2">
                    <i>1亿</i> 羽
                  </p>
                </div>
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
              <div class="banner-box">
                <img class="banner-img" src="../assets/img/banner.jpg" alt="">
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
          <template #boxTitle>监控视频展示区域</template>
          <template #boxMain>
          </template>
        </bordeBox>
        <bordeBox class="wushui-box">
          <template #boxTitle>污水处理厂</template>
          <template #boxMain>
            <div class="main-content">
              <div class="wushui-left wushui-common">
                <span class="left-title">污水处理一厂</span>
                <p class="left-desc">
                  <span>2000</span>立方米
                </p>
              </div>
              <div class="wushui-right wushui-common">
                <span class="left-title">污水处理二厂</span>
                <p class="left-desc">
                  <span>7000</span>立方米
                </p>
              </div>
              <img src="../assets/img/wushui.png" alt="">
              <p class="wushui-title">日处理污水量</p>
            </div>
          </template>
        </bordeBox>
      </div>
    </div>
  </div>
</template>

<script>
import bordeBox from '@/components/bordeBox.vue'
import bordeBoxTriangle from '@/components/bordeBoxTriangle.vue'
export default {
  name: 'Home',
  components: {
    bordeBox,
    bordeBoxTriangle
  },
  data () {
    return {
      resize: {},
      isCloseAll: false,
      toolTipContent: {},
      nowTime: '',
      activeVideo: '',
      isShowVideoDialog: false
    }
  },
  mounted () {
    this.resizeFn()
    window.onresize = this.resizeFn
    this.getEchartData()
    setInterval(() => {
      let date = new Date()
      let week = new Date().getDay()
      let weekObj = {
        0: '天',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
      }
      let month = date.getMonth()<10 ? '0'+(date.getMonth()+1) : date.getMonth()
      this.nowTime = `${month}-${date.getDate()}-${date.getFullYear()} 星期${weekObj[week]} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },1000)
  },
  methods: {
    showTips (item,e) {
      let win_w = document.documentElement.clientWidth ||  document.body.clientWidth
      let win_h = document.documentElement.clientHeight || document.body.clientHeight
      let ratioX = win_w / 1920
      let ratioY = win_h / 1080;
      this.toolTipContent = {
        title: item.tip,
        desc: item.desc,
        left: e.pageX/ratioX+'px',
        top: e.pageY/ratioY+80+'px',
        imgUrls: item.imgUrls
      }
    },
    btnEvent () {
      this.$router.push({path: './second'})
    },
    getEchartData () {
      this.yuchangfenData()
      this.roujiData()
      this.youjifeiData()
      // this.fuhuaData()
    },
    // 羽肠粉加工
    yuchangfenData () {
      let doughnutLeft = this.$echarts.init(this.$refs.doughnutLeft);
      let doughnutRight = this.$echarts.init(this.$refs.doughnutRight);
      // 指定图表的配置项和数据
      const optionDiff = [
        {
          title: '羽肠粉一厂',
          value1: '29328',
          value2: '9734',
          desc1: '{a|设计年产能加工羽毛 }{x|29328吨}',
          desc2: '{b|设计年产能加工肉骨 }{x|9734吨}',
          color1: '#00d7ff',
          color2: '#ede022',
        },
        {
          title: '羽肠粉二厂',
          value1: '50000',
          value2: '12960',
          desc1: '{a|设计年产能加工羽毛鸡肠 }{x|5万吨}',
          desc2: '{b|设计年产能加工肉骨 }{x|12960吨}',
          color1: '#42eb86',
          color2: '#227ded',
        },
      ]
      let option = (index) => ({
        tooltip: {
          trigger: 'item',
          formatter: function(param) {
            return param.value+'吨'
          }
        },
        color: [optionDiff[index].color1,optionDiff[index].color2],
        legend: {
          bottom: '10%',
          left: '5%',
          formatter: (params) => {
            const obj = {
              more: optionDiff[index].desc1,
              less: optionDiff[index].desc2,
            }
            return obj[params]
          },
          textStyle: {
            color: '#fff',
            rich: {
              a: {
                fontSize: 14,
                color: '#fff'
              },
              x: {
                fontSize: 18,
                color: '#00d7ff'
              },
            }
          },
          icon: 'roundRect',
        },
        title: {
          text: optionDiff[index].title,
          left: 'center',
          top: '30%',
          textStyle: {
            color: '#fff',
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['42%', '54%'],
            center: ['center','35%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },

            labelLine: {
              show: false
            },
            data: [
              {value: optionDiff[index].value1, name: 'more'},
              {value: optionDiff[index].value2, name: 'less'}
            ]
          }
        ]
      })

      // 使用刚指定的配置项和数据显示图表。
      doughnutLeft.setOption(option(0));
      doughnutRight.setOption(option(1));

    },
    // 肉鸡加工
    roujiData () {
      let fanLeft = this.$echarts.init(this.$refs.fanLeft);
      let fanRight = this.$echarts.init(this.$refs.fanRight);
      // 指定图表的配置项和数据
      const optionDiff = [
        {
          title: '肉鸡加工一厂',
          value1: '29328',
          value2: '9734',
          desc: '{a|3000}{b|万羽}\n{x|设计年产能屠宰}',
          color: '#00d7ff',
          colorStops: ['#3d78c9','#63f9fd'],
          fontColor: '#00d7ff'
        },
        {
          title: '肉鸡加工二厂',
          value1: '50000',
          value2: '12960',
          desc: '{a|46500}{b|万羽}\n{x|设计年产能屠宰}',
          color: '#42eb86',
          colorStops: ['#ffb318','#ffd725'],
          fontColor: '#ffc51e'
        },
      ]
      let option = (index) => ({
        title: {
          text: optionDiff[index].title,
          left: 'center',
          top: '75%',
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        },
        series: [{
          type: 'gauge',
          radius: '105%',
          center: ['50%', '58%'],
          startAngle: 195,
          endAngle: -15,
          splitNumber: -1,
          axisLine: {
            lineStyle: {
              width: 25,
              color: [[1, '#051c48']],
            }
          },
          progress: {
            show: true,
            width: 25,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 1, color: optionDiff[index].colorStops[0] // 0% 处的颜色
                }, {
                  offset: 0, color: optionDiff[index].colorStops[1] // 100% 处的颜色
                }],
              }
            }
          },
          pointer: {
            show:false
          },

          detail: {
            show: false,
            valueAnimation: true,
            fontSize: 80,
            offsetCenter: [0, '70%']
          },
          data: [{
            value: 90,
            name: optionDiff[index].desc,
            title: {
              offsetCenter: [0, '-10%'],
              rich: {
                a: {
                  fontSize: 22,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  color: optionDiff[index].fontColor
                },
                b: {
                  fontSize: 14,
                  color: optionDiff[index].fontColor
                },
                x: {
                  fontSize: 14,
                  color: optionDiff[index].fontColor
                },
              }
            }
          }]
        }]
      })

      // 使用刚指定的配置项和数据显示图表。
      fanLeft.setOption(option(0));
      fanRight.setOption(option(1));

    },
    // 有机肥、饲料
    youjifeiData () {
      let barLeft = this.$echarts.init(this.$refs.barLeft);
      let barRight = this.$echarts.init(this.$refs.barRight);
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
      barRight.setOption(option({
        color1: '#38f8d1',
        color2: '#43eb83',
        toolTip: '60万'
      }));

    },

    // 孵化
    fuhuaData () {
      let liquidFillLeft = this.$echarts.init(this.$refs.liquidFillLeft);
      let liquidFillRight = this.$echarts.init(this.$refs.liquidFillRight);
      let option = (option) => ({
        series: [{
          type: 'liquidFill',
          name: option.name,
          radius: '96%',
          data: [{
            value: option.num,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                  0, 1, 0, 0, // 4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
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
          }],
          backgroundStyle: {
            shadowBlur: -4,
            shadowOffsetY: -3,
            shadowColor: option.color1
          },
          label: {
            show: false
          },
          outline: {
            show: true,
            itemStyle: {
              borderWidth: 2,
              borderColor: option.color1,
              shadowBlur: 10,
              shadowColor: option.color1,
              opacity: 0.1
            }
          }
        }],
        tooltip: {
          show: true,
          formatter: function(param) {
            return param.seriesName;
          }
        }
      })

      // 使用指定的配置项和数据显示图表。
      liquidFillLeft.setOption(option({
        color1: '#0093ff',
        color2: '#00e1ff',
        name: '4800万羽',
        num: 0.6
      }));
      liquidFillRight.setOption(option({
        color1: '#f58329',
        color2: '#fff32a',
        name: '1亿羽',
        num: 0.6
      }));

    },
    // 自适应
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

    openVideo(item){
      this.activeVideo = item.videoUrl
      this.isShowVideoDialog = true
    },
  }
}
</script>
<style scoped lang="scss">
@import "src/assets/css/common";
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
          .content-common{
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .content-left{
            flex: 1;
          }
          .content-right{
            flex: 1;
          }
          .doughnut{
            width: 100%;
            height: 100%;
          }
        }
      }

      .bar-chart_box{
        display: flex;
        margin-bottom: 20px;
        height: 145px;
        font-size: 13px;
        .bar-chart{
          flex: 1;
          color: #fff;
          &:last-child{
            margin-left: 10px;
          }
          .main-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 10px;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            .content-common{
            }
            .content-left{
              .bar-number{
                margin-bottom: 10px;
                font-size: 36px;
                color: $fontColor;
              }
            }
            .content-right{
              .bar-echart{
                width: 100%;
                height: 55px;
              }
            }
          }
        }
      }

      .fan-chart{
        height: 210px;
        .fan-common{
          width: 100%;
          height: 100%;
        }
        @extend .pie-chart
      }
      .water-bubble{
        height: 200px;
        @extend .pie-chart;
        .content-common{
          flex-direction: row !important;
          color: #fff;
          .water-bubble_left{
            margin: 0 10px;
            text-align: center;
          }
          .water-bubble_right{
            .right-desc2{
              margin-top: 10px;
              i{
                font-size: 20px;
                color: $fontColor;
                font-weight: bold;
                font-style: normal;
              }
            }
          }
          .liquid-fill{
            width: 106px;
            height: 106px;
          }
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
          .banner-box{
            position: relative;

            .banner-img{
              width: 100%;
            }
          }
        }
      }

      .introduction{
        .main-content{
          display: flex;
          padding: 19px 22px;
          color: #fff;
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
      }

      .wushui-box{
        position: relative;
        .main-content{
          width: 100%;
          height: 320px;
          .wushui-common{
            color: #fff;
            top: 18%;
            .left-title{

            }
            .left-desc{
              span{
                font-size: 30px;
              }
            }
            &.wushui-left{
              position: absolute;
              left: 20%;
              .left-desc{
                color: rgba(111,236,255,.8);
                span{
                }
              }
            }
            &.wushui-right{
              position: absolute;
              right: 16%;
              .left-desc{
                color: rgba(255,231,111,.8);
                span{
                }
              }
            }
          }
          img{
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translateX(-50%);
          }
          .wushui-title{
            @extend img;
            top: 90%;
            font-size: 18px;
            color: #fff;
          }
        }
      }
    }

  }

</style>
