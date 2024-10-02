import { Cloud, GitHub, Telegram } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ContactPlatform = () => {

    const contacts = [
        {
            name: "telegram",
            icon: <Telegram className="text-base" />,
            url: "#"
        },
        {
            name: "skype",
            icon: <Cloud className="text-base" />,
            url: "#"
        },
        {
            name: "telegram",
            icon: <GitHub className="text-base" />,
            url: "#"
        }
    ]

    return (
        <div className="flex flex-col items-center fixed top-1/2 right-3 transform -translate-y-1/2">
            <div className="w-1 h-10 bg-white/20 my-4" />
            <div className="flex flex-col bg-white/20 backdrop-blur-md py-2 rounded-full">
                {
                    contacts.map(item => {
                        return (
                            <IconButton key={item.name} className="p-2" size="small">{item.icon}</IconButton>
                        )
                    })
                }
            </div>
            <div className="w-1 h-10 bg-white/20 my-4" />
        </div>
    )
}

export default ContactPlatform;