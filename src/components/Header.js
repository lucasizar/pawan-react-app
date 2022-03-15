//PAREI NO minuto 40h30
//https://www.youtube.com/watch?v=w7ejDZ8SWv8

import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
      return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                text={showAdd ? 'Close' : 'Add'}
                color={showAdd ? 'red' : 'green'}
            onClick={onAdd} />
        </header> 
    )
}

Header.defaultProps = {
    title: 'Pawan To-do App'
}

export default Header