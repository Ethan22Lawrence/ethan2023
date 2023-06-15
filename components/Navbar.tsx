'use client'
import { menuLinks } from "@/data"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        })
    }


    return (
        <div className="fixed w-full p-[10px] md:p-[20px] text-text bg-white z-10" style={{boxShadow: "0 4px 2px -2px #e6e6e6"}}>
            <div className="mobile">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
                <div className={`flex flex-col ${menuOpen ? 'menu-open' : 'menu-closed'}`}>
                    {
                        menuLinks.map((menu: string) => {
                            return (
                                <Link key={menu} href={`#${menu}`} onClick={(e) => {handleScroll(e); setMenuOpen(!menuOpen)}}>{menu.charAt(0).toUpperCase() + menu.slice(1)}</Link>
                            )
                        })
                    }
                    <Link href="https://www.linkedin.com/in/ethan-lawrence/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    <Link href="https://github.com/Ethan22Lawrence" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></Link>
                </div>
            </div>
            <div className='desktop flex justify-between text-text'>
                <div>
                    {
                        menuLinks.map((menu: string) => {
                            return (
                                <Link className="mr-[10px]" key={menu} href={`#${menu}`} onClick={handleScroll}>{menu.charAt(0).toUpperCase() + menu.slice(1)}</Link>
                            )
                        })
                    }
                </div>
                <div>
                    <Link className="text-[18px] md:text-[20px] mr-[10px] " href="https://www.linkedin.com/in/ethan-lawrence/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    <Link className="text-[18px] md:text-[20px] mr-[10px]" href="https://github.com/Ethan22Lawrence" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar