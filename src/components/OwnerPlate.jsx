import React from 'react';
import { HiHome } from 'react-icons/hi';

const OwnerPlate = ({ owner, coOwner, ufNumber, locationLink }) => {
    return (
        <a href={locationLink}>
            <div className='p-2 flex items-center rounded min-h-[100px]'>
                <div>
                    <HiHome className='text-6xl text-white m-2 mr-4'/>
                </div>
                <div>
                    <p className='text-white'>UF: {ufNumber}</p>
                    <p className='text-white text-lg'>{owner}</p>
                    {
                        coOwner ? (
                            <p className='text-white text-lg'>{coOwner}</p>
                        ) :
                        ''
                    }
                </div>
            </div>
        </a>
    )
}

export default OwnerPlate