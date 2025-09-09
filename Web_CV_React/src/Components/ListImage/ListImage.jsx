import {data_image} from '../../../data'
import './ListImage.css'
export default function ListImage({topic}){
    //Xử lý logic tìm obj có id khớp với topic
    const item = data_image.find(
    value => String(value.id).toLowerCase() === String(topic).toLowerCase()
    );
    //Ta sẽ ra được item là obj có id === topic
    return(
        <div className='image_layout'>
            <img src={item.image} className='pic' ></img>
        </div>
    )
}