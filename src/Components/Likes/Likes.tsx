import { useState } from 'react'
import {AiTwotoneLike, AiOutlineLike} from 'react-icons/ai'


export const Likes = () => {
const [status , setStatus] = useState(false);
if (status)  return <AiTwotoneLike  size={20} onClick={() => setStatus(false)}/>;
return <AiOutlineLike size={20} onClick={() => setStatus(true)} />;

    
}