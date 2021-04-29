import {createStore} from 'redux';
/// Action generators-functions that return action objects
const incrementCount=({incrementBy=1}={})=>(
    {
        type:"INCREMENT",
        incrementBy
    })
const decrementCount=({decrementBy=1}={})=>(
    {
type:"DECREMENT",
decrementBy
    }
)
const setCount=({count}={})=>(
    {
type:"SET",
count
    }
    )
    const resetCount=({}={})=>(
        {
            type:"RESET"
        }
    )
const store=createStore((state={count:0},action)=>{
    switch(action.type){
        case "INCREMENT":            
            return{count:state.count+action.incrementBy};
            case "DECREMENT":                
                return{count:state.count-action.decrementBy};
                case "RESET":
                    return{count:0};
                    case "SET":
                        return{count:action.count}
            default:
                return state;
    }    
})

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})



// Actions -than an object that gets sent to the store
// Dispatch-y allows us to send the action object to the stor that store do somthing
//(insted of right using store.dispatch here we are using action generators)
// store.dispatch({
//     type:"INCREMENT",
//     incrementBy:5
// });

// store.dispatch({type:"INCREMENT"});
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());
// store.dispatch({type:"RESET"});
store.dispatch(resetCount());
// store.dispatch({type:"DECREMENT"});
// store.dispatch({
//     type:"DECREMENT",
//     decrementBy:10
// });
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}));
// store.dispatch({
//     type:"SET",
//     count:100
// })
store.dispatch(setCount({count:100}));

