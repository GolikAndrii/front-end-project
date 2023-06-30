import React, { useEffect, useRef } from "react"
// @ts-ignore
import { Tooltip as BsTooltip } from "bootstrap"
import { FaThumbsUp } from 'react-icons/fa';


export const Tooltip = (p: {children: JSX.Element, text: string}) => {
	const childRef = useRef(undefined as unknown as Element)

	useEffect(() => {
		const t = new BsTooltip(childRef.current, {
			title: p.text,
			placement: "right",
			trigger: "hover"
		})
		return () => t.dispose()
	}, [p.text])

	return React.cloneElement(p.children, { ref: childRef })
}