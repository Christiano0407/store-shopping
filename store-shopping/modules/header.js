//**! === Imports === */
import '../style.css';
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
          <a class="nav-cart"><i class="fa-solid fa-cart-shopping"></i></a>
       </div>
   </nav>
   <section class="header__container--hero" id="idHero"></section>
 </header>
`);

export default headerPlus;
