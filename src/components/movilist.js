import React from 'react'
import Spinner from './Loading'


 function Movilist(props) {

        let content = props.loading ? <div className="loading"><Spinner /> </div> :  props.img.map((el ,i)=>(
            <div className="box" key={i}>
                <h3 className="title" >{el.name}</h3>
                <img src={el.image} />
            </div>))
        return (
        <div className="movieslist">{content}</div>
      )
    }

   
    export default Movilist



    