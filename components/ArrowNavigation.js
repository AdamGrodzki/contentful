import React, { useState, useEffect } from 'react';

const ArrowNavigation = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            setShowButton(scrollPosition > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {showButton && (
                <button className='arrowUp' onClick={scrollToTop}>
                    ⇧
                </button>
            )}

            <style jsx>{
                `
                .arrowUp {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 50px;
                    height: 50px;
                    background-color: #38220f;
                    color: #fff;
                    border: none;
                    border-radius: 50%;
                    font-size: 24px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    z-index: 999;
                  }
                
                  .arrowUp:hover {
                    background-color: #724e2c;
                  }
                
                  .arrowUp:focus {
                    outline: none;
                  }
                
                  .arrowUp:active {
                    transform: scale(0.9);
                  }
            `
            }</style>
        </>
    );
};

export default ArrowNavigation;