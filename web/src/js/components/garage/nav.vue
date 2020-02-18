<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <span class="navbar-brand">Practice Garage</span>
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" :to="{ name:'home' }">Home</router-link>
                <router-link class="nav-item nav-link" :to="{ name:'garages' }">Garages</router-link>
            </div>
        </nav>
        <span class="spacer"></span>
    </div>
</template>