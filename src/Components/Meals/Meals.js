import { Fragment } from "react";
import MealsSummry from "./MealsSummary";

import AvailableMeals from "./AvailbleMeals";

const Meals = () => {
    return(
       <Fragment>
        <MealsSummry />
        <AvailableMeals />
       </Fragment>
    );
};
export default Meals;