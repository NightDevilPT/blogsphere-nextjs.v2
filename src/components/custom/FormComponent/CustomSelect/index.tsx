import * as React from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface CustomSelectIProps {
	placeholder: string;
	name: string;
	value: string;
	values: string[];
}

export function SelectScrollable({placeholder,name,value,values}:CustomSelectIProps) {
  return (
    <Select>
      <SelectTrigger className="w-full text-slate-500 font-inter capitalize" name={name} value={value}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {values.map((items:string)=>{
			const uniqueId = React.useId();
			return <SelectItem key={uniqueId} value={items} className="capitalize font-inter">{items.toLowerCase()}</SelectItem>
		})}
      </SelectContent>
    </Select>
  )
}
