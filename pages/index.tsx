import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import {useWeb3} from '@3rdweb/hooks'
import { client } from '../lib/sanityClient'
import { useEffect } from 'react'
import toast, {Toaster} from 'react-hot-toast'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {
  const { address, connectWallet} = useWeb3()

  //Toast FUNCTION for notification when user Logged IN ***
  const welcomeUser = (userName, toastHandler = toast) =>{
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background:'#04111d',
          color:'#fff',
        }
      }
    )
  }

  //FUCNTION : Automatically add user if does not exist in sanity by (id = wallet address)
  useEffect(() =>{
    if (!address) return
    ;(async () =>{
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)
      welcomeUser(result.userName)
    })() 
  }, [address])

  //Conditional rendering if logged in***
  return (
    <div className={style.wrapper}>
    <Toaster position='top-center' reverseOrder= {false} background-color='black' />
      {address ? (
      <>
        <Header />
        <Hero />
      </>
      ) : (
        <div className={style.walletConnectWrapper}>
        <button className={style.button} onClick={()=>connectWallet ('injected')}>Connect Wallet</button>
        <div  className={style.details}>
          You need the latest update version of chrome to <br /> connect your wallet !
        </div>
      </div>
      )},
    </div>
  )
}

