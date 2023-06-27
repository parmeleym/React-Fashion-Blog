import Nav from "./Nav";

export default function Header(){
    return(
        <header>
            <h1>Sartre's List</h1>
            <h2>Better-Dressed People</h2>
            <Nav className='headerNavBar'/>
        </header>
    );
}