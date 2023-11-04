import axios from 'axios';
import ImageSource from '../models/ImageSource';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getImageSource = async () => {
    const response = await axios.get( `${baseUrl}/image-sources` )
    return response.data as ImageSource[];
};

export default getImageSource;