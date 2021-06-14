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
  themes: string[];
  cover: string;
  value: number;
}

interface ICartContextProps {
  items: IArticle[];
  addItems(item: IArticle): void;
  removeItem(id: string): void;
  subtotal: number;
}

const articleMock = [
  {
    id: 'asd123sad123sad',
    article: 'What was the trend in 2020 and you didn’t use it',
    text: 'Lorem ipsum dolor',
    author: 'Daniel Alves',
    publisher: 'Tog.design',
    themes: ['Business', 'Development', 'Social'],
    cover: '',
    value: 10.9,
  },
  {
    id: 'asd123sad123sadqwe1234',
    article: 'What was the trend in 2020 and you didn’t use it',
    text: 'Lorem ipsum dolor',
    author: 'Lucas Augusto',
    publisher: 'Tog.design',
    themes: ['Business', 'Development', 'Social'],
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

  const removeItem = useCallback(
    (id: string) => {
      const parsedItems = items.filter(item => item.id !== id);

      setItems([...parsedItems]);
    },
    [items],
  );

  const subtotal = useMemo(() => {
    return items.length
      ? items.map(item => item.value).reduce((total, next) => total + next)
      : 0;
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addItems, removeItem, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): ICartContextProps => useContext(CartContext);

export { CartProvider, useCart };
