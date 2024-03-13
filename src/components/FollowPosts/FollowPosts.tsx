import Posts from "../Posts/Posts";
import img1 from '../../images/react.svg';
import img2 from '../../images/huhahub.jpg';
import img3 from '../../images/huhahub.svg';

const posts = [
    { imgUrl: img1, postBody: 'Пятый пост' },
    { imgUrl: img2, postBody: 'Четвертый пост' },
    { imgUrl: img3, postBody: 'Восьмой пост' },
]



export default function FollowPosts() {

    return (
        < Posts posts={posts} />
    )

}