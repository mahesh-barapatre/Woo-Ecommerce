import { Icon } from '@iconify/react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import serverUrl from '../config';


function Header() {
  const navigate = useNavigate()

  const itemCount = useSelector((state) => state.cart.total)
  const role = useSelector((state) => state.role.role)
  
  const handleAuth = () => { 
    console.log(role)
    if (role === '') {
      navigate('/login')
    }
    else if (role === 'admin') {
      navigate('/admin')
    }
  }

  const logout = async () => {
    try {
      const response = await axios.post(`${serverUrl}/logout`,
        {},
        {
          withCredentials: true,
        });
      console.log(response);
      location.reload();
    } catch (error) {
      console.log(error.message)
    }
  }

  const iconCss = "transform cursor-pointer hover:scale-150 transition-transform duration-300 ease-in-out";

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center shadow-lg py-3 sm:pl-10 w-full fixed top-0 bg-white z-50">
      <div className="w-full sm:w-1/5 pl-5">
        <Icon icon="logos:woocommerce" width={"290"} />
      </div>

      <div className="flex w-full sm:w-2/5 justify-evenly items-center">
        <Icon
          onClick={() => navigate("/")}
          className={iconCss}
          icon="clarity:home-solid"
          width="30"
          height="30"
        />
        <Icon
          onClick={() => navigate("/wishlist")}
          className={iconCss}
          icon="solar:star-bold-duotone"
          width="30"
          height="30"
        />
        <Icon
          onClick={() => navigate("/help")}
          className={iconCss}
          icon="ion:call-outline"
          width="30"
          height="30"
        />
        <Icon
          onClick={() => navigate("/offer")}
          className={iconCss}
          icon="mingcute:celebrate-line"
          width="30"
          height="30"
        />
        {role === "" ? null : (
          <Icon
            onClick={logout}
            className={iconCss}
            icon="humbleicons:logout"
            width="30"
            height="30"
          />
        )}
        {
          role === "user" ? null : (

            <Icon
              onClick={handleAuth}
              className={iconCss}
              icon="solar:user-broken"
              width="30"
              height="30"
            />
          )
        }
        <div className="">
          <div className="bg-red-500 absolute right-4 top-14 sm:right-8 sm:top-4 z-10 px-2 rounded-full text-white font-bold">
            {itemCount}{" "}
          </div>
          <Icon
            onClick={() => navigate("/cart")}
            className={`${iconCss}`}
            icon="mdi:cart"
            width="30"
            height="30"
          />
        </div>
      </div>
    </div>
  );
}

export default Header
