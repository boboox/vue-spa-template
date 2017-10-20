<template>
    <section class='filter-demo'>
        <p>filter demo</p>
        {{number | number}}
    </section>
</template>
<script>
    export default {
        data() {
            return {
                number: 9999999
            }
        }
    }

</script>
<style lang='scss' scoped>
    @import '../styles/variables.scss';

    .filter-demo {
        color: $mainColor;
        background: $primaryColor;
    }

</style>
