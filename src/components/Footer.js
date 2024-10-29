export default
    function Footer() {
    return (
        <footer className="footer">
            <div>
                <h4>Company</h4>
                <ul>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Press</a></li>
                </ul>
            </div>
            <div>
                <h4>Quick links</h4>
                <ul>
                    <li><a href="/">Flights</a></li>
                    <li><a href="/">Hotels</a></li>
                    <li><a href="/">Car rentals</a></li>
                </ul>
            </div>
            <div>
                <h4>Support</h4>
                <ul>
                    <li><a href="/">Help center</a></li>

                    <li><a href="/">Contact us</a></li>
                    <li><a href="/">Privacy policy</a></li>
                </ul>
            </div>
            <div>
                <h4>Newsletter</h4>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </footer>
    );
}