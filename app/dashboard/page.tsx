import React from 'react'
import { auth } from '@clerk/nextjs';

function Dashboard() {
    const {userId} = auth();
    return <div>Dashboard User is {userId}</div>;
}

export default Dashboard