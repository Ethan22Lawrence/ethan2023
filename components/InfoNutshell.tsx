import Image from 'next/image'

const InfoNutshell = () => {
    return (
        <div>
        <div className="flex flex-col md:flex-row mb-[20px]">
            <Image
                src="/images/nutshellclientcms.jpg"
                width={500}
                height={500}
                alt="StudioEase Dashboard"
            />
            <div className="flex flex-col ml-[20px]">
                <div className="pb-[20px]">
                    Nutshell client CMS application built for clients to manage their services. Full dashboard shows analytics of their visitors and marketing messages. PHP class object stores functions used to get data from a mySQL table and shown on the screen. Ajax and jQuery is used to load new data when filters are selected.
                </div>
                <div className="pb-[20px]">
                    <Image
                        src="/images/nutshellcmsbeefree.jpg"
                        width={500}
                        height={500}
                        alt="StudioEase Dashboard 02"
                    />
                </div>
                <div className="pb-[20px]">
                    BeeFree editor integrated with CMS platform. Saving the designed email will store it as a json string in mySQL table and send out when client schedules it.
                </div>
                <div className="pb-[20px]">
                    <Image
                        src="/images/nutshellcmsautomation.jpg"
                        width={500}
                        height={500}
                        alt="StudioEase Dashboard 02"
                    />
                </div>
                <div className="pb-[20px]">
                    Clients can schedule emails and texts to go out on specific triggers or send out as a blast to every visitor at a specific time. Text marketing messages uses the Twilio API top send text messages.
                </div>
                <div className="pb-[20px]">
                    <Image
                        src="/images/nutshellcmsvisitors.jpg"
                        width={500}
                        height={500}
                        alt="StudioEase Dashboard 02"
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <Image
                src="/images/nutshellmgmtcms.jpg"
                width={500}
                height={500}
                alt="StudioEase Dashboard"
            />
            <div className="flex flex-col ml-[20px]">
                <div className="pb-[20px]">
                    Clients can see all their visitors on the visitor tabs. They can use filters to see the different devices visitors use to sign in with, how many visits they logged, if they are currently connected and their login method.
                </div>
                <div className="pb-[20px]">
                    <Image
                        src="/images/nutshellcmslocation.jpg"
                        width={500}
                        height={500}
                        alt="StudioEase Dashboard 02"
                    />
                </div>
                <div className="pb-[20px]">
                    Nutshell management CMS application built for support and development to manage client accounts. Management CMS dashboard is used for support to report problems with marketing messages, company status, and many other errors.
                </div>
                <div className="pb-[20px]">
                    Location edit allows support to add locations to a company. Uses Google places to search for company location addresses and exports as json string to save into mySQL table. Specific data from Google places, such as address, latitude, longitude, and utc offset get saved into their appropriate columns in mySQL.
                </div>
            </div>
        </div>
    </div>
    )
}

export default InfoNutshell