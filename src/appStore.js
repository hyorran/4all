import { store } from 'react-easy-state'

const appStore = store({
  products: [
    {
      id: 0,
      idCategory: 0,
      name: 'Coca-cola lata',
      description: 'Coca-cola lata 350ml',
      price: 3.50,
      image: ''
    },
    {
      id: 1,
      idCategory: 0,
      name: 'Fanta uva lata',
      description: 'Fanta uva lata 350ml',
      price: 3.00,
      image: ''
    }
  ],
  categories: [
    {
      id: 0,
      name: 'Bebidas'
    },
    {
      id: 1,
      name: 'Doces'
    },
    {
      id: 2,
      name: 'Salgados'
    }
  ]
})

export default appStore
