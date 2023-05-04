//**! === Imports === */
import '../style.css';
import heroImg from '../src/img/shopping.jpg';
//** ==== === Header === ==== */
export const headerPlus = (document.querySelector(`#idHeader`).innerHTML = ` 
 <header class="header__container">
   <nav class="header__container--navigation">
       <div class="nav-logo" id="idLogo">
            <a class="logo-icon"><i class="fa-solid fa-box"></i></a>
            <span>BoxShop</span>
       </div>

       <div class="nav-list">
            <ul class="nav-listPlus">
                <li class="nav-item"><span>Products</span></li>
                <li class="nav-item"><span>Categories</span></li>
                <li class="nav-item"><span>Brands</span></li>
                <li class="nav-item"><span>Delivery</span></li>
            </ul>
       </div>

       <div class="nav-search">
          <input type="search" id="search">
          <label><a href="#"><i class="fa-solid fa-magnifying-glass"></i></label>
       </div>

       <div class="nav-user">
          <a><i class="fa-solid fa-user"></i></a>
       </div>

       <div class="nav-shop">
          <button class="nav-cart"><i class="fa-solid fa-cart-shopping"></i></button>
       </div>
   </nav>
   <section class="header__container--hero" id="idHero">
      <div class="container-hero">
         <div class="hero-text">
            <h2 class="hero-textTitle">Shopping And Department Store</h2>
            <p class="hero-textParagraph">Shopping with the best brands. The future of commerce it's now</p>
            <button class="hero-btn">Buy Here</button>
            </div>
         <figure class="hero-figure">
            <img class="hero-img" src=${heroImg}>
         </figure>
      </div>
   </section>
 </header>
`);

export default headerPlus;
