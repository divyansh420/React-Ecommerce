
import { productList } from '../data/product_list'
import {
  ADD_TO_CART, REMOVE_ITEM,
  SUB_QUANTITY, ADD_QUANTITY,
  ADD_TO_FAV, REMOVE_FROM_FAV, SHOW_DETAILS, CHECK_OUT
} from '../actions/action-types/action-types'

const initState = {
  items:
    productList,
  addedItems: [],
  favItems: [],
  isfavAdded: true,
  total: 0,
  isClicked: false,
  productDetail: {},
  showNav: true,
  discountPrice: 0,
  isBought: false
}
const cartReducer = (state = initState, action) => {



  if (action.type === CHECK_OUT) {
    return {
      ...state,
      isBought: !state.isBought
    }

  }
  if (action.type === SHOW_DETAILS) {
    let clickedItem = state.items.find(item => item.productId === action.id)
    let discountPercent = Number(clickedItem.discount)
    let finalPrice = Number(clickedItem.price)
    let discountPrice = clickedItem.price

    discountPrice = (discountPercent / 100) * discountPrice
    finalPrice = finalPrice - discountPrice

    return {
      ...state,
      isClicked: true,
      productDetail: clickedItem,
      discountPrice: finalPrice
    }
  }

  if (action.type === REMOVE_FROM_FAV) {
    let new_favs = state.favItems.filter(item => action.id !== item.productId)
    return {
      ...state,
      favItems: new_favs
    }
  }


  if (action.type === ADD_TO_FAV) {
    let favItem = state.items.find(item => item.productId === action.id)
    let existed_item = state.favItems.find(item => action.id === item.productId)
    if (existed_item) {
      return {
        ...state,
        isfavAdded: !state.isfavAdded,
        isClicked: false,
      }
    }
    else {
      return {
        ...state,
        favItems: [...state.favItems, favItem],
        isfavAdded: !state.isfavAdded,
        isClicked: false,
      }
    }
  }


  if (action.type === ADD_TO_CART) {

    let addedItem = state.items.find(item => item.productId === action.id)
    let itemPrice = state.discountPrice
    let existed_item = state.addedItems.find(item => action.id === item.productId)

    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: itemPrice + state.total,
        isClicked: false
      }
    }
    else {
      addedItem.quantity = 1;

      let newTotal = state.total + itemPrice
      
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        isClicked: false
      }

    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.productId)
    let new_items = state.addedItems.filter(item => action.id !== item.productId)
    let removePrice = Number(itemToRemove.price)
    let newTotal = state.total - (removePrice * itemToRemove.quantity)

    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }

  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.productId === action.id)
    let itemPrice = state.discountPrice
    addedItem.quantity += 1

    let newTotal = itemPrice + state.total
    
    return {
      ...state,
      total: newTotal
    }
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.productId === action.id)
    let itemPrice = state.discountPrice
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.productId !== action.id)
      let newTotal = state.total - itemPrice
      console.log(newTotal)

      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    }
    else {
      addedItem.quantity -= 1
      let newTotal = state.total - itemPrice
      return {
        ...state,
        total: newTotal
      }
    }

  }

  return state
}
export default cartReducer;