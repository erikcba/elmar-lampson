import React from "react"
const MenuIcon = ({color, ...props}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill={color == "white" ? "white" : "rgba(50, 30, 58, 1)"} viewBox="0 0 24 24" {...props} >{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"></path></svg>
)
export default MenuIcon;