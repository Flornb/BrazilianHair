import React, { useState } from 'react';
import './CreateProduct.css'

export const CreateProduct = () => {
  const [product, setProduct] = useState({
    id: '',
    title: '',
    name: '',
    description: '',
    price: '',
    stock: '',
    thumbnail: '',
    category: '',
    pay: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del producto a tu archivo JSON o realizar la lógica para guardarlos.
    console.log('Nuevo producto:', product);
    // Reiniciar el estado para limpiar el formulario después de enviar.
    setProduct({
      id: '',
      title: '',
      name: '',
      description: '',
      price: '',
      stock: '',
      thumbnail: '',
      category: '',
      pay: '',
    });
  };

  return (
    <div>
      <h2>Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="ID" value={product.id} onChange={handleChange} />
        <input type="text" name="title" placeholder="Título" value={product.title} onChange={handleChange} />
        {/* ... otros campos del formulario */}
        <input
          type="text"
          name="thumbnail"
          placeholder="URL de la imagen del thumbnail"
          value={product.thumbnail}
          onChange={handleChange}
        />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

