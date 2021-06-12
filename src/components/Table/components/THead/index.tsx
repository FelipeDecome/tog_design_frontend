import React from 'react';

interface ITHeadProps {
  columnTitles: string[];
}

const THead: React.FC<ITHeadProps> = ({ columnTitles, children }) => {
  return (
    <thead>
      <tr>
        {columnTitles.map(title => {
          return <th key={title}>{title}</th>;
        })}
        {children}
      </tr>
    </thead>
  );
};

export { THead };
