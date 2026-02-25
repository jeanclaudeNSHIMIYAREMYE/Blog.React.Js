import "../styles/navbar.css"



const Navbar = () => {
    return (  
     <nav className="navbar">
        <div className="navbar-Logo">
         <a href="/" className="navbar-brand">Blog</a>
        </div>

        <ul className="navbar-links">
            <li>
                <a href="/" className="navbar-link">acceuil</a>
            </li>
            <li>
        <a href="/" className="navbar-link">Services</a>

            </li>
               <li>
        <a href="/" className="navbar-link">contact</a>

            </li>


        </ul>




     </nav>










    );
}
 
export default Navbar;