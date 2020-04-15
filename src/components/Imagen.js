import React, { Fragment } from 'react';

const Imagen = (props) => {

    const {largeImageURL,likes,webformatURL,tags,views} = props.imagen;
    return ( 
        <Fragment>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mt-4">
                <div className ="card">
                    <img src={webformatURL} alt={tags} className="card-img-top"/>
                    <div className="card-body">
                    <p className="card-text"> 
                     Me gustas: {likes}</p>
                    <p className="card-text">
                     Vistas: {views}</p>
       <a href={largeImageURL} 
       target="_blank"
       className="btn btn-primary btn-block" ><h6>Ver imagen</h6></a>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Imagen;