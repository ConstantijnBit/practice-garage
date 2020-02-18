<template>
    <div>
      <nav-garage></nav-garage>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
    import nav from './components/garage/nav'
    export default {
      components: {
        'nav-garage': nav
      }
    }
</script>

<style></style>
