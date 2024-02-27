import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { FaHandsClapping } from "react-icons/fa6";
import { PiHandHeartBold } from "react-icons/pi";
import { FaRegSmile } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import * as HoverCard from "@radix-ui/react-hover-card";
export default function HoverLike({ HandleLike, like }) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <button
          href="#"
          onClick={HandleLike}
          className="text-gray-600 text-base flex items-center gap-2 hover:bg-gray-200 hover:p-[4px] hover:rounded-md transition-all"
        >
          {like ? (
            <>
              <SlLike className="text-base font-bold text-blue-600 " />
              <span className="hidden sm:block text-blue-600">Gostei</span>
            </>
          ) : (
            <>
              <SlLike className=" text-base font-bold" />
              <span className="hidden sm:block">Gostei</span>
            </>
          )}
        </button>
      </HoverCard.Trigger>
      <HoverCard.Content className="z-10 relative -top-20 left-5">
        <div className="bg-white rounded-lg flex gap-2 p-4">
          <SlLike className="text-blue-600 text-2xl" />
          <FaHandsClapping className=" text-green-600 text-2xl" />
          <PiHandHeartBold className=" text-purple-600 text-2xl" />
          <FaHeart className="text-red-600 text-2xl" />
          <HiLightBulb className="text-yellow-600 text-2xl" />
          <FaRegSmile className="text-blue-400 text-2xl" />
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
