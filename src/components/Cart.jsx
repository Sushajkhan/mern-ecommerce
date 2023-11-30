import React from 'react'
import Navbar from "./Navbar";



const Cart = () => {
  return (
  
   
        <div className="bg-white flex flex-col pb-12">
          <Navbar/>
          <br /><br /><br />
          <div className="self-center flex w-full max-w-[1288px] justify-between gap-5 mt-10 px-5 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="flex grow-0  flex-col mt-6 items-start max-md:max-w-full">
              <div className="flex items-center gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cef8a1c2-89a9-4531-963c-22a5f12fce28?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="items-stretch self-stretch flex gap-4 max-md:justify-center">
                  <div className="text-zinc-800 text-center text-2xl font-semibold leading-8">
                    Order Summary
                  </div>
                  <div className="self-center flex w-2 shrink-0 h-2 flex-col my-auto rounded-[50%]" />
                  <div className="text-red-500 text-base font-semibold leading-6 self-center my-auto">
                    2 Items
                  </div>
                </div>
              </div>
              <div className="justify-between items-stretch border flex w-[509px] max-w-full gap-5 mt-10 pl-6 pr-2 py-6 rounded-lg border-solid self-end max-md:flex-wrap max-md:pl-5">
                <div className="flex justify-between gap-5 items-start">
                  <img
                    loading="lazy"
                    srcSet="/public/images/products/image3.png"
                    className="aspect-[0.67] object-contain object-center w-28 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-800 text-base font-semibold leading-6">
                      ZARA
                    </div>
                    <div className="text-neutral-500 text-sm leading-6 mt-1">
                      Blue mini dress
                    </div>
                    <div className="justify-between items-stretch flex gap-5 mt-4 pr-9 max-md:pr-5">
                      <div className="text-zinc-800 text-center text-sm font-semibold leading-6 justify-center items-stretch rounded bg-neutral-100 aspect-[1.875] py-1">
                        Size: S
                      </div>
                      <div className="text-zinc-800 text-center text-sm font-semibold leading-6 justify-center items-stretch rounded bg-neutral-100 aspect-[1.6875] py-1">
                        Qty: 1
                      </div>
                    </div>
                    <div className="items-center flex justify-between gap-2.5 mt-4 px-px">
                      <div className="text-neutral-500 text-center text-sm font-semibold leading-6 my-auto">
                        Rs. 3299
                      </div>
                      <div className="text-rose-400 text-center text-sm font-semibold leading-6 self-stretch">
                        Rs. 2999
                      </div>
                    </div>
                    <div className="justify-between flex gap-2 mt-4 items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/69569c48-27d2-45d8-ab5a-922e7a16d47a?"
                        className="aspect-[1.07] object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-zinc-800 text-xs leading-4">
                        <span className="text-neutral-500">Delivery by </span>
                        <span className="text-zinc-800">9th Jan, 2023 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/01e917af-993f-46b5-b86f-d8605c193ea3?"
                  className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full self-start"
                />
              </div>
            
            </div>
            <div className="bg-neutral-300 self-stretch w-px mt-6 shrink-0 h-[640px]" />
            <div className="justify-center  flex grow basis-0 flex-col mt-6 max-md:max-w-full">
              <div className="justify-between items-stretch bg-neutral-100 flex gap-5 px-20 py-4 rounded-lg max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/86eb8256-dfb7-49a5-9dde-27fdfd506112?"
                  className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-800 text-center text-base font-semibold leading-6 self-center grow shrink basis-auto my-auto">
                  <span className="">Yay!</span>
                  <span className="font-semibold"> No Delivery Charge </span>
                  <span className="">on this order.</span>
                </div>
              </div>
              
              <div className="text-zinc-800 text-base font-semibold leading-6 mt-10 max-md:max-w-full">
                PRICE DETAILS (2 ITEMS)
              </div>
              <div className="justify-between items-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-500 text-sm leading-6">Total MRP</div>
                <div className="text-zinc-800 text-sm leading-6">Rs. 5,598</div>
              </div>
              <div className="justify-between items-stretch flex gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-500 text-sm leading-6">
                  Discount on MRP
                </div>
                <div className="text-green-500 text-sm leading-6">-Rs. 809</div>
              </div>
              <div className="justify-between items-stretch flex gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-500 text-sm leading-6">
                  Coupon Discount
                </div>
                <div className="text-zinc-800 text-sm leading-6">Rs. 0</div>
              </div>
              <div className="justify-between items-stretch flex gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-500 text-sm leading-6">
                  Delivery Charge
                </div>
                <div className="text-green-500 text-sm leading-6">Free</div>
              </div>
              <div className="bg-neutral-300 shrink-0 h-px mt-6 max-md:max-w-full" />
              <div className="justify-between items-stretch flex gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-500 text-base font-semibold leading-6">
                  Total Amount
                </div>
                <div className="text-rose-400 text-base font-semibold leading-6">
                  Rs. 4,789
                </div>
              </div>
              <div className="justify-center items-center bg-red-500 hover:bg-red-400 flex flex-col mt-8 px-5 py-3 rounded-lg max-md:max-w-full">
                <div className="flex items-stretch ">
                  <button className="text-white text-center text-base font-semibold leading-6">
                    Place Order
                  </button>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/adef7eb6-45fc-4bf7-b53d-c73eb3d5bf69?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    export default Cart;
    
