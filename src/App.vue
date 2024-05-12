<template>
  <div id="app">
    <button @click="changeTheme">{{ dark ? '浅色模式' : '暗黑模式' }}</button>
    <router-view />
    <van-tabbar
      v-if="store.isTabbar"
      :active-color="tabbar.activeColor"
      :inactive-color="tabbar.inactiveColor"
      route
      placeholder
    >
      <van-tabbar-item
        v-for="item in tabbar.list"
        :key="item.name"
        :to="item.path"
        :icon="item.icon"
        replace
      >
        {{item.title}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { tabbar } from '@/config'
import { useStore } from '@/store/index'
import { ref } from 'vue'
const store = useStore()

console.log(store.isTabbar);

const dark = ref(false)
const _theme = window.sessionStorage.getItem('theme')
dark.value = _theme === 'dark'
document.documentElement.setAttribute('data-theme',  dark.value ? 'dark' : 'light')

const changeTheme = () => {
  dark.value = !dark.value
  document.documentElement.setAttribute('data-theme',  dark.value ? 'dark' : 'light')
   window.sessionStorage.setItem('theme', dark.value ? 'dark' : 'light')
}


</script>

<style lang="scss">
body {
  font-size: 16px;
  @include useTheme {
    background-color: getVal('bgColor');
  }
}
</style>
