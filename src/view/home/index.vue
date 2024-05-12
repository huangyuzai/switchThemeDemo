<template>
  <div class="home">
    <div class="test">
      这是首页
      <p>666</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.test {
  /* sass 方式 */
  @include useTheme {
    color: getVal('textColor')
  }
  /* css变量方式 */
  p {
    color: var(--text-color);
  }
}

</style>
