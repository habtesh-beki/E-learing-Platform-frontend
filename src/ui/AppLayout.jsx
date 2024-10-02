import { Outlet } from 'react-router-dom'
import  Header from './Header'
import Nav from './Nav'

export default function AppLayout(){
    return (
        <div className='flex'>
            <Nav />
            <div className='bg-bg_main w-full'>
              <Header />
              <Outlet />
            </div>
        </div>
    )
}