import { experience } from "@/data"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Experience = () => {

    const renderLink = (href: string | null, company: String) => {
        if(href) {
            return <Link className="text-blue text-[16px] md:text-[18px]" href={href} target="_blank">{company}</Link>
        } else {
            return  <div className="text-[16px] md:text-[18px]">{company}</div>
        }
    }
    
    return (
        <div id="experience" className="section flex flex-col justify-center mobile-txt-md md:desktop-txt-md">
            <h1 className="text-mobile-txt-lg md:text-desktop-txt-lg">Experience</h1>
            <div className="time-line-centered">
                {
                    experience.map((exp) => {
                        return (
                            <div key={exp.company} className="timeline-entry">
                                <div className="absolute rounded-full bg-blue h-[40px] w-[40px] border-4 border-light-gray flex items-center justify-center" style={{background: `${exp.color}`}}>
                                    <FontAwesomeIcon className="text-white" icon={faLaptopCode} />
                                </div>
                                <div className="timeline-entry-inner p-[10px] bg-light-gray rounded-md">
                                    <h2 className="text-[18px] md:text-[20px]">{exp.title}</h2>
                                    {renderLink(exp.website, exp.company)}
                                    <div className="italic font-light text-mobile-txt-sm md:text-desktop-txt-sm mb-[5px]">{exp.dates}</div>
                                    <div className="text-mobile-txt-md md:text-desktop-txt-md ml-[10px] mb-[10px]">
                                        {
                                            exp.description.map((desc) => {
                                                return (
                                                    <li key={Math.random()}>{desc}</li>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="text-mobile-txt-sm md:text-desktop-txt-sm">
                                        {
                                            exp.tech.map((tech) => {
                                                return (
                                                    <span className="mr-[7px]" key={Math.random()}>{tech}</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience