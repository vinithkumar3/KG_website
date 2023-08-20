
import React, { useState } from 'react';
import "./sidebar.css";

const Sidebar = () => {
    // const [toggle, showMenu] = useState(false);
    // return (
    //     <div>
    //         <aside className={toggle ? "aside show-menu" : "aside"}>

    //             <nav className="nav">
    //                 <div className="nav___menu">
    //                     <ul className="nav___list">
    //                         <li className="nav___item">
    //                             <a href="#home" className="nav___link">
    //                                 <i className="icon-home">Home</i>
    //                             </a>

    //                         </li>
    //                         <li className="nav___item">
    //                             <a href="#about" className="nav___link">
    //                                 <i className="icon-user-following"></i>
    //                             </a>
    //                         </li>

    //                         <li className="nav___item">
    //                             <a href="#services" className="nav___link">
    //                                 <i className="icon-briefcase"></i>
    //                             </a>
    //                         </li>

    //                         <li className="nav___item">
    //                             <a href="#resume" className="nav___link">
    //                                 <i className="icon-graduation"></i>

    //                             </a>
    //                         </li>
    //                         <li className="nav___item">
    //                             <a href="#work" className="nav___link">
    //                                 <i className="icon-layers"></i>
    //                             </a>
    //                         </li>
    //                         <li className="nav___item">
    //                             <a href="#blog" className="nav___link">
    //                                 <i className="icon-note"></i>
    //                             </a>
    //                         </li>
    //                         <li className="nav___item">
    //                             <a href="#contact" className="nav___link">
    //                                 <i className="icon-bubble"></i>
    //                             </a>
    //                         </li>
    //                     </ul>

    //                 </div>
    //             </nav>
    //             <div className="nav__footer">
    //                 <span className="copyright">
    //                     &copy; 2022 - 2023.

    //                 </span>
    //             </div>
    //         </aside>
    //         <div className={toggle ? "nav___toggle nav___toggle-open " :
    //             "nav___toggle"} onClick={() => showMenu(!toggle)}>
    //             <i className="icon-menu"> </i>
    //         </div>
    //     </div>
    // );
    return(
        <div class="menu bg-dark ">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link  mb-0 h5" aria-current="page" href="#">Home</a>
        <a class="nav-link  mb-0 h5" href="#">Traning & Schedule</a>
        <a class="nav-link  mb-0 h5" href="#">Gallery</a>
        <a class="nav-link  mb-0 h5" href="#">Reviews</a>
        <a class="nav-link  mb-0 h5" href="#">Contact Us</a>
      </div>
    
  </div>
</nav>
</div>
    )
}

export default Sidebar
