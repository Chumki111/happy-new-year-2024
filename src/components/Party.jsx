import partyImage from '../assets/party.png'
import image from '../assets/2024-removebg-preview.png'
const Party = () => {
    const partyStyle = {
        backgroundImage: `url(${partyImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      };
    return (
        <div className="max-w-7xl h-96 md:h-[400px] lg:h-[600px] mx-6 before:inset-0 before:bg-black/70 before:absolute before:z-10 relative text-white" style={partyStyle}>
        <div className="absolute z-20 flex justify-around items-center inset-0 mx-auto">
          <div className="md:w-1/2 px-2 text-center md:text-start">
            <h1 className="text-xl md:text-3xl lg:text-6xl leading-[80px] mb-3">Welcome to <br /> midnight  party</h1>
           <p className='py-4'>Dolor sit amet consectetur. Consequat eget consectetur maecenas sed molestie malesuada. Ipsum sed sodales risus ut pellentesque vel euismod. </p>
           <button className='mt-10 pl-7 text-xl font-semibold'>Join Now</button>
           
          </div>
         <img src={image} alt="" />
        </div>
      </div>
    );
};

export default Party;