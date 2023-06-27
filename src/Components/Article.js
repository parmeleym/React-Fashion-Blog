import imageOne from '../Images/blog-image-1.jpg';
import imageTwo from '../Images/blog-image-2.jpg';

export default function Article({img, imgAlt}){
    let imgType = null;
    switch(img){
        case 1:
            imgType = imageOne;
            break;
        case 2:
            imgType = imageTwo;
            break;
        default:
            imgType = imageOne;
            break;
    }
    return(
        <article>
            <p>11/12/20</p>
            <p class="articleTitle">On the Street in Brooklyn</p>
            <div>
                <img src={imgType} alt={imgAlt}></img>
            </div>
            <p class="articleBody">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis sint, exercitationem placeat tempore maiores consequatur obcaecati fugiat quia ea ratione odit, maxime velit. Voluptate magnam vel similique, odit maxime nemo velit, ipsum perspiciatis hic perferendis harum ad inventore officia eos saepe laboriosam quibusdam veritatis! Est, autem laboriosam mollitia dolorem tempore tenetur error omnis cum ipsa ducimus delectus ullam iusto voluptas ex consectetur incidunt magni officia dolor voluptatum illum iure sapiente. Assumenda id temporibus reprehenderit ex quibusdam maiores iste nostrum voluptates consectetur eos est blanditiis incidunt totam soluta mollitia nobis accusantium, a quod, accusamus facilis tempora vel sunt dignissimos minus. Cupiditate, maxime ab! Molestias exercitationem earum inventore aliquam nesciunt quas alias amet deleniti dicta, suscipit sequi porro hic doloribus quisquam a, quos possimus cupiditate. Eos commodi eum necessitatibus expedita nobis sit ipsum id sint illum animi aliquid eligendi, nihil odit enim inventore fuga natus at! Corrupti enim odit impedit obcaecati quibusdam.</p>
            <a href="#Continue">Continues...</a>
        </article>
    );
}