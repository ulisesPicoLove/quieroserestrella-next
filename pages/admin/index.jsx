import React from 'react'
import TableResponses from '../../components/TableResponses'
import http from 'http';


export default function Admin({data}) {
    return (
        <TableResponses response={data.data}/>
    )
}

export const getServerSideProps = async (context) => {
    const { req } = context;
    const cookies = req.headers.cookie || '';
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/form`, {
        headers: {
            "Cookie": cookies
        }
    });
    const data = await response.json();
    return {
        props: {
            data: data
        }
    }
}