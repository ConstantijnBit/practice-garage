<template>
    <div>
        <nav-bar></nav-bar>
        <transition name="fade-fast" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Navbar from './components/final/Navbar'

export default {
    components: {
        'nav-bar': Navbar
    }
}
</script>
