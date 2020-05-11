import React, { useCallback } from 'react';

import Card from 'react-bootstrap/Card';

export interface Props {
  thumbnail: string;
  title: string;
  text: string;
}

const Thumbnail = ({ thumbnail, title, text }: Props) => {
  const onClick = useCallback((evt) => {
    console.log(evt.target);
  }, []);

  return (
    <Card
      style={{ minWidth: '20rem', margin: '10px' }}
      bg={'dark'}
      text={'light'}
      onClick={onClick}
    >
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Thumbnail;
