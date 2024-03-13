import { useDispatch } from 'react-redux';
import { Post } from '../../model/post';
import BannerImage from '../BannerImage/BannerImage';
import './stylesModule.css'
import { Actions } from "../../stateManagement/postReducer";
interface Props {
    post: Post;
}

export default function PostItem(props: Props) {
    const { post } = props;
    const dispatch = useDispatch();
    const select = () => {
        dispatch(Actions.setPost(post));
        // dispatch({ type: '[USER_STATE] USER_SET', payload: user });
        // navigate(`/ape/${user.username}`);
    };
    return (
        <div className='banner'>
            <BannerImage image={props.post.imgUrl } />
            <h3 className='titel' > {props.post.postBody }</h3>
            <button onClick={select}>Выбрать</button>
        </div>
    )
}