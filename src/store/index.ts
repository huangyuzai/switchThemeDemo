import {defineStore} from "pinia"
import { ref, computed } from 'vue'
import { Names } from "@/store/store-name";
import { DefineStoreOptionsBase } from 'pinia-plugin-persistedstate'


export const useStore = defineStore(Names.INDEX, () => {
  // 是否为 tabbar 页面
  const isTabbar = ref<boolean>(false)

  // 切换是否为 tabbar 页面
  function checkTabbar (flag: boolean) {
    isTabbar.value = flag
  }
  return {
    isTabbar,
    checkTabbar
  }
}, {
  persist: true
} as DefineStoreOptionsBase)
