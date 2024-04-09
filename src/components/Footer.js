import React from 'react';
import logo from '../images/small_logo.png'
const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned restaraunt, focused on bringing traditional recipes to the Boise area</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>

                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 1234 Boise City, ID</li>
                        <li>Address: <br/> +1 (208) 123-4567 </li>
                        <li>Address: <br/> help@Littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>TikTok</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    );
};

export default Footer;