import React from 'react'
import TableResponses from '../../components/TableResponses'

export default function Admin({data}) {
    return (
        <TableResponses response={data.data}/>
    )
}

export const getServerSideProps = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/form`);
    const data = await response.json();
    return {
        props: {
            data: data
        }
    }
}