import React from "react";

const Navbar=()=>{
return(
<>


<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
<ul className="navbar-nav">

<div className="header-top" >
<img src="frame abreviated logo-white.png"></img>
</div>

{/* <li className="nav-item active">
      <a className="nav-link" href="1"><img src=""></img></a>
    </li> */}

    <li className="nav-item active">
      <a className="nav-link" href="1">The Reformer</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" href="2">Workouts</a>
    </li>
    
    <li className="nav-item">
      <a className="nav-link" href="3">About</a>
    </li>
    <div className="logo" >
<img src="Ellipse 135.png"></img>
</div>

<div className="logo 1" >
<img src="Rectangle 3651.png"></img>
</div>

<div className="logo 2" >
<img src="2.png"></img>
</div>



  {/* EQclipse  */}
    {/* <li className="nav-item">
      <a className="nav-link" href="3">Eclipse</a>
    </li>
    {/* Rectangle  */}
    {/* <li className="nav-item">
      <a className="nav-link" href="3">Rectangle</a>
    </li>  */}

<li className ="nav-item">
      <a className ="nav-link disabled" href="4">Shop Now</a>
    </li>
  </ul>
</nav> 


<h1 className="header-content">Our Story</h1>
<div className="Header-para">
<p className="header-para">Melissa Bentivoglio and Lee Belzberg have paired together their extensive backgrounds of elite fitness instruction and entrepreneurship to bring you Frame—a groundbreaking approach to pilates disrupting the traditional at-home fitness market. </p>
</div>

<div className="row" >
<img src="poster.png"></img>
</div>

<div className="right-img" >
<img src="Textbox.png"></img>
</div> 


<div className="center-div">
<h1 >Mark Mastrov Investor, Board of Director</h1>
<p>Mark Mastrov is an American businessman who was born in Oakland, CA. In addition to serving on the board and investing in Frame, he is the founder and former CEO of 24-Hour Fitness as well as many other fitness ventures worldwide. Mastrov is also a member of the Sacramento Kings ownership group.</p>


<div className="left-content">
<h1>Michael Bruno Investor</h1>
<p>Michael Bruno is the owner and CEO of Core Health and Fitness. Core Health & Fitness is the world’s largest privately-held marketer and distributor of commercial fitness solutions to health clubs, community recreational centers, hotels, government, educational facilities and more.</p>
</div>

<div className="footer-top" >
<img src="Frame 487.png"></img>
</div>

<section className="footer">
<div className="footer">
<img src="Footer.png"></img>
</div>
</section>
</div>



</>
);
}
export default Navbar;