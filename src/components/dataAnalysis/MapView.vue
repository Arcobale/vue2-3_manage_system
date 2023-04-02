<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from '@/assets/data.json';
export default {
  data() {
    return {

    }
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById('main'));
    this.$echarts.registerMap('china', geoJson); //注册可用的地图
    let option = {
      //地理坐标系组件
      geo: {
        map: 'china',
        aspectScale: 0.75, // 地图长宽比
        zoom: 1.1,
        regions: [{
          name: '南海诸岛',
        }]
      },
      //配置地图相关参数，绘制地图，关于地图图表的相关设置
      series: [
        {
          type: 'map',
          zoom: 1.1,
          map: 'china',
        }
      ]
    };
    myChart.setOption(option);
  }
}
</script>

<style lang="scss">
.map-view {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>