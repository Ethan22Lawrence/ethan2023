'use client'
import { portfolio } from "@/data"
import { useState } from "react"
import PortfolioInfo from "./PortfolioInfo"
import Link from "next/link"

const Portfolio = () => {
    const [active, setActive] = useState('hero')
    return (
        <div id="portfolio" className="section flex flex-col justify-center mobile-txt-md md:desktop-txt-md">
            <h1 className="text-mobile-txt-lg md:text-desktop-txt-lg">Portfolio</h1>
            <div className="flex justify-center p-[20px]">
                {
                    portfolio.map((item) => {
                        return (
                            <div key={item.key}>
                                <button className={`tab-button text-text w-[110px] border-b-2`} style={{borderColor: `${active === item.key ? `${item.color}` : '#fff'}`}} onClick={() => setActive(item.key)}>
                                    {item.title}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            {
                portfolio.map((item) => {
                    return (
                        <div key={item.key} className="w-full h-[250px]" style={{display: `${active === item.key ? 'block' : 'none'}`}}>
                            <div className="w-full h-[70px] md:h-[100px] p-[20px] flex justify-center items-center text-[18px] md:text-[24px] rounded-md" style={{backgroundColor: `${item.color}`}}>
                                {item.description}
                            </div>
                            <div className="py-[10px]">
                                <div>Tech Stack</div>
                                <div className="flex flex-wrap">
                                    {
                                        item.techStack.map((tech) => {
                                            return (
                                                <span key={tech} className="mr-[12px]">{tech}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {
                              item.integrations &&  <div className="py-[10px]">
                                <div>Integrations</div>
                                <div className="flex flex-wrap">
                                    {
                                        item.integrations.map((integration) => {
                                            return (
                                                <span key={integration} className="mr-[12px]">{integration}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            }
                            { item.url && <div><Link href={item.url} target="_blank" className="text-blue">Live Demo</Link></div>}
                            {item.repo && <div><Link href={item.repo} target="_blank" className="text-blue">Github Repo</Link></div>}
                        </div>
                    )
                })
            }
            <PortfolioInfo data={active} />
        </div>
    )
}

export default Portfolio