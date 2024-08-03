export interface Meal {
  name: string;
  description: string;
  price: number;
  bookmark: boolean;
  imageUrl: string;
}

export const MEALS_DUMMY_DATA: Meal[] = [
  {
    name: 'Cheeseburger',
    description:
      'A juicy beef patty with melted cheese, lettuce, tomato, and pickles on a toasted bun.',
    price: 8.9999999,
    bookmark: true,
    imageUrl:
      'https://i.pinimg.com/564x/e9/7f/4b/e97f4b9280e8e9ec718553aa27a6ac65.jpg',
  },
  {
    name: 'Buffalo Wings',
    description:
      'Crispy fried chicken wings tossed in a tangy buffalo sauce, served with blue cheese dip.',
    price: 12.1414141,
    bookmark: false,
    imageUrl:
      'https://i.pinimg.com/564x/e1/6c/6a/e16c6abdb9e04596239436e47178c1cc.jpg',
  },
  {
    name: 'BBQ Ribs',
    description:
      'Slow-cooked pork ribs glazed with a smoky barbecue sauce, served with coleslaw and fries.',
    price: 18.7777777,
    bookmark: false,
    imageUrl:
      'https://i.pinimg.com/564x/b9/41/61/b94161708aef22a007aec44c44a8d902.jpg',
  },
  {
    name: 'Mac and Cheese',
    description:
      'Creamy macaroni pasta baked with a blend of cheddar and mozzarella cheese.',
    price: 7.3333333,
    bookmark: false,
    imageUrl:
      'https://i.pinimg.com/564x/79/4c/e9/794ce94f0e5b8913f1edc6dddfb8b851.jpg',
  },
  {
    name: 'Caesar Salad',
    description:
      'Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.',
    price: 10.2222222,
    bookmark: false,
    imageUrl:
      'https://i.pinimg.com/564x/07/b3/fa/07b3fa5f80454a92f323140a4504ad23.jpg',
  },
  {
    name: 'Apple Pie',
    description:
      'Classic apple pie with a flaky crust and cinnamon-spiced apple filling.',
    price: 5.5555555,
    bookmark: false,
    imageUrl:
      'https://i.pinimg.com/564x/1d/79/8a/1d798a2f99c9e3d88e0ae6a2c6951112.jpg',
  },
  {
    name: 'Clam Chowder',
    description:
      'Hearty New England clam chowder made with tender clams, potatoes, and cream.',
    price: 9.9999999,
    bookmark: false,
    imageUrl:
      'https://i.pinimg.com/236x/3a/39/93/3a399390accf9dfd549f7e143f22611a.jpg',
  },
  {
    name: 'Pancakes',
    description: 'Fluffy pancakes served with butter and maple syrup.',
    price: 6.4444444,
    bookmark: false,
    imageUrl:
      'https://i.pinimg.com/236x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg',
  },
  {
    name: 'Fried Chicken',
    description: 'Crispy fried chicken with a golden, crunchy coating.',
    price: 14.8888888,
    bookmark: false,
    imageUrl:
      'https://i.pinimg.com/236x/64/c6/c3/64c6c3752329400aa4ecac9dabf2bc38.jpg',
  },
  {
    name: 'Philly Cheesesteak',
    description:
      'Thinly sliced beefsteak with melted cheese and onions in a hoagie roll.',
    price: 11.6666666,
    bookmark: false,
    imageUrl:
      'https://i.pinimg.com/564x/ce/f9/46/cef946dfe94b75aa8bc0928a47e4f699.jpg',
  },
];
