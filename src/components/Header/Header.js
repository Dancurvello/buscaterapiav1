import Logo from "../Logo/Logo"
import MenuList from "../MenuList/MenuList"

//TODO tentar entender porque o .css s� funcionou quando colocado no header e n�o nos opcoesheader
import './Header.css'


const Header = () => {
    return (
        <>
        <MenuList/>
        <Logo/>
        </>
        
    )
}

export default Header