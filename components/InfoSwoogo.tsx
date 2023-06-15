import Image from 'next/image'

const InfoSwoogo = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row mb-[40px]">
                <Image
                    src="/images/swg_chat.png"
                    width={500}
                    height={500}
                    alt="Hero battle game start"
                />
                <div className="flex items-center ml-[20px]">
                    Event Chat is a cutting-edge application developed using React.js and seamlessly integrated into the event website. Custom user interface using the Comet Chat SDK, providing a unique and immersive experience. By harnessing the power of custom React hooks and listeners, the chat system updates in real-time, ensuring instant message delivery and an unparalleled level of interactivity.
                </div>
            </div>
            <div className="flex flex-col md:flex-row mb-[40px]">
                <Image
                    src="/images/swg_app_01.jpg"
                    width={500}
                    height={500}
                    alt="Hero battle game start"
                />
                <div className="flex items-center ml-[20px]">
                    Developed using React Native, the Swoogo app empowers event attendees with a comprehensive platform to effortlessly access vital details about schedules, sessions, and esteemed speakers.
                </div>
            </div>
            <div className="flex flex-col md:flex-row mb-[40px]">
                <Image
                    src="/images/swg_app_02.jpg"
                    width={500}
                    height={500}
                    alt="hero battle character list"
                />
                <div className="flex items-center  ml-[20px]">
                    Seamless convenience the app as it elegantly showcases precise event times and locations, allowing you to effortlessly navigate through the captivating program. Unlock the power of personalization by customizing your very own agenda, tailoring it to suit your preferences and ensuring a truly personalized event experience.
                </div>
            </div>
        </div>
    )
}

export default InfoSwoogo