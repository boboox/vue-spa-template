<template>
    <section class='service-demo'>
        <p class="title">service demo</p>
        {{user}}
    </section>
</template>
<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    export default {
        components: {},
        filters: {},
        data() {
            return {
                user: ""
            }
        },
        created() {},
        mounted() {
            this.getUserInfo({}).then(data => {
                this.user = data.userInfo;
            })
        },
        destroyed() {},
        computed: {
            ...mapGetters({
                userInfo: 'userInfo'
            })
        },
        methods: {
            ...mapActions({
                getUserInfo: 'getUserInfo'
            })
        }
    }

</script>
<style lang="scss" scoped>
    @import '../styles/variables.scss';
    .service-demo {
        color: $mainColor;
        background: $primaryColor;
    }

    .title {
        font-size: $lfontSize;
    }

</style>
