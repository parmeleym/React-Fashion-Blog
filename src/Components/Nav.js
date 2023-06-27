export default function Nav({className}){
    if(className === 'headerNavBar'){
        return(
            <ul class={className} aria-label="Main Navigation" role="navigation">
                <li><a href="#Women's">Women's</a></li>
                <li><a href="#Mens">Men's</a></li>
                <li><a href="On-The-Street">On the Street</a></li>
                <li><a href="#The-Catwalk">The Catwalk</a></li>
                <li><a href="#AdWatch">AdWatch</a></li>
                <li><a href="#About">About</a></li>
            </ul>
        );
    }else if(className === 'footerNavBar'){
        return(
            <ul class={className} aria-label="Footer Navigation" role="navigation">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./index.html">Women's</a></li>
                <li><a href="./index.html">Men's</a></li>
                <li><a href="./index.html">On the Street</a></li>
                <li><a href="./index.html">The Catwalk</a></li>
                <li><a href="./index.html">AdWatch</a></li>
                <li><a href="./index.html">About</a></li>
                <li><a href="./index.html">Tips</a></li>
            </ul>
        );
    }
}