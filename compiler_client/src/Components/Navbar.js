import React from 'react'; 
import Select from 'react-select'; 
import './Navbar.css'; 

const Navbar = ({ userLang, setUserLang, userTheme, 
	setUserTheme, fontSize, setFontSize }) => { 
	const languages = [ 
		// { value: "c", label: "C" }, 
		{ value: "c_cpp", label: "C / C++" }, 
		{ value: "python", label: "Python" }, 
		{ value: "java", label: "Java" }, 
		{ value: "csharp", label: "C#" }, 
		{ value: "php", label: "PHP" }, 
		{ value: "nodejs", label: "NodeJs" }, 
		{ value: "kotlin", label: "Kotlin" }, 
		{ value: "r", label: "R" }, 
		{ value: "typescript", label: "TypeScript" }, 
		{ value: "ruby", label: "Ruby" }, 
		{ value: "fortran", label: "Fortran" }, 
		{ value: "perl", label: "Perl" }, 

	]; 
	const themes = [ 
		{ value: "vs-dark", label: "Dark" }, 
		{ value: "light", label: "Light" }, 
	] 
	return ( 
		<div className="navbar"> 
			<h1>StudBud Compiler</h1> 
			<Select options={languages} value={userLang} 
				onChange={(e) => setUserLang(e.value)} 
				placeholder={userLang} /> 
			<Select options={themes} value={userTheme} 
				onChange={(e) => setUserTheme(e.value)} 
				placeholder={userTheme} /> 
			<label>Font Size</label> 
			<input type="range" min="18" max="30"
				value={fontSize} step="2"
				onChange={(e) => { setFontSize(e.target.value) }} /> 
		</div> 
	) 
} 

export default Navbar
