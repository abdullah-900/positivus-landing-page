
import { useState } from 'react';
import plusIcon from '../assets/plus icon.svg?url';
import minusIcon from "../assets/minus icon.svg?url";

const WorkingProcess = ({number ,heading, content}) => {

  const [isClicked,setIsClicked]=useState(false);
  const handleClick=()=>{
    setIsClicked(!isClicked);
  }

  if (isClicked) {
    return (
      <div className='flex shadow-base flex-col gap-8 justify-between bg-secondary mx-auto w-[93%] xl:w-11/12  rounded-[45px] p-5 md:px-[60px] md:py-[41px]'>
        <div className='flex items-center justify-between'>
        <div className="flex items-center gap-4 lg:gap-6 ">
        <span className='font-medium text-[1.5rem] xl:text-[3.75rem]'>{number}</span>
        <h3>{heading}</h3>
    </div>
    <button onClick={handleClick}>
      <img className='cursor-pointer w-[30px] h-[30px] xl:w-[58px] xl:h-[58px]' src={minusIcon} alt="minus icon" />
    </button>
        </div>
      <hr />
      <p>{content}</p>
      </div>
    );
  }else {
      return (
<div className='flex shadow-base items-center justify-between bg-background mx-auto w-[93%] xl:w-11/12  rounded-[45px] p-5 md:px-[60px] md:py-[41px]'>
        <div className="flex items-center gap-4 lg:gap-6 ">
        <span className='font-medium text-[1.5rem] xl:text-[3.75rem]'>{number}</span>
        <h3>{heading}</h3>
    </div>
    <button onClick={handleClick}>
      <img className='cursor-pointer w-[30px] h-[30px] xl:w-[58px] xl:h-[58px]' src={plusIcon} alt="plus icon" />
    </button>
</div>
  )
  }

}

export default WorkingProcess