<template>
    <div class="validate-input-container pb-3">
        <input type="text" class="form-control" :class="{ 'is-invalid': inputRef.error }" v-model="inputRef.val"
            @blur="validateInput" @input="updateModelValue">
        <div class="invalid-feedback" v-if="inputRef.error">
            {{ inputRef.message }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType, reactive } from 'vue';

interface RuleProp {
    type: string;
    message: string;
}
type RulesProp = RuleProp[]



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
        emits('update:modelValue',targetValue)
    }
}

const validateInput = () => {
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

    // 在这里就视为通过
    inputRef.error = false
    inputRef.message = ''
    return pass
}
</script>