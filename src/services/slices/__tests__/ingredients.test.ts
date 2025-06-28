import ingredientsReducer, {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
} from '../ingredients';

describe('ingredientsReducer', () => {
  const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };

  it('должен установить isLoading в true на getIngredientsRequest', () => {
    const state = ingredientsReducer(initialState, getIngredientsRequest());
    expect(state.isLoading).toBe(true);
  });

  it('должен сохранить данные и выключить isLoading на getIngredientsSuccess', () => {
    const mockData = [{ _id: '1', name: 'Мясо' }];
    const state = ingredientsReducer(initialState, getIngredientsSuccess(mockData));
    expect(state.data).toEqual(mockData);
    expect(state.isLoading).toBe(false);
  });

  it('должен сохранить ошибку и выключить isLoading на getIngredientsFailed', () => {
    const error = 'Ошибка загрузки';
    const state = ingredientsReducer(initialState, getIngredientsFailed(error));
    expect(state.error).toBe(error);
    expect(state.isLoading).toBe(false);
  });
});
