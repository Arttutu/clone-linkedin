import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FaCircleDot } from "react-icons/fa6";
export default function CheckBox({ tipo }) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox.Root
        className="border-black border rounded-full size-6 hover:border-2 hover:bg-gray-200 "
        id="c2"
        defaultChecked
      >
        <Checkbox.Indicator className="text-green-700 hover:text-green-900">
          <FaCircleDot className="size-full " />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor="c2" className="text-sm text-gray-600">
        {tipo}
      </label>
    </div>
  );
}
