import Image from 'next/image'

const InfoPricespider = () => {
    return (
        <div className="flex flex-col">
        <div className="flex flex-col md:flex-row mb-[40px]">
            <Image
                src="/images/colgatepalmolive.jpg"
                width={500}
                height={500}
                alt="Hero battle game start"
            />
            <div className="flex items-center ml-[20px]">
                Experience the cutting-edge web application developed exclusively for Colgate Palmolive, revolutionizing the way thousands of visitors interact with their extensive range of products. Seamlessly navigate through a vast array of offerings, effortlessly discovering the availability of each item, whether it is online or at a nearby physical store.
            </div>
        </div>
        <div className="flex flex-col md:flex-row mb-[40px]">
            <Image
                src="/images/denonlocal.jpg"
                width={500}
                height={500}
                alt="hero battle character list"
            />
            <div className="flex items-center ml-[20px]">
                custom tailored for Denon US and EU. Seamlessly connecting consumers with a world of possibilities, this cutting-edge platform enables effortless access to real-time stock availability and current pricing. Whether online or at a nearby physical store, visitors are empowered to make informed decisions by effortlessly exploring the options available in their vicinity.
            </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <Image
                src="/images/method.jpg"
                width={500}
                height={500}
                alt="hero battle character details"
            />
            <div className="flex items-center ml-[20px]">
                Method by SC Johnson Professional web application. Custom solution that impeccably aligns with the Method brand guidelines. Discover a wide array of product information at your fingertips, empowering consumers with a comprehensive overview of offerings that perfectly cater to their shopping needs.
            </div>
        </div>
    </div>
    )
}

export default InfoPricespider