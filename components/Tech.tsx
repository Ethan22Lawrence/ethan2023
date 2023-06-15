import { tech } from "@/data"

const Tech = () => {
    return (
        <div id="tech" className="section flex flex-col justify-center mobile-txt-md md:desktop-txt-md">
            <h1 className="text-mobile-txt-lg md:text-desktop-txt-lg">Tech</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    tech.map((item) => {
                        return (
                            <div key={item.name} className="relative my-[20px]">
                                <h3 className="text-mobile-txt-md md:text-desktop-txt-md">{item.name}</h3>
                                <div className="h-[12px] w-full bg-light-gray rounded-md">
                                    <div className="relative h-full rounded-md" style={{width: `${item.knowledge}%`, background: `${item.color}`}}>
                                        <span className="absolute right-0 -top-[12px] p-[10px] text-[10px] text-white">{`${item.knowledge}%`}</span>
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

export default Tech