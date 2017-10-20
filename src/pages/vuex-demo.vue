<template>
    <section class='vuex-demo'>
        <p>Vuex:loading状态:{{loadingStatus}}</p>
        <button class="loading-button" @click="changeLoading">change loading</button>
    </section>
</template>
<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex';
    export default {
        components: {},
        filters: {},
        data() {
            return {}
        },
        created() {},
        mounted() {},
        destroyed() {},
        computed: {
            ...mapGetters({
                loadingStatus: 'loadingStatus'
            }),
            isLoading() {
                return this.$store.state.loading;
            }
        },
        methods: {
            ...mapActions({
                loadingCompleted: 'loadingCompleted',
                loading: 'loading'
            }),
            changeLoading() {
                if (this.loadingStatus) {
                    this.loadingCompleted()
                } else {
                    this.loading();
                }
            }
        }
    }

</script>
<style lang='scss' scoped>
    @import '../styles/variables.scss';
    .vuex-demo {
        color: $mainColor;
        background: $primaryColor;
    }

    .loading-button {
        background-color: #fff;
        border: 1px solid #000;
        margin: 10px;
        padding: 10px;
        border-radius: 6px;
    }

</style>
