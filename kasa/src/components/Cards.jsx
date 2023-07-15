import React from 'react';

function ContainerProduct({ cover, title }) {
  return (
    <div className="container-product">
      <span className="container-product__overlay" />
      <img className="container-product__image" src={cover} alt={title} />
      <p className="container-product__title">{title}</p>
    </div>
  );
}

export default ContainerProduct;
