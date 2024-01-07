
import bannerImage from '../assets/banner.png'
const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      };
    
    return (
        <div className="max-w-7xl h-96 md:h-[400px] lg:h-[600px] mx-6 before:inset-0 before:bg-black/70 before:absolute before:z-10 relative text-white" style={bannerStyle}>
        <div className="absolute z-20 flex justify-around items-center inset-0 mx-auto">
          <div className="md:w-1/2 px-2 text-center md:text-center">
            <h1 className="text-xl lg:text-3xl mb-3">Happy New Year</h1>
            <h1 className='text-6xl leading-[80px] font-bold'>New Year Party <br /> Celebration</h1>
           
          </div>
         
        </div>
      </div>
    );
};

export default Banner;