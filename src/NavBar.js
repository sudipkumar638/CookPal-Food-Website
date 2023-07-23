import React from 'react'
import "./navbar.scss";
const NavBar = () => {
  return (
    <div class="navbar">
    <div class="logosection">
       <img src="https://s3-alpha-sig.figma.com/img/e0ef/4f61/967cc7d034dc411ca2013fff2fed228d?Expires=1690761600&Signature=Qj-mMwajmtBv8rqYY9a-au~-kPe49AdHvgu8SlsHgFBgsmfw2jrafeQkQBqRM8AYcEid2igmSew0pJJRCL0ARd1MxKfXDwmIgOjGEyzGAM5S~j2UmSZm4rR6Bbt4TPZrtujBqpq-GwzPN0sq6cpZTQz2DbHWWgmQVdL26w84rqyM12K0~UVVYYqHSlyQJwDbjTT505NqsnRNdI8x1i29QzG7HfRtcrLX-2y6sUClXUhLWiYffklP-OZdVIP7ZS794G9PaUIiAva9Ae~FjXG-d9t-vrua-3JO1Q-OKQeSVwdE7PJj2IMLgiaTPOV~z9GKs43sOZ7cEvZ9zyT0dlSong__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt='hello'/>
    </div>
    <div class="menusection">
       <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Help</li>
          <li>
              <div class="avatar">
                Avatar
              </div>
          </li>
       </ul>
    </div>
 </div>
  )
}

export default NavBar