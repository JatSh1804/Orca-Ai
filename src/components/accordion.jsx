import { useState } from "react"

export function Accordion({ header, description, children }) {
    const [isOpen, setOpen] = useState(false);
    // const handleOpen = () => {
    //     setOpen(true);
    // }
    return <>
        <div onClick={() => { setOpen(prev => !prev) }} className="cursor-pointer transition duration-150 ease-out rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-4">
                <span className="flex align-center mb-4">
                    <svg className="inline p-1 rounded-md mr-1" version="1.1" height='25px' id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" style={{ background: 'rgba(148, 132, 222, 0.24)' }} xml:space="preserve"><path class="st1" style={{ fill: 'rgb(77, 48, 217)' }} d="M25.838 31H6.162a3.957 3.957 0 0 1-3.245-1.661 3.956 3.956 0 0 1-.549-3.604l.704-2.113a6.034 6.034 0 0 1 4.966-4.059C10.131 19.307 13.211 19 16 19c2.788 0 5.869.307 7.963.563a6.032 6.032 0 0 1 4.965 4.059l.704 2.113a3.954 3.954 0 0 1-.55 3.604A3.955 3.955 0 0 1 25.838 31zM16 21c-2.688 0-5.681.298-7.718.549a4.02 4.02 0 0 0-3.312 2.706l-.704 2.112c-.206.618-.106 1.274.274 1.802S5.511 29 6.162 29h19.676a1.98 1.98 0 0 0 1.622-.83c.381-.528.48-1.185.275-1.803l-.704-2.112a4.02 4.02 0 0 0-3.312-2.706C21.681 21.298 18.687 21 16 21zM16 18c-4.687 0-8.5-3.813-8.5-8.5S11.313 1 16 1c4.687 0 8.5 3.813 8.5 8.5S20.687 18 16 18zm0-15c-3.584 0-6.5 2.916-6.5 6.5S12.416 16 16 16s6.5-2.916 6.5-6.5S19.584 3 16 3z" /><path d="M12.04 10.54c-.543 0-.988-.435-1-.98a4.964 4.964 0 0 1 1.394-3.564 4.968 4.968 0 0 1 3.505-1.535c.562.01 1.009.428 1.02.98a1 1 0 0 1-.98 1.02 2.982 2.982 0 0 0-2.103.92 2.981 2.981 0 0 0-.836 2.139 1 1 0 0 1-.98 1.02h-.02z" style={{ fill: 'rgb(77, 48, 217)' }} /></svg>
                    {header}
                </span>
                <h3 className="font-semibold leading-none tracking-tight flex items-center space-x-2">
                    <span className="flex align-center mr-2">
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
                            className="inline"
                            style={{
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', // Conditional rotation
                                transition: 'transform 0.3s ease' // Smooth transition
                            }}
                        >
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </span>

                    {description}
                </h3>
            </div>
            {<div style={{ display: isOpen ? 'block' : 'none', height: isOpen ? 'fit-content' : '0', transition: 'height ease 1s' }}>{children}</div>}
        </div>
    </>
}