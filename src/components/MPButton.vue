<template>
    <button :class="['mp-button', { rounded: type === 'rounded', round: type === 'round', outlined: outlined }]">
        <img class="mp-loading-img" v-if="loading" src="https://i.gifer.com/ZZ5H.gif" alt="loading">
        <slot v-else class="mp-btn-content"/>
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MPButton extends Vue {
    @Prop() type?: string;
    @Prop({ default:false }) outlined?: boolean;
    @Prop({ default:false }) loading?: boolean;
}
</script>

<style scoped lang="scss">
.mp-button {
    background-color: #18C746;
    font-size: 16px;
    height: 56px;
    width: 100px;
    border: none;
    color: #ffffff;
    transition: backgroundColor, 0.3s;
    outline: none;
    cursor: pointer;
    img {
        height: 100%;
        object-fit: contain;
    }
    &.rounded {
        border-radius: 100px;
    }
    &.round {
        border-radius: 50%;
    }
    &.outlined {
        background-color: transparent;
        border: 1px solid #0084F4;
        color: inherit;
    }
}
</style>
