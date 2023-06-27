import Nav from "./Nav";

export default function Footer(){
    return(
        <footer>
            <Nav className={'footerNavBar'}/>
            <p class="copyright">&copy; 2013 Valet Indusdtries, Inc</p>
        </footer>
    );
}