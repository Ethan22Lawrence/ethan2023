import Image from 'next/image'

const Start = () => {
    return (
        <div id="start" className="section flex justify-center items-center flex-col bg-white mt-[50px]">
            <Image
                    src="/images/me.png"
                    width={400}
                    height={400}
                    alt="me"
                />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[30px] md:text-[60px]">Hi! I&#39;m Ethan</h1>
                <h2 className="text-mobile-txt-md md:text-desktop-txt-md">Software Engineer</h2>
            </div>
            <div className="flex justify-center items-center md:items-start">
                
            </div>
        </div>
    )
}

export default Start