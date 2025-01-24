import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex  w-100% fixed z-10 font-light  right-1 text-xl top-64 p-4">
        <ul className="flex place-items-end flex-col gap-3">
          <li onClick={() => navigate("/")} className="cursor-pointer">
            Home
          </li>
          <li onClick={() => navigate("/about")} className="cursor-pointer">
            About
          </li>

          <li onClick={() => navigate("/skills")} className="cursor-pointer">
            Skills
          </li>
          <li onClick={() => navigate("/projects")} className="cursor-pointer">
            Projects
          </li>
          <li onClick={() => navigate("/contact")} className="cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
