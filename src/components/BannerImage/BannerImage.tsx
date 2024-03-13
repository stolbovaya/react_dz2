import './stylesModule.css'
interface Props {
    image: string;
}

export default function BannerImage(props: Props) {
    return (
        <div className='wrapper'>
            {props.image ? <img className ='imgpost' src={props.image} /> : null}
        </div>
    )
}
