export type Food = {
    id?:string;
    label: string;
    time: number;
    countdown?:number;
    timer?:any;
};

export type FoodItem = {
    title: string,
    foods: Food[],
}
