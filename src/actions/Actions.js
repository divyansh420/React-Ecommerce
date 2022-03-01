
export const addToCart = (id) => {

    return {
        type: 'ADD_TO_CART',
        id
    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id
    }
}

export const addQuantity = (id) => {
    return {
        type : 'ADD_QUANTITY',
        id
    }
}

export const subtractQuantity = (id) => {
    return {
        type : 'SUB_QUANTITY',
        id
    }
}

export const addToFav = (id) => {
    return {
        type: 'ADD_TO_FAV',
        id
    }
}

export const removeFromFav = (id) => {
return {
    type: 'REMOVE_FROM_FAV',
    id
}
}

export const showDetails = (id,fp) => {
    return {
        type: 'SHOW_DETAILS',
        id, fp
    }
}

export const checkOut = () => {
    return {
        type: 'CHECK_OUT'
    }
}
