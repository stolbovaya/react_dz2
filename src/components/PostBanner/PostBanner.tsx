import BannerImage from '../BannerImage/BannerImage';
import './stylesModule.css'
interface Props {
    item: string;
    image: string;
}

export default function PostBanner(props: Props) {
    return (
        <div className='banner'>
            <BannerImage image={props.image } />
            <h3 className='titel' > { props.item}</h3>
        </div>
    )
}