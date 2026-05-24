function Header(props) {

return (

<div className="header">

<h1>React Store</h1>

<p>Simple E-Commerce Website</p>

<button
className="themeBtn"
onClick={() =>
props.setDarkMode(
!props.darkMode
)
}
>

{
props.darkMode
? "☀ Light Mode"
: "🌙 Dark Mode"
}

</button>

</div>

);

}

export default Header;