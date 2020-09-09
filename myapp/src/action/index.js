import axios from 'axios'


export const fetchData = () => {
    return (dispatch) => {
        dispatch({type: 'PRE_FETCH'})
        axios.get('https://aws.random.cat/meow')
        .then(res=>{
            dispatch({type: "NEW_CAT", payload: res.data.file})
        })
        .catch(err=> console.log("ERROR:", err))
}
}