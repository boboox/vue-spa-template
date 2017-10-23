<template>
    <div class="page-nav">
        <p class="title">
            页面导航(directive demo)
            <ul>
                <li>
                    <span class="link-button" v-link="{name:'service'}">service</span>
                </li>
                <li>
                    <span class="link-button" v-link="{name:'vuex'}">vuex</span>
                </li>
                <li>
                    <span class="link-button" v-link="{name:'filter'}">filter</span>
                </li>
                <li>
                    <span class="link-button" v-link="{name:'keenui'}">keenui</span>
                </li>
                <li>
                    <span class="link-button" v-link="{name:'iconfont'}">iconfont</span>
                </li>
            </ul>
        </p>
    </div>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex';
    export default {
        name: 'page-nav',
        data() {
            return {
                pageList: []
            }
        },
        computed: {

        },
        methods: {

        }
    };

</script>
<style lang="scss" scoped>


</style>
