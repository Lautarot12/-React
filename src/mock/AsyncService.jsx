const productos = [
    {
        id: '01',
        name: 'Pollo Noelma',
        description: 'Pollo fresco por caja de 20kg',
        stock: 25,
        price: 60000,
        img: '../pollonoelma.jpeg',
        category: 'frescos'
    },
  {
        id: '02',
        name: 'Pollo San Andres',
        description: 'Pollo fresco premium por caja de 20kg',
        stock: 15,
        price: 65000,
        img: '../pollosanandres.webp',
        category: 'frescos'
    },
      {
        id: '03',
        name: 'Pollo San Pedro',
        description: 'Pollo congelado por caja de 20kg',
        stock: 30,
        price: 50000,
        img: '../sanpedrocongelado.jpg',
        category: 'congelados'
    },
      {
        id: '04',
        name: 'Medallon de pollo con jamon y queso',
        description: 'Precocido relleno, práctico y sabroso',
        stock: 300,
        price: 5000,
        img: '../medallonpollojyq.jpg',
        category: 'precocidos'
    },
          {
        id: '05',
        name: 'Medallon de pescado con espinaca y queso',
        description: 'Ideal para comidas rápidas y nutritivas',
        stock: 300,
        price: 4500,
        img: '../medallonpescado.jpg',
        category: 'precocidos'
    },
          {
        id: '06',
        name: 'Patitas de pollo',
        description: 'Clásicas patitas precocidas para chicos y grandes',
        stock: 500,
        price: 5000,
        img: '../patitas.jpg',
        category: 'precocidos'
    },
          {
        id: '07',
        name: 'Bastoncitos de muzarella',
        description: 'Croquetas crujientes rellenas de muzzarella',
        stock: 300,
        price: 6000,
        img: '../bastoncitos.jpg',
        category: 'precocidos'
    },
          {
        id: '08',
        name: 'Filet de merluza rebozado',
        description: 'Filet rebozado listo para freír o para el horno',
        stock: 300,
        price: 8000,
        img: '../filetdemerluzarebozado.png',
        category: 'precocidos'
    },
          {
        id: '09',
        name: 'Filet de merluza a la romana',
        description: 'Receta clásica, lista para disfrutar',
        stock: 400,
        price: 10000,
        img: '../filetalaromana.jpeg',
        category: 'precocidos'
    },
    

]

export const getProducts =() => {
  let error = false
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      if(error) {
        reject('Hubo un error, intente mas tarde')
      } else {
        resolve(productos)
      }
    }, 1000) 
  })
}


export const getOneProduct = (id) => {
  return new Promise ((resolve, reject)=> {
    setTimeout(()=>{
      let prod = productos.find((prod) => prod.id === id)
      if (prod) {
        resolve(prod)
      } else {
        reject('Producto no encontrado')
      }
    }, 1000)
  }) 
}

