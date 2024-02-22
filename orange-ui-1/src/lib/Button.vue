<template>
    <button class="orange-button" :class="classes" :disabled="props.disabled">
        <div v-if="loading" class="loading-indicator"></div>
        <slot></slot>
    </button>
</template>
  
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    theme: {
        type: String,
        default: 'button'
    },
    size: {
        type: String,
        default: 'normal'
    },
    level: {
        type: String,
        default: 'normal'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
})

const classes = computed(() => {
    const { theme, size, level } = props
    return {
        [`orange-theme-${theme}`]: theme,
        [`orange-size-${size}`]: size,
        [`orange-level-${level}`]: level,
    }
})

console.log(props);


</script>
  
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$orange: #ff9900;
$grey: grey;

@keyframes loading-rotate {
    0% {
        rotate: 0deg;
    }

    100% {
        rotate: 360deg;
    }
}

.orange-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    >.loading-indicator {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid $blue;
        border-top: 1px solid transparent;
        display: inline-block;
        margin-right: 8px;
        animation-name: loading-rotate;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    &.orange-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $blue;

        &:hover,
        &:focus {
            color: lighten($blue, 5%);
        }
    }

    &.orange-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;

        &:hover,
        &:focus {
            background: darken(white, 5%);
            ;
        }
    }

    &.orange-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }

    &.orange-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }

    &.orange-theme-button {
        &.orange-level-main {
            background: $blue;
            color: white;
            border-color: $blue;

            &:hover,
            &:focus {
                background: darken($blue, 5%);
                border-color: darken($blue, 5%);
            }
        }

        &.orange-level-warning {
            background: $orange;
            color: white;
            border-color: $orange;

            &:hover,
            &:focus {
                background: darken($orange, 5%);
                border-color: darken($orange, 5%);
            }
        }

        &.orange-level-danger {
            background: $red;
            border-color: $red;
            color: white;

            &:hover,
            &:focus {
                background: darken($red, 5%);
                border-color: darken($red, 5%);
            }
        }
    }

    &.orange-theme-link {

        &.orange-level-warning {
            color: $orange;

            &:hover,
            &:focus {
                color: darken($orange, 5%);
            }
        }

        &.orange-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 5%);
            }
        }
    }

    &.orange-theme-text {
        &.orange-level-main {
            color: $blue;

            &:hover,
            &:focus {
                color: darken($blue, 5%);
            }
        }

        &.orange-level-warning {
            color: $orange;

            &:hover,
            &:focus {
                color: darken($orange, 5%);
            }
        }

        &.orange-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 5%);
            }
        }
    }

    &.orange-theme-button {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;

            &:hover {
                border-color: $grey;
            }
        }
    }

    &.orange-theme-link,
    &.orange-theme-text {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }
    }
}
</style>
  