import { useParams } from 'next/navigation';
import React from 'react';

const ListDetails = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            slug
        </div>
    );
};

export default ListDetails;