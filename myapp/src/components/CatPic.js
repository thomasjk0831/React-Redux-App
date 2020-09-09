import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../action'


function CatPic(props){
    return(
        <div>
            <div>
                {
                    props.loading?(<p>loading</p>):
                    (<img src={props.pic} style={{maxWidth : '400px'}}/>)
                }
            </div>
            <div>
                <button onClick = {()=>{props.fetchData()}}>Get Cat Pic</button>
            </div>
        </div>
    )
}

function mapStateToProps(state){
   return {
       pic : state.pic, loading : state.loading
   }
}
export default connect(mapStateToProps, {fetchData})(CatPic)