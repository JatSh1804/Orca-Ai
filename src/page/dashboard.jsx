import React from "react"
import '../index.css'
import { Link } from "react-router-dom"
import { Accordion } from "../components/accordion"
import { Tab } from "../components/tab"

export function Dashboard() {
    const fileInputRef = React.useRef(null);

    const handleFileButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Handle the file upload or processing here
    };
    return <>
        <div className="flex min-h-screen bg-gray-50">
            <aside className="fixedleft-0 top-0 h-screen flex flex-col w-64  bg-neutral-100 border-r">
                <div className="m-4 mt-12 mb-8 h-screen bg-white rounded-xl p-4 w-fit">
                    <div className="flex items-center justify-center mb-8">
                        <span className="text-black text-2xl font-bold">ORCA AI</span>
                    </div>
                    <nav className="flex flex-col justify-between h-[90%] w-fit">
                        <div className="flex-1 space-y-4 w-fit">
                            <Tab icon={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>}
                                description='Home'
                            />
                            <Tab icon={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            </svg>}
                                description='Templates' />

                            <Tab description="Sales Performance" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"> <line x1="12" x2="12" y1="20" y2="10"></line> <line x1="18" x2="18" y1="20" y2="4"></line> <line x1="6" x2="6" y1="20" y2="16"></line></svg>} />
                            <Tab description="Reports" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"> <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path> <path d="M14 2v4a2 2 0 0 0 2 2h4"></path> <path d="M10 9H8"></path> <path d="M16 13H8"></path> <path d="M16 17H8"></path> </svg>} />
                        </div>
                        <Link to={'/'}>
                            <div className="flex items-center p-2 space-x-2 rounded-lg hover:bg-gray-100">
                                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                    <img className="aspect-square h-full w-full" alt="User Avatar" src="https://avatars.githubusercontent.com/u/124599?v=4" />
                                </span>
                                <div>
                                    <div className="font-medium">Adela Parkson</div>
                                    <div className="text-sm text-gray-500">Manager</div>
                                </div>
                            </div>
                        </Link>
                    </nav>
                </div>
            </aside>
            <main className="flex-1 p-8 h-screen overflow-y-scroll" >
                <div className="flex items-center space-x-2 mb-4">
                    <button className="bg-neutral-200 active:bg-neutral-100 text-gray-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none mr-4 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-1 px-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            // width="24"
                            // height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                        >
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>
                        Back
                    </button>
                    <a href="/"><span className="hover:underline text-neutral-500">Templates</span></a>&nbsp;/
                    <a href="/"><span className="hover:underline text-neutral-500">Sales Effectiveness </span></a>&nbsp;/
                    <a href="/"><span className="hover:underline text-neutral-500">BANT</span></a>
                </div>
                <h1 className="text-2xl text-gray-700 font-bold mb-4">Analyse the calls for Soft Skills Coaching</h1>
                <div className="space-y-4 mb-8">
                    <div className="text-gray-600 font-semibold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 inline"
                        >
                            <path d="m6 9 6 6 6-6"></path>
                        </svg> How does it work?</div>
                    <div className="text-gray-600 font-semibold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 inline"
                        >
                            <path d="m6 9 6 6 6-6"></path>
                        </svg> When should you use this?</div>
                </div>
                <div className="flex space-x-8">
                    <div className="flex-1 border-2 border-slate-300 rounded-xl p-4 w-3/5 h-1/2">
                        <div
                            role="tablist"
                            aria-orientation="horizontal"
                            className="flex gap-4 rounded-lg w-fit p-1"
                            tabIndex="0"
                            data-orientation="horizontal"
                            style={{ outline: 'none' }}
                        >
                            <input
                                type="radio"
                                role="radio"
                                aria-selected="true"
                                aria-controls="radix-:r0:-content-undefined"
                                data-state="active"
                                id="setup"
                                name="category"
                                className="peer/setup hidden inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                                tabIndex="-1"
                                checked
                                data-orientation="horizontal"
                                data-radix-collection-item=""
                                value='Setup'
                            />
                            <label for="setup" className="cursor-pointer peer-checked/setup:underline decoration-[#4D30D9] underline-offset-8 decoration-4 font-semibold text-gray-700 p-[2px] rounded">Setup</label>

                            <input
                                type="radio"
                                role="radio"
                                name="category"
                                aria-selected="true"
                                aria-controls="radix-:r0:-content-undefined"
                                data-state="active"
                                id="sample"
                                className="peer/draft hidden sample inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                                tabIndex="-1"
                                data-orientation="horizontal"
                                data-radix-collection-item=""
                                value='Sample Output'
                            />
                            <label for="sample" className="cursor-pointer peer-checked/draft:underline decoration-[#4D30D9] decoration-4 underline-offset-8  category-radio font-semibold text-gray-700 p-[2px] rounded-md">Sample Output</label>

                        </div>

                        <div
                            data-state="active"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-:r0:-trigger-undefined"
                            id="radix-:r0:-content-undefined"
                            tabIndex="0"
                            className="mt-8 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            <div className="space-y-4">
                                <Accordion header='Call Opening' description='Was the purpose of the call stated in the beginning?'>
                                    <div className="p-6">
                                        <div className="space-y-2">
                                            <div>Was the purpose of the call stated in the beginning?</div>
                                            <div className="p-4 bg-gray-100 rounded-md">
                                                <div className="flex items-center justify-between">
                                                    <div>HOW WILL THIS BE SCORED?</div>
                                                    <button style={{ color: 'rgb(77, 48, 217)', background: 'rgb(148 132 222 / 24%)' }} className="px-2 py-[2px] inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground  rounded-md">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"

                                                            className="w-4 h-4"
                                                        >
                                                            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path>
                                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                                            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path>
                                                        </svg>
                                                        Edit
                                                    </button>
                                                </div>
                                                <div className="mt-2 space-y-1 text-sm text-gray-700">
                                                    <div>
                                                        Did the PST member greet the customer and use the call opening with good energetic tone?
                                                    </div>
                                                    <div>Did the PST member use the right salutation and greeting on the email?</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion>
                                <Accordion header='Greeting' description='Did the salesperson use an appropriate opening greeting?'> <div className="p-6">
                                    <div>Did the salesperson use an appropriate opening greeting?</div>
                                </div>
                                </Accordion>
                                <Accordion header='Call Closing' description='Did the sales person appear confident and knowledgeable about the product?'>
                                    <div className="p-6">
                                        <div>Did the salesperson summarize the key points discussed during the call?</div>
                                    </div>
                                </Accordion>
                                {/* <Accordion description='Confidence'>
                                    <div className="p-6">
                                        <div>Did the sales person appear confident and knowledgeable about the product?</div>
                                    </div>
                                </Accordion> */}

                            </div>
                        </div>
                    </div>
                    <div className="w-80">
                        <div className="space-y-4">
                            <div className="p-4 bg-white border rounded-md">
                                <div className="font-medium">Upload Videos, Audio or Transcripts</div>
                                <div className="space-y-2 mt-4">
                                    <button className="inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                                        <img height='30px' width='30px' src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" />
                                        {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5"
                                        >
                                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                                            <path d="M12 12v9"></path>
                                            <path d="m16 16-4-4-4 4"></path>
                                        </svg> */}
                                        Upload files from Drive
                                    </button>
                                    <button type="button" onClick={handleFileButtonClick} className="inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5"
                                        >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="17 8 12 3 7 8"></polyline>
                                            <line x1="12" x2="12" y1="3" y2="15"></line>
                                        </svg>
                                        Upload files from this computer
                                    </button>
                                    <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
                                </div>
                            </div>
                            <div className="p-4 bg-white border rounded-md">
                                <div className="font-medium">Data Integrations</div>
                                <div className="space-y-2 mt-4">
                                    <div className="flex items-center space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5 text-orange-500"
                                        >
                                            <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                            <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                            <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                        </svg>
                                        <span>HubSpot</span>
                                    </div>
                                    <div className="space-y-1 mt-2">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                role="checkbox"
                                                aria-checked="false"
                                                data-state="unchecked"
                                                value="on"
                                                defaultChecked
                                                className="bg-white accent-white"
                                                id="integration1"
                                            ></input>
                                            <label htmlFor="integration1" className="text-sm">
                                                Some data integration I have to ask about
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                role="checkbox"
                                                aria-checked="false"
                                                data-state="unchecked"
                                                value="on"
                                                defaultChecked
                                                className="accent-white"
                                                id="integration2"
                                            ></input>
                                            <label htmlFor="integration2" className="text-sm">
                                                Some data integration
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" onClick={() => { alert('Generating a Report!') }} className="text-white bg-[#3f47d8] py-2 px-1 w-full rounded-md">Generate Report</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
}
