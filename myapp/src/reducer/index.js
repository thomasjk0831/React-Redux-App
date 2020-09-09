export const initialState = {
    pic : 'https://purr.objects-us-east-1.dream.io/i/shockedCat_1.jpg',
    loading : false
}

export const reducer = (state = initialState, action) => {
   switch(action.type){
       case 'PRE_FETCH':
           return {
               ...state,
               loading : !state.loading
           }
       case "NEW_CAT":
           return {
               
               pic: action.payload,
               loading : false
           }
       default:
           return state
   }
}