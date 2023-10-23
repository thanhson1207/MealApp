import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealList from "../components/Meal List/MealList";

function MealsOverviewScreen({ route, navigation }) {

  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoriesTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoriesTitle,
    });
  }, [catId, navigation]);

  return <MealList items={displayMeals} />;
}

export default MealsOverviewScreen;
