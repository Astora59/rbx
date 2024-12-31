export default function Navbar() {
    return (
        <nav>
            <div>
                <a href="/">
                    <div id="logo"><img src="image.png" alt="Home"/></div>
                    <div id="headtag"><img src="image.png" alt="Home"/></div>
                    <div id="tagline"><img src="image.png" alt="Home"/></div>
                </a>
            </div>
            <div> 
                <a href="/">Home</a>
                <a href="/about.html" >About</a>      
                <a href="/services.html" >Services</a>          
                <a href="/pricing.html" >Pricing</a>    
                <a href="/contact.html" >Contact Us</a>
    </div>
        </nav>
    );
}