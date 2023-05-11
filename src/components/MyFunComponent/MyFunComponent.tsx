import MyButton from '../MyButton/MyButton';

import styles from './MyFunComponent.module.css';

const data = {
  headerText: 'Welcome to my fun component',
  displayHi: true,
  foods: [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ],
};

export default function MyFunComponent() {
  const listItems = data.foods.map((food) => (
    <li
      key={food.id}
      style={{
        color: food.isFruit ? 'magenta' : 'darkgreen',
      }}
    >
      {food.title}
    </li>
  ));

  return (
    <>
      <h2 className={styles.header}>Header: {data.headerText}</h2>
      <MyButton />
      <div>
        {data.displayHi ? 'Hi' : 'Bye'}
        {data.displayHi && 'Hi'}
      </div>
      <ul>{listItems}</ul>
      <ul>
        {data.foods.map((food) => (
          <li
            key={food.id}
            style={{
              color: food.isFruit ? 'magenta' : 'darkgreen',
            }}
          >
            {food.title}
          </li>
        ))}
      </ul>
    </>
  );
}
