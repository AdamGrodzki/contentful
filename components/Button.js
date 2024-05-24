import { useRouter } from 'next/router';

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <>
            <button className='prevButton' onClick={handleBack}>Back</button>
            <style jsx>{`
        .prevButton {
            padding: 10px 20px;
            border-radius: 10px;
            color: #000;
            background-color: #fff;
            border: none;
            text-transform: uppercase;
            font-weight: bold;
            box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;

            position: relative;
            top: 20px;
            left: -30px;
                }

        .prevButton:hover {
            background-color: #38220f;
            color: #fff;
            box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
        }
        `}</style>
        </>
    );
}

export default BackButton;