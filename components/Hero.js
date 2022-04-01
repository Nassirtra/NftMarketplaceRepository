import React from 'react'

//TAILWAIND CSS STYLING
const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/0wR0mYJQpc_r_JAsqpNsIQxbQRNzV6Xko2MrDRM-2HievTFnqeNed_FO9jyWFOt5Vts9B_3zeCCARn2B7sH91_9Z8DHJ8lMTuzWsaw=h200')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }
  

const Hero = ()=> {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Discover, collect, & sell NFTs !
                        </div>
                        <div className={style.description}>
                            NFT Traders is the world&apos;s largest NFT marketplace 
                        </div>
                        <div className={style.ctaContainer}>
                            <button className={style.accentedButton}>Explore</button>
                            <button className={style.button}>Create</button>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        <img className="rounded-t-lg" src ='https://lh3.googleusercontent.com/bqrkMczxVTE_T6lDLl9TxSxweRsRLgHSaLfDhzgMje_gaSIOIOuKAyfguV_ES1Ar3fjf3sgrmsHOkjxvAdiEgaWa8Hzt3fXuZmkpdg=w322' alt=""/>
                        <div className={style.infoContainer}>
                            <img className="h-[2.25rem] rounded-full" src="https://scontent.fcdg3-1.fna.fbcdn.net/v/t1.18169-9/20294084_1126603117474606_171066623312929047_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=e8mQIHNbUC8AX9Mpghk&_nc_ht=scontent.fcdg3-1.fna&oh=00_AT_t-4QtsCRfxNkXuyslm7es-IrioCiWeRTYjUg0tV5F-w&oe=6251B5E2" alt="" />
                            <div className={style.author}>
                                <div className={style.name}>cooltown</div>
                                <a className="text-[#1868b7]" href="https://opensea.io/assets/0xbd46d5ea27eee3924dbdb8f41e1a3dbf837c2cd3/1117"              
                                >Power Music Seed's</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero