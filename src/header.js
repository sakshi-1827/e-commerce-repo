import './e-commerce.css';

const Header = () => {

    return(
        <nav>

                <div className='nav' >
                    <span className='ecom' ><b>E-commerce</b> </span>
                    <input className='search' type="text" placeholder='  search' />
                    <div className='iconback'>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" rx="10" fill="#13505B" />
                            <path d="M35 35L27.5233 27.51L35 35ZM31.6667 17.5C31.6667 21.2573 30.1741 24.8606 27.5173 27.5174C24.8606 30.1742 21.2572 31.6667 17.5 31.6667C13.7428 31.6667 10.1394 30.1742 7.48266 27.5174C4.82589 24.8606 3.33334 21.2573 3.33334 17.5C3.33334 13.7428 4.82589 10.1395 7.48266 7.48269C10.1394 4.82593 13.7428 3.33337 17.5 3.33337C21.2572 3.33337 24.8606 4.82593 27.5173 7.48269C30.1741 10.1395 31.6667 13.7428 31.6667 17.5V17.5Z" stroke="white" stroke-width="5" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div className="navmargin">
                        <div id="navback">
                            <ul>
                                <span>
                                    <a class="navigation" aria-current="page" href="/">Home </a>
                                </span>
                                <span>
                                    <a class="navigation " href="./cart">Cart </a>
                                </span>
                                <span>
                                    <a class=" navigation" href="./account">Account </a>
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    )
}
export default Header