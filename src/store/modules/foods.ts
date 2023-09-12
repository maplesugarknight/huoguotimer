import { defineStore } from "pinia";
import { store } from "../index";
import { Food } from "../../utils/food.ts"

type FoodStore = {
    nowFoodList: Food[]
}

const useFoodStore = defineStore("food", {
    // 推荐使用 完整类型推断的箭头函数
    state: (): FoodStore => ({
        nowFoodList: []
    }),
    actions: {
        insertFood(food: Food) {
            food.countdown = food.time;
            this.nowFoodList.push(food);
        },
        deleteFood(food: Food) {
            const index = this.nowFoodList.findIndex(item => item.id === food.id);
            if (index !== -1) {
                this.nowFoodList.splice(index, 1);
            }
        },
    },
})

export function useFoodStoreHook() {
    return useFoodStore(store);
}