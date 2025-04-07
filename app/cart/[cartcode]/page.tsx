import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import React from "react";

const CartItemPage = () => {
  const cartitems_count = 3;

  return (
    <div className="main-max-width padding-x mx-auto py-9">
      <h1 className="font-semibold text-2xl text-gray-800 mb-6">Cart</h1>

      <div className="flex flex-wrap gap-6 lg:gap-8 justify-between w-full">
        {/* Cartitem */}
        <div className="w-[600px] max-lg:w-full border border-gray-200 shadow-sm rounded-lg bg-white overflow-hidden flex-1">
          <div className="max-h-[400px] overflow-y-auto px-6 py-4">
            {/* {cartitems_count > 0 ? <CartItem  /> : <p className="text-center text-gray-500 py-10">Your cart is empty.</p>} */}

            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        {/* Cartitem */}

        <CartSummary />
      </div>
    </div>
  );
};

export default CartItemPage;
