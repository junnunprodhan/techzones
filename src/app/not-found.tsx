import Image from 'next/image';
import notfound from '../assets/images/notfound.png'
const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen text-center">
           <div>
            <Image
                alt='notfound'
                width='500'
                height='500'
                src={notfound}
            />
           <h4 className='text-4xl font-bold mb-3'>Ohh! Page Not Found </h4>
            <p>It seems we can't find what you're looking for. Perhaps searching can help or Go Back to the previous page.</p>
           </div>
        </div>
    );
};

export default NotFound;