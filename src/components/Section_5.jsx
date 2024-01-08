
import roundedImage from '../assets/Ellipse 1.png';
import image from '../assets/happy-new-year (1) 1.png'
const Section_5 = () => {
    return (
        <div className="flex flex-col md:flex-row justify-evenly my-10">
            <div className='pt-16 space-y-3'>
  <h4 className='text-[#F00]'>NEW BEST OFFER</h4>
  <h2 className='text-2xl font-bold'>Coming Soon</h2>
  <p className='max-w-sm'>Dolor sit amet consectetur. Consequat <br /> eget consectetur maecenas sed molestie <br /> malesuada. Ipsum sed sodales risus ut <br /> pellentesque vel euismod. </p>
            </div>
            <div className="border-4 border-[#F00] rounded-full">
        <img src={ roundedImage} alt="image" className='p-4'/>
            </div>
            <div className='pt-16 space-y-3'>
                <h2 className='text-3xl text-[#F00] font-bold'>2024</h2>
                <p className='max-w-sm'>
                Dolor sit amet consectetur. <br /> Consequat eget consectetur  <br /> maecenas sed.
                </p>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Section_5;