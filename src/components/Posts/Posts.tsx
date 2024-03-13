
import './stylesModule.css'
import PostItem from '../PostItem/PostItem';

interface Props {
    posts: { imgUrl: string, postBody: string }[];
}


export default function Posts(props:Props) {
    return (
        //<main className='mainpost' >
        //    <PostBanner item={''} image={''} />
        //</main >

        <div style={ {display:"flex"}}>
            {props.posts.map(x => <PostItem post ={x} />)
            }
       </div>

    )
}