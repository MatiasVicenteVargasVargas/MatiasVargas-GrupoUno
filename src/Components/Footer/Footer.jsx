import React from "react";
import './Footer.css'


const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">

                    <div className="text-left col">
                        <ul className="list-unstyled">
                          

                        </ul>
                    </div>

                    <div className="text-center col">
                  
                        
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear}2024 Tienda Outlet | Política de Privacidad | Política de cookies | Aviso Legal

                    </p>

                </div>
            </div>
        </div>
    )



}

export default Footer;