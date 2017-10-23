<template>
    <div class="app demofont" id="app">
        <p class="title">{{project}}</p>
        <page-nav></page-nav>
        <router-view/>
    </div>
</template>

<script>
    import store from './vuex/store';
    import pageNav from './components/page-navigator';
    export default {
        name: 'app',
        components: {
            pageNav
        },
        store: store,
        data() {
            return {
                project: 'demo页面'
            }
        }
    };

</script>

<style lang="scss">
    @import './styles/main.sass';
    .app {
        padding: 20px;
    }

    .title {
        font-size: $lfontSize;
        margin-bottom: 20px;
    }

</style>
