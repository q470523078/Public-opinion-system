<template>
  <div id="container">
    <div id="container-left">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
         <a-menu
          theme="dark"
      style="width:100%;height:100vh;"
      mode="inline"
      :openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @openChange="onOpenChange"
    >
      <a-sub-menu key="sub1">
        <template #icon>
          <AreaChartOutlined />
        </template>
        <template #title>舆情分析数据</template>
        <a-menu-item key="1"  @click="jump('Alam')">Alam</a-menu-item>
        <a-menu-item key="2"  @click="jump('Home')">Home</a-menu-item>
        <a-menu-item key="3"  @click="jump('KeyWords')">KeyWords</a-menu-item>
        <a-menu-item key="4"  @click="jump('Report')">Report</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>
          
         舆情详情
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>舆情设置</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>
    </a-layout-sider>
    </div>
    <div id="container-right">
        <component class="right-item" :is="v"></component>
    </div>
   
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs,ref } from 'vue';
import { AreaChartOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import Alam from './admin/Alam.vue'
import Home from './admin/Home.vue'
import KeyWords from './admin/KeyWords.vue'
import Report from './admin/Report.vue'
export default defineComponent({
  setup() {
    const state = reactive({
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
      selectedKeys: [],
    });
    const onOpenChange = (openKeys: string[]) => {
      const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
      if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
    const v = ref('Alam')
    const jump = (item:string)=>{
      v.value = item
    }
    return {
      ...toRefs(state),
      onOpenChange,
      jump,
      v,
      collapsed: ref<boolean>(false)
    };
  },
  components: {
    AreaChartOutlined,
    AppstoreOutlined,
    SettingOutlined,
    Alam,
    Home,
    KeyWords,
    Report
  },
});
</script>
<style scoped>
  #container {
    display: flex;
  }
  #container.left{
  width: 20%;
  }
  #container-right{
    width:100%;
  }

</style>

