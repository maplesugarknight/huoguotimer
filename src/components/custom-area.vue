<template>
    <div class="custom-area">
        <n-gradient-text :size="20" type="success" class="tip"> 自定义食物 </n-gradient-text>
        <n-form ref="formRef" inline :label-width="55" :model="formValue" :rules="rules">
            <n-form-item label="食物" path="label">
                <n-input v-model:value="formValue.label" type="text" placeholder="食物名称" />
            </n-form-item>
            <n-form-item label="时间" path="time">
                <n-input-number v-model:value="formValue.time" placeholder="时间" :min="1" :show-button="false">
                    <template #suffix>秒</template>
                </n-input-number>
            </n-form-item>
            <n-form-item>
                <n-button strong secondary type="warning" @click="addFood()">添加</n-button>
            </n-form-item>
        </n-form>
    </div>
</template>

<script setup lang="ts">
import { NInput, NInputNumber, NButton, FormInst, NForm, NFormItem, NGradientText } from "naive-ui";
import { useFoodStoreHook } from "../store/modules/foods"
import { Food } from "../utils/food.ts"
import { reactive, ref } from 'vue'

const formValue = reactive<Food>({
    label: "",
    time: 1
})

const useFoodStore = useFoodStoreHook()
const formRef = ref<FormInst | null>(null)

const addFood = () => {
    formRef.value?.validate((errors) => {
        if (!errors) {
            let newFood = JSON.parse(JSON.stringify(formValue))
            useFoodStore.insertFood(newFood)
        } else {
            console.log(errors)
        }
    })
}

const rules = {
    label: {
        required: true,
        message: '请输入食物名称',
        trigger: 'blur'
    }
}
</script>

<style scpoed lang="scss"></style>