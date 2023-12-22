import React from 'react'
import Taskbar from '../components/taskbar'
import TaskCard from '../components/taskcard'

const Dashboard = () => {
    return (
        <div>
            <Taskbar></Taskbar>
            <TaskCard></TaskCard>
        </div>
    )
}

export default Dashboard