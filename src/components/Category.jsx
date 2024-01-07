import category from '../assets/category.png'

const Category = () => {
    return (
        <div className="text-center mt-16">
            <h1 className="text-6xl text-[#F00] pb-10 font-bold">65% OFF</h1>
            <p className="text-[#F00] font-medium py-3">OUR HOLIDAY DEALS ARE BETTER</p>
            <h2 className="text-4xl font-bold"> ALL CATEGORIES</h2>
            <img src={category} alt="" className='mx-auto my-10'/>
        </div>
    );
};

export default Category;