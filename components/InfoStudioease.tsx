import Image from 'next/image'

const InfoStudioease = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row mb-[20px]">
                <Image
                    src="/images/subsyncapplication.jpg"
                    width={500}
                    height={500}
                    alt="StudioEase Dashboard"
                />
                <div className="flex flex-col ml-[20px]">
                    <div className="pb-[20px]">
                        StudioEase (formally SubSync) react js dashboard shows analytics of their classes and staff. PHP class object stores functions used to get data from a mySQL table and shown on the screen. Data is pull from Mindbody Online and synced to our database. Any changes our software updates Mindbody Online using custom APIs. Webhooks created to update our data if any changes are made in the Mindbody account.
                    </div>
                    <div className="pb-[20px]">
                        <Image
                            src="/images/subsyncapplication02.jpg"
                            width={500}
                            height={500}
                            alt="StudioEase Dashboard 02"
                        />
                    </div>
                    <div className="pb-[20px]">
                        Staff pages built with custom filters. See which staff is using the app and how classes are scheduled.
                    </div>
                    <div className="pb-[20px]">
                        <Image
                            src="/images/subsyncapplication03.jpg"
                            width={500}
                            height={500}
                            alt="StudioEase Dashboard 02"
                        />
                    </div>
                    <div className="pb-[20px]">
                        Flutter mobile app allows staff to see their classes, invites, requests, and notifications. Staff can make substitutions for classes they are permitted to teach. They can manage schedules for multiple companies and locations they teach at. Mobile app get data using AWS Lambda and Node js. Mobile is available to download on Google Play and Apple App Store.
                    </div>
                    <div className="pb-[20px]">
                        <Image
                            src="/images/subsyncapppages.jpg"
                            width={500}
                            height={500}
                            alt="StudioEase Dashboard 02"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col mr-[20px]">
                    <div className="pb-[20px]">
                        Management Admin dashboard is made for the support team to help with any issues users of the client admin or app may have. It shows all the information for every company, location, and staff member.
                    </div>
                    <div className="pb-[20px]">
                        <Image
                            src="/images/subsyncmgmt02.jpg"
                            width={500}
                            height={500}
                            alt="StudioEase Dashboard 02"
                        />
                    </div>
                    <div className="pb-[20px]">
                        Embedded copy of the exact app for every user is built into the management admin. Support can go in and see exactly what each app user sees in their app. Support can also request or accept invites exactly how the app user would.
                    </div>
                    <div className="pb-[20px]">
                        Pipedrive CRM is integrated into our management admin portal. On creation of a company or location we sync that data into pipedrive, creating an organization, organizations for the company locations, and parent child relationship. All team members of that company are added as contacts to that organization and a deal is created for sales and support.
                    </div>
                </div>
                <Image
                    src="/images/subsyncmgmt.jpg"
                    width={500}
                    height={500}
                    alt="StudioEase Dashboard"
                />
            </div>
        </div>
    )
}

export default InfoStudioease