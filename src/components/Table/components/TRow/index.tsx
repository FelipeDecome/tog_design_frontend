import React from 'react';

interface ITRowProps {
  values: string[];
  skipColumnsCount?: number;
  firstValueBold?: boolean;
  separator?: boolean;
}

const TRow: React.FC<ITRowProps> = ({
  values,
  skipColumnsCount,
  firstValueBold,
  separator,
  children,
}) => {
  return (
    <>
      {separator && <tr className="separator" />}

      <tr className={separator ? 'with-separator' : ''}>
        {skipColumnsCount &&
          // eslint-disable-next-line react/no-array-index-key
          [...Array(skipColumnsCount)].map((e, i) => <td key={i} />)}

        {values.map((value, index) => {
          if (index === 0 && firstValueBold)
            return (
              <td key={value} className="bold">
                {value}
              </td>
            );

          return <td key={value}>{value}</td>;
        })}
        {children}
      </tr>
    </>
  );
};

export { TRow };
