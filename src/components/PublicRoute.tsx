import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("document.cookie:", document.cookie);

    const cookies = document.cookie.split(";");
    const userCookie = cookies.find((c) => c.trim().startsWith("user="));
    //console.log(cookies);
    //console.log("userCookie:", userCookie);

    if (userCookie) {
      console.log("Redirecionando...");
      navigate("/", { replace: true });
      return;
    }

    setIsChecking(false);
  }, [navigate]);

  if (isChecking) {
    return <p>Carregando</p>;
  }

  return <div>{children}</div>;
};
export default PublicRoute;
