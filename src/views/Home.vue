<template>
  <dv-full-screen-container>
    <div class="container">
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
            <template #boxTitle>肉鸡加工</template>
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
  </dv-full-screen-container>
</template>

<script>
import bordeBox from '@/components/bordeBox.vue'
export default {
  name: 'Home',
  components: {
    bordeBox,
  },
  data () {
    return {
      isCloseAll: false,
      toolTipContent: {},
      nowTime: '',
      activeVideo: '',
      isShowVideoDialog: false,
      digitalData: '234567.66'
    }
  },
  mounted () {
    this.digitalData = Array(String(this.digitalData).length-1).fill(0).join('')
    setTimeout(() => {
      this.getEchartData()
      this.digitalData = '234567.66'
      this.$forceUpdate();

    })
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
    formatDigital (item) {
      console.log(item);
      return item === '.' ? '.' :{
        number: [Number(item)],
        content: '{nt}'
      }
    },
    btnEvent () {
      this.$router.push({path: './second'})
    },
    getEchartData () {
      this.roujiData()
    },
    // 肉鸡加工
    roujiData () {
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
          .digital-container{
            color: #fff;
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
