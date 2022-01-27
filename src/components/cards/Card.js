import React from 'react'

import './card.css'

import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const CardPerfume = ({brand, name, image, description}) => {
  return (
<div>
  <Card
  >
    <CardBody>
      <CardTitle tag="h5">
        {name}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {brand}
      </CardSubtitle>

      <CardText>
        {description}
      </CardText>
      <Button>
        AGREGAR AL CARRITO
      </Button>
    </CardBody>
  </Card>
</div>
);
};

export default CardPerfume;
