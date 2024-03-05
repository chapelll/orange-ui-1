<template>
    <div class="validate-input-container pb-3">
        <div class="input-wrapper">
            <input v-bind="attrs" :type="!showPassword && attrs.type == 'password' ? 'password' : 'text'"
                class="form-control" :class="{ 'is-invalid': inputRef.error, 'disabled': attrs.hasOwnProperty('disabled') }"
                v-model="inputRef.val" @blur="validateInput" @input="updateModelValue">
            <svg class="icon" v-if="attrs.type == 'password' && props.modelValue" @click="togglePassword">
                <use :xlink:href="showPassword ? '#i-yanjing-kai' : '#i-yanjing-guan'"></use>
            </svg>
        </div>
        <div class="invalid-feedback" style="display: block;" v-if="inputRef.error">
            {{ inputRef.message }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, reactive, useAttrs, ref, } from 'vue';

interface RuleProp {
    type: string;
    message: string;
}
type RulesProp = RuleProp[]

defineOptions({
    inheritAttrs: false
})
const attrs = useAttrs()

const showPassword = ref(false)

const props = defineProps({
    rules: {
        type: Array as PropType<RulesProp>
    },
    modelValue: {
        type: String
    }
})
const emits = defineEmits(['update:modelValue'])

const inputRef = reactive({
    val: props.modelValue || '',
    error: false,
    message: '',
})

const updateModelValue = (e: KeyboardEvent) => {
    if (e) {
        const targetValue = (e.target as HTMLInputElement).value
        inputRef.val = targetValue
        emits('update:modelValue', targetValue)
    }
}

const inputType = ref('text')
const togglePassword = () => {
    showPassword.value = !showPassword.value
    showPassword.value ? inputType.value = 'password' : inputType.value = 'text'
}

const validateInput = () => {
    if (!props.rules) {
        return true
    }

    let pass = true
    let rules = props.rules

    for (let i = 0; i < rules.length; i++) {
        if (rules[i].type == 'required') {
            pass = !(inputRef.val.trim() === '')

            if (!pass) {
                inputRef.error = true
                inputRef.message = rules[i].message
                return
            }
        } else if (rules[i].type == 'email') {
            const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            pass = emailReg.test(inputRef.val)

            if (!pass) {
                inputRef.error = true
                inputRef.message = rules[i].message
                return
            }
        }
    }

    // 到这里就视为通过
    // inputRef.error = false
    // inputRef.message = ''
    console.log(inputRef);
    
    return pass
}
</script>

<style lang="scss" scoped>
.input-wrapper {
    position: relative;

    >.disabled {
        color: #ccc;
        opacity: 0.8;
        cursor: not-allowed;
    }

    .icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 2rem;
    }
}
</style>