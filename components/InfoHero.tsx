import Image from 'next/image'

const InfoHero = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row mb-[40px]">
                <Image
                    src="/images/hero-battle_01.png"
                    width={500}
                    height={500}
                    alt="Hero battle game start"
                />
                <div className="flex items-center ml-[20px]">
                    Next.js Hero Battle Card, a captivating platform designed to showcase my exceptional development skills. Select three formidable heroes, combining their unique strengths to form an unstoppable team capable of vanquishing any opponent team that stands in your way. Prepare for epic encounters and immerse yourself in the thrill of strategic battles that will put your skills to the ultimate test.
                </div>
            </div>
            <div className="flex flex-col md:flex-row mb-[40px]">
                <Image
                    src="/images/hero_battle_02.png"
                    width={500}
                    height={500}
                    alt="hero battle character list"
                />
                <div className="flex items-center  ml-[20px]">
                    Collection of captivating characters at your fingertips with the list of available heroes. Seamlessly navigate through the roster with intuitive scroll pagination, effortlessly retrieving character profiles directly from the API. Search functionality, allowing you to effortlessly locate and delve into the details of your desired character.
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <Image
                    src="/images/hero_battle_03.png"
                    width={500}
                    height={500}
                    alt="hero battle character details"
                />
                <div className="flex items-center ml-[20px]">
                    Unveil the information of each character in the character details popup. Explore their awe-inspiring power stats, gaining insight into their formidable abilities and strengths. Immerse yourself in their personal information, unearthing their fascinating backgrounds, motivations, and unique traits that make them truly remarkable. 
                </div>
            </div>
        </div>
    )
}

export default InfoHero