import { RETURN_CATEGORIES } from '../actions/categoriesActions';
import initialState from '../config/initialState';

export default function categories(state = initialState, action) {
  switch (action.type) {
    case RETURN_CATEGORIES: {
      let newCategories = [{}];
        
      action.categories.map(category => {
        return newCategories.push({
          text: category.name,
          value: category.path,
        });
      });

      return [...newCategories];
    }

    default:
      return state;
  }
}