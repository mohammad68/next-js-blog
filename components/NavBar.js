import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';

function NavBar(){
    return(
    <header>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
            </nav>

            <ThemeSwitcher />
            <style jsx>{`
            header {
                display:flex;
                justify-content: space-around;
            }
            li {
                display: inline;
            }
            
            a {
                text-decoration: none;
            }
            
            a:hover, a:focus {
                text-decoration: underline;
            }
            
            ul {
                list-style-type: none;
                padding: 0;
            }
            

            
            li:not(:first-child){
                margin-left: 0.75rem;
            }
            
            `}
            </style>
    </header>)
};

export default NavBar;