<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NGradientText } from "naive-ui";
import { useFoodStoreHook } from "../store/modules/foods"
import { Food, FoodItem } from "../utils/food.ts"
import { nanoid } from 'nanoid' 

const useFoodStore = useFoodStoreHook()

const typeList = ref<FoodItem[]>([
  //肉类
  {
    title: "肉类",
    foods: [
      { label: "肥牛", time: 15 },
      { label: "牛肉丸", time: 3 * 60 },
      { label: "五花肉", time: 1 * 60 },
      { label: "鹌鹑蛋", time: 1 * 60 }
    ],
  },
  //水产
  {
    title: "水产",
    foods: [
      { label: "虾", time: 3 * 60 },
      { label: "虾滑", time: 3 * 60 },
      { label: "鲍鱼", time: 2 * 60 },
      { label: "墨鱼仔", time: 5 * 60 }
    ]
  },
  //蔬菜
  {
    title: "蔬菜",
    foods: [
      { label: "白菜", time: 2 * 60 },
      { label: "茼蒿", time: 2 * 60 },
      { label: "海带", time: 3 * 60 },
      { label: "贡菜", time: 1 * 60 }
    ]
  }
])

const addFood = (food: Food) => {
  let newFood = JSON.parse(JSON.stringify(food))
  newFood.id=nanoid()
  useFoodStore.insertFood(newFood)
}

</script>

<template>
  <div class="choose-area">
    <n-gradient-text :size="20" type="success" class="tip"> 选择下锅的食物 </n-gradient-text>
    <div v-for="foodType in typeList" :key="foodType.title" class="food-item">
      <div class="title">{{ foodType.title }} </div>
      <n-button strong secondary type="primary" v-for="food in foodType.foods" :key="food.label" @click="addFood(food)">
        {{ food.label }}
      </n-button>
    </div>
    <div class="mark">（默认食材时间仅供参考）</div>
  </div>
</template>

<style scoped lang="scss">
.choose-area{
  margin-bottom: 20px;
  .tip{
  margin-bottom: 5px;
  text-align: left;
}
.food-item {
  display: flex;
  align-items: center;

  .title {
    margin-right: 10px;
    font-weight: 600;
    min-width:28px;
  }

  .n-button {
    margin-right: 5px;
  }

  margin-bottom: 10px;
}
}

</style>
