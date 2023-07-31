// Importation React
import React from 'react';
// Définition du composant ContainerProduct
function ContainerProduct({ cover, title }) {
  return (
    <div className="container-product">
      <span className="container-product__overlay" />
      <img className="container-product__image" src={cover} alt={title} />
      <p className="container-product__title">{title}</p>
    </div>
  );
}
// Exportation du composant ContainerProduct pour qu'il puisse être utilisé dans d'autres fichiers.
export default ContainerProduct;
