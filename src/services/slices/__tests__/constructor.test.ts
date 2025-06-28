import constructorReducer, {
  addIngredient,
  removeIngredient,
  moveIngredient,
  clearConstructor,
} from '../constructor';

describe('constructorReducer', () => {
  const bun = {
    _id: 'bun1',
    type: 'bun',
    name: 'Булка',
    price: 100,
    image: '',
    image_mobile: '',
    image_large: '',
    calories: 0,
    carbohydrates: 0,
    fat: 0,
    proteins: 0,
    __v: 0,
  };

  const ingredient = {
    _id: 'main1',
    type: 'main',
    name: 'Начинка 1',
    price: 100,
    image: '',
    image_mobile: '',
    image_large: '',
    calories: 0,
    carbohydrates: 0,
    fat: 0,
    proteins: 0,
    __v: 0,
  };

  it('должен добавлять булку', () => {
    const state = constructorReducer(undefined, addIngredient(bun));
    expect(state.bun).toMatchObject({ _id: 'bun1' });
  });

  it('должен добавлять начинку', () => {
    const state = constructorReducer(undefined, addIngredient(ingredient));
    expect(state.ingredients.length).toBe(1);
    expect(state.ingredients[0]).toMatchObject({ name: 'Начинка 1' });
  });

  it('должен удалять ингредиент по id', () => {
    const item = { ...ingredient, id: 'id-to-remove' };
    const initialState = {
      bun: null,
      ingredients: [item],
    };

    const state = constructorReducer(initialState, removeIngredient('id-to-remove'));
    expect(state.ingredients).toEqual([]);
  });

  it('должен менять порядок ингредиентов', () => {
    const ing1 = { ...ingredient, id: '1' };
    const ing2 = { ...ingredient, id: '2' };

    const initialState = {
      bun: null,
      ingredients: [ing1, ing2],
    };

    const state = constructorReducer(initialState, moveIngredient({ fromIndex: 0, toIndex: 1 }));
    expect(state.ingredients).toEqual([ing2, ing1]);
  });

  it('должен очищать конструктор', () => {
    const initialState = {
      bun,
      ingredients: [ingredient],
    };

    const state = constructorReducer(initialState, clearConstructor());
    expect(state).toEqual({
      bun: null,
      ingredients: [],
    });
  });
});
