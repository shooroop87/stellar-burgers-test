import { rootReducer } from '../../store';

describe('rootReducer', () => {
  it('возвращает начальное состояние при неизвестном экшене', () => {
    const initialState = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });

    expect(initialState).toHaveProperty('ingredients');
    expect(initialState).toHaveProperty('burgerConstructor');
    expect(initialState).toHaveProperty('order');
    expect(initialState).toHaveProperty('user');
    expect(initialState).toHaveProperty('feed');
  });
});
