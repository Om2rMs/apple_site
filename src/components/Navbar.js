import React from "react"

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src="../images/applephoto.jpeg" className="nav--logo" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link " href="#">Mac <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">iPad</a>
                    <a class="nav-item nav-link" href="#">iphone</a>
                    <a class="nav-item nav-link" href="#">Watch</a>
                    <a class="nav-item nav-link" href="#">AirPods</a>
                    <a class="nav-item nav-link" href="#">TV & Home</a>
                    <a class="nav-item nav-link" href="#">Only on Apple</a>
                    <a class="nav-item nav-link" href="#">Accessories</a>
                    <a class="nav-item nav-link" href="#">Support</a>
                </div>
            </div>
        </nav>
       
          
    )
}