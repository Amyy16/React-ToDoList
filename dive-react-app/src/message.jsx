const Message = () => {
    const fullname = "Vee I";

    if (fullname) return <h3>Hello {fullname}</h3>
    return(
        <div>
            <h2>
                This is a Message
            </h2>
        </div>
    )
}
export default Message
