import Posts from "../Posts/Posts";
import img1 from '../../images/react.svg';
import img2 from '../../images/huhahub.jpg';
import img3 from '../../images/huhahub.svg';

const posts = [
    { imgUrl: img3, postBody: 'Первый пост' },
    { imgUrl: img1, postBody: 'Второй пост' },
    { imgUrl: img2, postBody: 'Третий пост' },
]



export default function NewPosts() {

return (
    < Posts posts={ posts} />
    )
    
}