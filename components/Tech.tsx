import { tech } from "@/data"

const Tech = () => {
  return (
    <div
      id="tech"
      className="section flex flex-col justify-center mobile-txt-md md:desktop-txt-md"
    >
      <h1 className="text-mobile-txt-lg md:text-desktop-txt-lg">Tech</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tech.map((item) => {
          return (
            <div key={item.name} className="my-[10px]">
              <h3
                className="text-mobile-txt-md md:text-desktop-txt-md text-center"
                style={{
                  color: item.color,
                }}
              >
                {item.name}
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tech
