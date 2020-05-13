import React, { useState, useCallback, CSSProperties } from 'react';

import Card from 'react-bootstrap/Card';

export interface Props {
  style?: CSSProperties;
  src: string;
  title: string;
  text: string;
  info: object;
  callback?: (info: object) => void;
}

const ThumbnailCard = ({ style, src, title, text, info, callback }: Props) => {
  const [selected, setSelected] = useState(false);

  const onClick = useCallback(() => {
    callback && callback(info);
    setSelected(!selected);
  }, [selected]);

  return (
    <Card
      style={
        (style && {
          ...style,
          border: selected ? '2px solid #ffffff' : style?.border,
        }) || {
          minWidth: '15rem',
          maxWidth: '15rem',
          margin: '5px',
          border: selected ? '2px solid #ffffff' : undefined,
        }
      }
      bg={'dark'}
      text={'light'}
      onClick={onClick}
    >
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default React.memo(ThumbnailCard);
