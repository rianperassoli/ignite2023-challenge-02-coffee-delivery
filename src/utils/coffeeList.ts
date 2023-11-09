import { coffees as coffeesImage } from './coffessImage'

export interface Coffee {
  title: string
  description: string
  price: number
  categories: string[]
  image: string
}

export const coffeeList: Coffee[] = [
  {
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    categories: ['tradicional'],
    image: coffeesImage.expresso,
  },
  {
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    categories: ['tradicional'],
    image: coffeesImage.americano,
  },
  {
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    categories: ['tradicional'],
    image: coffeesImage.expressoCremoso,
  },
  {
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    categories: ['tradicional', 'gelado'],
    image: coffeesImage.expressoGelado,
  },
  {
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    categories: ['tradicional', 'com leite'],
    image: coffeesImage.cafeComLeite,
  },
  {
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    categories: ['tradicional', 'com leite'],
    image: coffeesImage.latte,
  },
  {
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    categories: ['tradicional', 'com leite'],
    image: coffeesImage.capuccino,
  },
  {
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    categories: ['tradicional', 'com leite'],
    image: coffeesImage.macchiato,
  },
  {
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    categories: ['tradicional', 'com leite'],
    image: coffeesImage.mocaccino,
  },
  {
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    categories: ['tradicional', 'com leite'],
    image: coffeesImage.chocolateQuente,
  },
  {
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    categories: ['especial', 'alcoólico', 'gelado'],
    image: coffeesImage.cubano,
  },
  {
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    categories: ['especial'],
    image: coffeesImage.havaiano,
  },
  {
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    categories: ['especial'],
    image: coffeesImage.arabe,
  },
  {
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    categories: ['especial', 'alcoólico'],
    image: coffeesImage.irlandes,
  },
]
