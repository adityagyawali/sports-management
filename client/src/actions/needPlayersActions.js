export const ADD_TO_NEEDPLAYERLIST_SUCCESS = "ADD_TO_NEEDPLAYERLIST_SUCCESS";
export const ADD_TO_NEEDPLAYERLIST_FAILED = "ADD_TO_NEEDPLAYERLIST_FAILED";

export const GET_SPORTS_CATEGORY_SUCCESS = "GET_SPORTS_CATEGORY_SUCCESS";
export const GET_SPORTS_CATEGORY_FAILED = "GET_SPORTS_CATEGORY_FAILED";

export const GET_REGION_CATEGORY_SUCCESS = "GET_REGION_CATEGORY_SUCCESS";
export const GET_REGION_CATEGORY_FAIELD = "GET_REGION_CATEGORY_FAIELD";

export const LOADING = "LOADING"

//ACTION
const addToNeedplayerListSuccess = () => ({
    type: ADD_TO_NEEDPLAYERLIST_SUCCESS
})

const addToNeedplayerListFailed = (error) => ({
    type: ADD_TO_NEEDPLAYERLIST_FAILED,
    error: error
})

const getSportsCategorySuccess = (categories) => ({
    type: GET_SPORTS_CATEGORY_SUCCESS,
    item: categories
})

const getSportsCategoryFailed = (error) => ({
    type: GET_SPORTS_CATEGORY_FAILED,
    error: error
})

const getRegionCategorySuccess = (regions) => ({
    type: GET_REGION_CATEGORY_SUCCESS,
    item: regions
}) 

const getRegionCategoryFailed = (error)=>({
    type: GET_REGION_CATEGORY_FAIELD,
    error: error
})

const loading = () => ({
    type: LOADING
})



//action creator

export const addToNeedPlayerList = (item, goToEventList)=>{
    return dispatch => {
        let postObject = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        }

        dispatch(loading())

        fetch("/api/addToNeedPlayersList", postObject).then( (response) => {
            if(response.ok){
                response.json().then( (resData) => {
                    dispatch(addToNeedplayerListSuccess());
                    goToEventList();
                }).catch((error) => {
                    dispatch(addToNeedplayerListFailed("response json.stringfy problem:" + error ));
                })
            }else {
                dispatch(addToNeedplayerListFailed("Response not ok. Status:" + response.status ));
            }
        }).catch( 
            (error) => {dispatch(addToNeedplayerListFailed("Server responded with error: " + error))}
        )

    }
}


export const getSportsCategory = () => {
    console.log("getSportsCategory action")
    return dispatch => {
        let postObject = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {"Content-Type": "application/json"}
        }

        dispatch(loading())

        fetch("/getSportsCategory", postObject).then( response => {
            if(response.ok){
                response.json().then( resData => {
                    dispatch(getSportsCategorySuccess(resData))
                }).catch( err => {
                    dispatch(getSportsCategoryFailed("response.json() is not ok with"+err))
                })
            }else{
                dispatch(getSportsCategoryFailed("Response is not ok"))
            }
        }).catch( error => {
            dispatch(getSportsCategoryFailed("Server is not ok with :"+ error))
        })
    } 
}

export const getRegionCategory = () => {
    console.log("getRegioinCategory action")
    return dispatch => {
        let postObject = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {"Content-Type": "application/json"}
        }

        dispatch(loading())

        fetch("/getRegionCategory", postObject).then( response => {
            if(response.ok){
                response.json().then( resData => {
                    dispatch(getRegionCategorySuccess(resData))
                }).catch( error =>{
                    dispatch(getRegionCategoryFailed('response.json() is not ok with' + error))
                })
            }else{
                dispatch(getRegionCategoryFailed("response is not ok"))
            }
        }).catch( error => {
            dispatch(getRegionCategory("server is not ok with "+ error))
        })
    }

}
