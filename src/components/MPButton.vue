<template>
    <button :class="{ rounded: type === 'rounded', round: type === 'round' }">
        <slot />
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import { primaryColor } from "../style/globals";

@Component
export default class MPButton extends Vue {
    // @Prop() private msg!: string;
    // @Prop({default: 'John doe'}) readonly name: string
    // @Prop() private type!: 'square' | 'rounded' | 'round'
    @Prop() private type!: string;
    // @Prop() private style!: string;
}
</script>

<style scoped lang="scss">
button {
    // background-color: primaryColor;
    background-color: lightcyan;
    padding: 5px;
    border: 1px solid black;
    outline: none;
    cursor: pointer;
    &.rounded {
        border-radius: 10px;
    }
    &.round {
        border-radius: 50%;
    }
}
</style>
