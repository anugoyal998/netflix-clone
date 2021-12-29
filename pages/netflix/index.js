import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'

export default function index() {
    const {data:session} = useSession()
    useEffect(()=> {
        async function fetchData(){
            if(session){
                try{
                    await axios.post('/api/auth/user',{
                        name: session?.user?.name,
                        email: session?.user?.email,
                        img: session?.user?.image,
                    })
                }catch(err){
                    console.log(err)
                }
            }
        }
        fetchData()
    },[session])
    return (
        <div>
            <Header/>
        </div>
    )
}

