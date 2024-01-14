import Title from "./Title"
import QrImage from "../assets/image-qr-code.png"

const Card = () => {
    return (
        <div className="max-w-sm shadow-xl w-11/12 bg-white rounded-xl p-4 mx-auto h-fit">
            <img src={QrImage} className="rounded-xl mb-4" />
            <Title>
                Improve your front-end skills by building projects
            </Title>
            
            <p className="
                font-normal text-cs-grayish-blue text-center
                w-10/12 mx-auto
            "
            >
                Scan the QR code to visit Frontend Mentor and
                take your coding skills to the next level
            </p>
        </div>
    )
}

export default Card