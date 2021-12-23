const Error = ({mensaje}) => {
    return (
        <div className="bg-red-200 text-center p-3 UPPERCASE font-bold mb-3 rounded-md">
            <p>{mensaje}</p>
        </div>
    )
}

export default Error
