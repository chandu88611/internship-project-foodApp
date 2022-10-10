 const reducer=(state={},action)=>{
switch (action.type) {
    case "ADMIN_GET_FOOD_DETAILS":     
    return {...state};
      case "ADMIN_GET_FOOD_DETAILS_RECIEVED":
            return {...state,  foodDetails:action.foodDetails};
         case "ADMIN_POST_FOOD_DETAILS":
           return {...state}
        case "ADMIN_POST_GET_FOOD_DETAILS_RECIEVED": 
              return {...state,response:action.response};
              
    case "ADMIN_DELETE_FOOD_DETAILS":     
    return {...state};
      case "ADMIN_DELETE_FOOD_DETAILS_RECIEVED":
            return {...state,data:action.data};
         case "ADMIN_UPDATE_FOOD_DETAILS":
           return {...state}
        case "ADMIN_UPDATE_GET_FOOD_DETAILS_RECIEVED": 
              return {...state,response:action.response};
              case "USER_DETAILS":
                return {...state}
             case "USER_DETAILS_RECIEVED": 
                   return {...state,response:action.response};
                   case "GET_USER_DETAILS":
                    return {...state}
                 case "GET_USER_DETAILS_RECIEVED": 
                       return {...state,userDetails:action.userDetails};
        default:
          return state;
}
}
export default reducer