import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface IArticle {
  id: string;
  article: string;
  text: string;
  author: string;
  publisher: string;
  cover: string;
  value: number;
}

interface ICartContextProps {
  items: IArticle[];
  addItems(item: IArticle): void;
  subtotal: number;
}

const articleMock = [
  {
    id: 'asd123sad123sad',
    article: 'What was the trend in 2020 and you didn’t use it',
    text: 'Lorem ipsum dolor',
    author: 'Daniel Alves',
    publisher: 'Tog.design',
    cover: '',
    value: 10.9,
  },
  {
    id: 'asd123sad123sadqwe1234',
    article: 'What was the trend in 2020 and you didn’t use it',
    text: 'Lorem ipsum dolor',
    author: 'Lucas Augusto',
    publisher: 'Tog.design',
    cover: '',
    value: 18.9,
  },
];

const CartContext = createContext({} as ICartContextProps);

const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<IArticle[]>(articleMock);

  const addItems = useCallback(
    (item: IArticle) => setItems(state => [...state, item]),
    [],
  );

  const subtotal = useMemo(() => {
    return items.map(item => item.value).reduce((total, next) => total + next);
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addItems, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): ICartContextProps => useContext(CartContext);

export { CartProvider, useCart };
