<template>
  <dv-full-screen-container>
    <div class="map">
      <div id="china-map"></div>
      <dv-flyline-chart-enhanced class="flyline-chart" :config="config" dev style="width:1000px;height:900px;" />
    </div>
  </dv-full-screen-container>
</template>

<script>
  require('../assets/js/china.js')
  // require('../assets/js/map/province/yunnan.js')
  var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
  var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];
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
    }
  ];
  export default {
    name: 'Map',

    components: {},

    props: {},

    data() {
      return {
        config: {
          points: [
            {
              name: '郑州',
              coordinate: [0.48, 0.35]
            },
            {
              name: '新乡',
              coordinate: [0.63, 0.63]
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
            {
              name: '洛阳',
              coordinate: [0.36, 0.38]
            },
            {
              name: '周口',
              coordinate: [0.62, 0.55]
            },
            {
              name: '漯河',
              coordinate: [0.56, 0.56]
            },
            {
              name: '南阳',
              coordinate: [0.37, 0.66]
            },
            {
              name: '信阳',
              coordinate: [0.55, 0.81]
            },
            {
              name: '驻马店',
              coordinate: [0.55, 0.67]
            },
            {
              name: '济源',
              coordinate: [0.37, 0.29]
            },
            {
              name: '三门峡',
              coordinate: [0.20, 0.36]
            },
            {
              name: '商丘',
              coordinate: [0.76, 0.41]
            },
            {
              name: '鹤壁',
              coordinate: [0.59, 0.18]
            },
            {
              name: '濮阳',
              coordinate: [0.68, 0.17]
            },
            {
              name: '安阳',
              coordinate: [0.59, 0.10]
            }
          ],
          lines: [
            {
              source: '新乡',
              target: '郑州'
            },
            {
              source: '焦作',
              target: '郑州'
            },
            {
              source: '开封',
              target: '郑州'
            },
            {
              source: '许昌',
              target: '郑州'
            },
            {
              source: '平顶山',
              target: '郑州'
            },
            {
              source: '洛阳',
              target: '郑州'
            },
            {
              source: '周口',
              target: '郑州'
            },
            {
              source: '漯河',
              target: '郑州'
            },
            {
              source: '南阳',
              target: '郑州'
            },
            {
              source: '信阳',
              target: '郑州'
            },
            {
              source: '驻马店',
              target: '郑州'
            },
            {
              source: '济源',
              target: '郑州'
            },
            {
              source: '三门峡',
              target: '郑州'
            },
            {
              source: '商丘',
              target: '郑州'
            },
            {
              source: '鹤壁',
              target: '郑州'
            },
            {
              source: '濮阳',
              target: '郑州'
            },
            {
              source: '安阳',
              target: '郑州'
            }
          ],
          bgImgSrc: ''
        }
      }
    },

    created() {

    },

    computed: {},

    watch: {},

    mounted () {
      setTimeout(() => {
        this.initEcharts("china")
      })
    },
    methods: {
      initEcharts(pName, Chinese_) {
        var tmpSeriesData = pName === "china" ? seriesData : [];

        var option = {
          title: {
            text: Chinese_ || pName,
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (p / km2)'
          },
          series: [
            {
              name: Chinese_ || pName,
              type: 'map',
              mapType: pName,
              roam: false,//是否开启鼠标缩放和平移漫游
              data: tmpSeriesData,
              top: "3%",//组件距离容器的距离
              zoom:1.1,
              selectedMode : 'single',

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
                  areaColor:"#4ea397",//区域颜色

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

        if (pName === "china") { // 全国时，添加click 进入省级
          myChart.on('click', param => {
            console.log(param);
            console.log(param.name);
            // 遍历取到provincesText 中的下标  去拿到对应的省js
            for (var i = 0; i < provincesText.length; i++) {
              if (param.name === provincesText[i]) {
                //显示对应省份的方法
                this.showProvince(provinces[i], provincesText[i]);
                break;
              }
            }
            if (param.componentType === 'series') {
              var provinceName =param.name;
              // $('#box').css('display','block');
              // $("#box-title").html(provinceName);

            }
          });
        } else { // 省份，添加双击 回退到全国
          myChart.on("dblclick", () => {
            this.initEcharts("china", "中国");
          });
        }
      },
      // 展示对应的省
      showProvince(pName, Chinese_) {
        //这写省份的js都是通过在线构建工具生成的，保存在本地，需要时加载使用即可，最好不要一开始全部直接引入。
        this.loadBdScript('$' + pName + 'JS', require('../assets/js/map/province/' + pName + '.js'), () => {
          this.initEcharts(Chinese_);
        });
      },
      // 加载对应的JS
      loadBdScript(scriptId, url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) {  //IE
          script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
              script.onreadystatechange = null;
              callback();
            }
          };
        } else {  // Others
          script.onload = function () {
            callback();
          };
        }
        script.src = url;
        console.log('url:',url);
        script.id = scriptId;
        document.getElementsByTagName("head")[0].appendChild(script);
      }
    }
  }
</script>

<style lang="scss" scoped>
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

</style>
