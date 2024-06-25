import React from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
	const navigate = useNavigate()

	const onNavigate = (path: string, isReload = false) => {
		if (!isReload) return navigate(path)

		navigate(path)
		navigate(0) // reload
	}

	return (
		<div className="flex gap-4">
			<div className="border p-2 rounded cursor-pointer bg-slate-200" onClick={() => onNavigate("/", true)}>
				HOME
			</div>
			<div className="border p-2 rounded cursor-pointer bg-slate-200" onClick={() => onNavigate("hello")}>
				Hello
			</div>
			<div className="border p-2 rounded cursor-pointer bg-slate-200" onClick={() => onNavigate("about")}>
				About
			</div>
			<div
				className="border p-2 rounded cursor-pointer bg-slate-200"
				onClick={() => {
					onNavigate("person", true)
				}}
			>
				Person
			</div>
		</div>
	)
}

export default Header
