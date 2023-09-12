<template>
    <div>
        <n-gradient-text :size="20" type="success" class="tip"> 倒计时 </n-gradient-text>
        <n-button strong secondary type="error" @click="clear()">全部清空</n-button>
        <div v-for="(item, index) in nowList" :key="index" class="item">
            <div class="label">{{ item.label }}</div>
            <div class="time" v-if="item.countdown && item.countdown > 0">剩余 {{ item.countdown }} 秒</div>
            <div class="finish" v-else>←可以吃啦ヾ(≧▽≦*)o</div>
            <n-button strong secondary type="error" @click="removeFood(item)">删除</n-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useFoodStoreHook } from "../store/modules/foods"
import { Food } from "../utils/food.ts"
import { NButton, NGradientText } from "naive-ui";

const useFoodStore = useFoodStoreHook()

const nowList = ref<Food[]>([])

const removeFood = (food: Food) => {
    useFoodStore.deleteFood(food)
    nowList.value = useFoodStore.nowFoodList
}

watch(() => useFoodStore.nowFoodList, () => {
    nowList.value = useFoodStore.nowFoodList
},{immediate:true})

setInterval(() => {
    nowList.value.forEach(e => {
        if (e.countdown) {
            e.countdown--
        }
    })
}, 1000)

const clear = () => {
    nowList.value = []
    useFoodStore.nowFoodList = []
}

</script>

<style scpoed lang="scss">
.item {
    display: flex;
    align-items: center;
    font-size: 17px;
    margin-bottom: 10px;

    .label {
        font-weight: 600;
        margin-right: 15px;
    }

    .time {
        margin-right: 15px;
    }

    .finish {
        margin-right: 15px;
        color: red;
    }
}

.tip {
    margin-right: 15px;
}
</style>