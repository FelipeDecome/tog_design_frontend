import { Form } from '@unform/web';
import React, { useCallback, useMemo, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import { Input } from '../../components';
import { Table, THead, TRow } from '../../components/Table';
import { useCart } from '../../Contexts/cart';
import { formatValue } from '../../utils/formatValue';
import { Container } from './styles';

const articlePropertiesToExclude = ['text', 'cover'];

const Checkout: React.FC = () => {
  const [discount, setDiscount] = useState(0);

  const { items, subtotal } = useCart();

  const handleDiscountKeyUp = useCallback((e: React.KeyboardEvent) => {
    const target = e.target as HTMLInputElement;

    if (target.value === 'discount') setDiscount(0.1);
  }, []);

  const columTitles = useMemo(
    () =>
      Object.keys(items[0]).filter(
        title => !articlePropertiesToExclude.includes(title),
      ),
    [items],
  );

  const rowValues = useMemo(
    () =>
      items.map(article =>
        Object.entries(article)
          .filter(([key]) => !articlePropertiesToExclude.includes(key))
          .map(([key, value]) => {
            if (key === 'value') return formatValue(value);

            return value;
          }),
      ),
    [items],
  );

  const discountValue = useMemo(
    () => discount * subtotal,
    [discount, subtotal],
  );

  const total = useMemo(
    () => subtotal - discountValue,
    [subtotal, discountValue],
  );

  return (
    <Container>
      <main>
        <h3>Your cart</h3>

        <Table>
          <THead columnTitles={columTitles.filter(title => title !== 'id')}>
            <th aria-label="Remove button cell" />
          </THead>

          <tbody>
            {rowValues.map(article => {
              const [id, ...rest] = article;

              return (
                <TRow key={id} values={rest}>
                  <td>
                    <button type="button">
                      <FaTrashAlt />
                    </button>
                  </td>
                </TRow>
              );
            })}

            <TRow
              values={Object.entries({ subtotal: formatValue(subtotal) })[0]}
              skipColumnsCount={2}
              firstValueBold
              separator
            />
          </tbody>
        </Table>
      </main>
      <aside>
        <h3>Resume</h3>
        <div className="content">
          <Form onSubmit={() => undefined}>
            <Input
              type="text"
              label="Discount coupon"
              name="coupon"
              labelBackground="#ecedf3"
              onKeyUp={handleDiscountKeyUp}
            />
          </Form>

          <ul>
            <li>
              <p>Subtotal</p>
              <span>{formatValue(subtotal)}</span>
            </li>

            {discount !== 0 && (
              <li>
                <p>Discount</p>
                <span>{formatValue(discountValue)}</span>
              </li>
            )}

            <hr />

            <li>
              <p>Total</p>
              <span>{formatValue(total)}</span>
            </li>
          </ul>
        </div>

        <div className="buttons">
          <button type="button">CHECKOUT</button>
          <button type="button">KEEP BUYING</button>
        </div>
      </aside>
    </Container>
  );
};

export { Checkout };
