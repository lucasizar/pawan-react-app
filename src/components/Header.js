//PAREI NO minuto 40h30
//https://www.youtube.com/watch?v=w7ejDZ8SWv8

import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        alert('Clicked!!!!')
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text="Hello" onClick={onClick} />
        </header> 
    )
}

Header.defaultProps = {
    title: 'Teste Izar'
}

export default Header