export default () => {
    (async () => {
        const recipes: Response = await fetch("https://dummyjson.com/recipes")
            .then(res => res.json());

        recipes.recipes.forEach(recipe => console.log(recipe.name));
    })();
};

type Response = {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
};

type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
};
