import Posts from "../Posts/Posts";
import img1 from '../../images/react.svg';
import img2 from '../../images/huhahub.jpg';
import img3 from '../../images/huhahub.svg';

const posts = [
    { imgUrl: img1, postBody: '10 пост' },
    { imgUrl: img2, postBody: '11 пост' },
    { imgUrl: img3, postBody: '12 пост' },
]



export default function BestPosts() {

    return (
        < Posts posts={posts} />
    )

}