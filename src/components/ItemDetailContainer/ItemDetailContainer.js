const ItemDetailContainer = ({ setProducts }) => {
  const dataCategories = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        setProducts([
          {
            id: 1,
            nombre: "Zapatillas",
            descripcion: "Calzado especialmente diseñado para jugar al Basket",
          },
          {
            id: 2,
            nombre: "Camisetas",
            descripcion: "Jerseys de todos los equipos de Basket",
          },
          {
            id: 3,
            nombre: "Pelotas",
            descripcion:
              "Diferente tipos de pelotas de Basket para todas las edades",
          },
        ])
      );
    }, 2000);
  });

  return <div></div>;
};

export default ItemDetailContainer;
