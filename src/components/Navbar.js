import React from "react";
import carticon from "../images/cartIcon.svg";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const Navigate = useNavigate();
  return (
    <div className="flex h-20 w-full border-2 items-center p-5 shadow-lg justify-between fixed bg-white z-10">
      <h1
        className=" shadow-lg font-semibold italic text-[30px]"
        onClick={() => Navigate("/")}
      >
        Souled
      </h1>
      <section className=" flex gap-10 font-semibold">
        <h4>Home</h4>
        <h4>about</h4>
        <h4>shop</h4>
        <h4>Favorites</h4>
        <h4>Orders</h4>
      </section>
      <section>
        <div
          onClick={() => Navigate("/cart")}
          className="flex flex-col items-center"
        >
          <img className="h-10 w-10" src={carticon} alt="cart" />
          <h1 className="font-bold">My Cart</h1>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
