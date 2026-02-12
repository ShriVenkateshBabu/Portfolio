import React, { useEffect } from 'react'

//id,size,x,y,opacity,animationDuration
//id,size,x,y,delay,animationDuration
const StarBackground = () => {
    const [stars, setStars] = React.useState([]);
    const [metors, setMetors] = React.useState([]);

    useEffect(() => {
        generateStars();
        generateMetors();

        const handleresize = () => {
            generateStars();
        }
        window.addEventListener("resize", handleresize);
        return () => {
            window.removeEventListener("resize", handleresize);
        }
    }, [])
    const generateStars = () => {
        const numberofStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];

        for (let i = 0; i < numberofStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }
        setStars(newStars);
    }

    const generateMetors = () => {
        const numberofMetors = 4
        const newMetors = [];

        for (let i = 0; i < numberofMetors; i++) {
            newMetors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            })
        }
        setMetors(newMetors);
    }
    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {
                stars.map((star) => (
                    <div
                        key={star.id}
                        className="star animate-pulse-subtle"

                        style={{
                            width: star.size + "px",
                            height: star.size + "px",
                            left: star.x + "%",
                            top: star.y + "%",
                            opacity: star.opacity,
                            animationDuration: star.animationDuration + "s",
                        }}
                    />
                ))
            }
            {
                metors.map((metors) => (
                    <div
                        key={metors.id}
                        className="meteor animate-meteor"

                        style={{
                            width: metors.size * 50 + "px",
                            height: metors.size * 2 + "px",
                            left: metors.x + "%",
                            top: metors.y + "%",
                            animationdelay: metors.delay + "s",
                            animationDuration: metors.animationDuration + "s",
                        }}
                    />
                ))
            }
        </div>
    )
}

export default StarBackground
