import{ useState } from 'react'

import defaultImage from '../../images/default-user-img.jpg';
import { Box } from './UserImage.styled';

export const UserImage = ({ file }) => {
  const [preview, setPreview] = useState(null);
  
  const reader = new FileReader();
  reader.readAsDataURL(file);
  
  reader.onload = () => {
    setPreview(reader.result)
  };

  return (
    <Box>
     <img
      src={preview ? preview : defaultImage}
      alt='User'
      width='182px'
      height='182px'/>
    </Box>)
};