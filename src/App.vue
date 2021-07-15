<template>
  <!-- <div id="nav">
    <router-link to="/">admin</router-link> |
    <router-link to="/login">login</router-link>
  </div> -->
  <!-- <div id="main" style="width:300px;height:300px"></div> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


// <script>

// import * as echarts from 'echarts'
// import {onMounted} from 'vue'
// export default {
//   name: 'App',
//   components: {},
//   setup(){
//     let methodsMap = {
//       initEcharts(){
//         var chartDom = document.getElementById('main');
//         var myChart = echarts.init(chartDom);
//         var option;
//         // 绘制柱状图柱子
//         var MyCubeRect = echarts.graphic.extendShape({
//           shape: {
//             x: 0,
//             y: 0,
//             width: 8, //柱宽
//             zWidth: 0, //阴影折角宽
//             zHeight: 4, //阴影折角高
//           },
//           buildPath: function (ctx, shape) {
//             const api = shape.api;
//             // api.coord参数为一个数组，数组里面的参数分别是X，Y轴上的刻度，根据刻度转换为屏幕像素坐标系 
//             // shape.xValue是X轴每个刻度的值，这里是0 1 2,api.coord第二个参数0就是Y轴0刻度，api.coord([
//             // shape.xValue, 0])的意思是每个柱子底部的起始位置的坐标值，在图中的位置是柱子底部中间位置  
//             const xAxisPoint = api.coord([shape.xValue, 0]);
//             console.log('buildPath',shape.y)
//             // shape.x: 柱子的X轴距离左边缘的值（以柱子的中心位置计算）shape.y：柱子距离顶部的距离  
//             const p0 = [shape.x, shape.y];
//             const p1 = [shape.x - shape.width / 2, shape.y];
//             const p4 = [shape.x + shape.width / 2, shape.y];
//             const p2 = [xAxisPoint[0] - shape.width / 2, xAxisPoint[1]];
//             const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
//             ctx.moveTo(p0[0], p0[1]); //0
//             ctx.lineTo(p1[0], p1[1]); //1
//             ctx.lineTo(p2[0], p2[1]); //2
//             ctx.lineTo(p3[0], p3[1]); //3
//             ctx.lineTo(p4[0], p4[1]); //4
//             ctx.lineTo(p0[0], p0[1]); //0
//             ctx.closePath();
//           }
//         });
//         // 绘制矩形阴影边框
//         var MyCubeShadow = echarts.graphic.extendShape({
//           shape: {
//             x: 0,
//             y: 0,
//             width: 8,
//             // x轴偏移量     
//             zWidth: 4,
//             // y轴偏移量     
//             zHeight: 4
//           },
//           // 绘制路径，在窗口缩放的时候会自动执行重绘路径   
//           buildPath: function (ctx, shape) {
//             const api = shape.api;
//             const xAxisPoint = api.coord([shape.xValue, 0]);
//             // const p0 = [shape.x, shape.y];
//             const p1 = [shape.x - shape.width / 2, shape.y];
//             const p4 = [shape.x + shape.width / 2, shape.y];
//             const p6 = [shape.x + shape.width / 2 + shape.zWidth, shape.y - shape.zHeight];
//             const p7 = [shape.x - shape.width / 2 + shape.zWidth, shape.y - shape.zHeight];
//             const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
//             const p5 = [xAxisPoint[0] + shape.width / 2 + shape.zWidth, xAxisPoint[1] - shape.zHeight];
//             ctx.moveTo(p4[0], p4[1]); //4
//             ctx.lineTo(p3[0], p3[1]); //3
//             ctx.lineTo(p5[0], p5[1]); //5
//             ctx.lineTo(p6[0], p6[1]); //6
//             ctx.lineTo(p4[0], p4[1]); //4
//             ctx.moveTo(p4[0], p4[1]); //4
//             ctx.lineTo(p6[0], p6[1]); //6
//             ctx.lineTo(p7[0], p7[1]); //7
//             ctx.lineTo(p1[0], p1[1]); //1
//             ctx.lineTo(p4[0], p4[1]); //4
//             ctx.closePath();
//           }
//         });
//         // 注册用户自定义图形
//         echarts.graphic.registerShape('MyCubeRect', MyCubeRect);
//         echarts.graphic.registerShape('MyCubeShadow', MyCubeShadow);
//         var option = {
//           grid: {
//             height: 300
//           },
//           xAxis: {
//             data: ['one', 'two', 'three']
//           },
//           yAxis: {
//             type: 'value'
//           },
//           series: [{
//             type: 'custom',
//             renderItem: function (params, api) {
//             // api.value(0)为x轴坐标 api.value(1)为Y轴坐标，这里的坐标值是实际数值不是坐标的像素值     
//               let location = api.coord([api.value(0), api.value(1)]);
//               return {
//                 type: 'group',
//                 children: [{
//                   type: 'MyCubeRect',
//                   shape: {
//                     api,
//                     xValue: api.value(0),
//                     yValue: api.value(1),
//                     x: location[0],
//                     y: location[1]
//                   },
//                   style: {
//                     fill: '#5AD8A6'
//                   }
//                 }, {
//                   type: 'MyCubeShadow',
//                   shape: {
//                     api,
//                     xValue: api.value(0),
//                     yValue: api.value(1),
//                     x: location[0],
//                     y: location[1]
//                   },
//                   style: {
//                     fill: '#2DCF8E'
//                   }
//                 }]
//               };
//             },
//             data: [20, 60, 80]
//           }]
//         };
//         myChart.setOption(option);
//         option && myChart.setOption(option);
//         option && myChart.setOption(option);
//       }
//     }
//     onMounted(()=>{
//       methodsMap.initEcharts()
//     })
//     return {
//       ...methodsMap
//     }
//   }
// }
// </script>

