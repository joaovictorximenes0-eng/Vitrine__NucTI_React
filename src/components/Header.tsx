import { Link, useLocation } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";

import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus } from "lucide-react";

const getNavItemClass = (path: string) => {
  const baseClass =
    "flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border-1";
  if (location.pathname === path) {
    return `${baseClass} bg-[#F2DAAC] text-black`;
  } else {
    return baseClass;
  }
  return;
};

export const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();

  const handleAuthUser = async () => {
    const response = await fetch("http://localhost:3000/me", {
      credentials: "include",
    });

    if (response.status !== 200) {
      console.log("deu ruim");
      return;
    }
    const data = await response.json();
    setUser(data);

    console.log(data);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        credentials: "include",
        method: "POST",
      });

      if (!response.ok) {
        return;
      }
      setUser(null);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    handleAuthUser();
  }, [location.pathname]);

  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <Link to="/">
          <img src="./logo.png" alt="Logo" />
        </Link>

        {user ? (
          <div className="hidden items-center gap-8 text-white md:flex">
            {user.admin && (
              <div className="display-flex flex items-center gap-2 text-[#F2DAAC]">
                <Link to="/">
                  <div className={getNavItemClass("/")}>
                    <Box size={18} />
                  </div>
                </Link>
                <Link to="/pedidos">
                  <div className={getNavItemClass("/pedidos")}>
                    <LayoutDashboard size={18} />
                  </div>
                </Link>
                <Link to="/">
                  <div className={getNavItemClass("/Ainda_não_fiz")}>
                    <Plus size={18} />
                  </div>
                </Link>
              </div>
            )}

            <div className="relative cursor-pointer">
              <ShoppingCart className="" size={18} />
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] p-1 text-black">
                1
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p>{user?.name}</p>
              <LogOut
                className="cursor-pointer"
                size={18}
                onClick={() => handleLogout()}
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <div className="flex h-[35px] w-[130px] items-center justify-center rounded-sm bg-[#F2DAAC]">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
