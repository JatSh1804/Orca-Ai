import { Link } from "react-router-dom";

export function Tab(props) {
    return <>
        <Link to={'/'} className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200">
            {props.icon}
            <div className="flex gap-2">
                {props.description}
            </div>

        </Link>
    </>
}