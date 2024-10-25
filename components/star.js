"use client"

const PulseStar = (props) => {
    return (
        <div {...props}>
            <div className="pulse-star relative w-12 h-12">
                <div className="pulse-star-box rotate">
                    <div className="bigstar"></div>
                </div>
                <div className="pulse-star-box rotate">
                    <div className="star"></div>
                </div>
            </div>
        </div>
    )
}

export default PulseStar;