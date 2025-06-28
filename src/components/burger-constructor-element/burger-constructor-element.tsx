// компонент BurgerConstructorElement
import { FC, memo } from 'react';
import { useDispatch } from '../../services/store';
import { removeIngredient, moveIngredient } from '../../services/slices/constructor';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
  ({ ingredient, index, totalItems }) => {
    const dispatch = useDispatch();

    // перемещаю элемент вниз
    const handleMoveDown = () => {
      if (index < totalItems - 1) {
        dispatch(moveIngredient({ 
          dragIndex: index, 
          hoverIndex: index + 1 
        }));
      }
    };

    // перемещаю элемент вверх
    const handleMoveUp = () => {
      if (index > 0) {
        dispatch(moveIngredient({ 
          dragIndex: index, 
          hoverIndex: index - 1 
        }));
      }
    };

    // удаляю ингредиент
    const handleClose = () => {
      dispatch(removeIngredient(ingredient.id));
    };

    return (
      <BurgerConstructorElementUI
        ingredient={ingredient}
        index={index}
        totalItems={totalItems}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
        handleClose={handleClose}
      />
    );
  }
);
