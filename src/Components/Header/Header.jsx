
import profile from '../../assets/images/profile.png';

const Header = () => {
      return (
            <div className='mt-7 pb-4 mb-4 border-b flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0'>
                  <h1 className="text-[#111] text-4xl font-bold">Knowledge Cafe</h1>
                  <img src={profile} alt="" />
            </div>
      );
};

export default Header;