<template>
    <section class='keenui-demo demofont'>
        <a href="https://josephuspaye.github.io/Keen-UI/#/ui-switch">keenui link</a>
        <div>
            <p>buttons</p>
            <ui-button color="primary" :size="size">Normal</ui-button>
            <ui-button color="green" raised :size="size">Raised</ui-button>
            <ui-button color="green" :loading="loading" :size="size">Loading</ui-button>
            <ui-button color="green" disabled :size="size">Disabled</ui-button>
        </div>
        <div>
            <p>switch</p>
            <ui-switch name="switch" label="Switch !!" v-model="switchValue"></ui-switch>
        </div>
        <div>
            <p>icon</p>
            <i class="icon-wallet"></i>
            <ui-icon-button>
                <slot name="icon">
                    <i class="icon-wallet"></i>
                </slot>
            </ui-icon-button>
        </div>
    </section>
</template>
<script>
    import 'keen-ui/src/bootstrap';
    export default {
        components: {},
        data() {
            return {
                size: 'normal',
                iconPosition: 'left',
                loading: true,
                menuOptions: '',
                switchValue: false
            };
        }
    }

</script>
<style lang='scss' scoped>
    .keenui-demo {
        height: 100%;
    }

</style>
