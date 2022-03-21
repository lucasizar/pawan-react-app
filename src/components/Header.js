import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd, loading }) => {
    const location = useLocation()


      return (
        <header className="header">
            <h1>{title}</h1>
            {!loading && location.pathname === '/' && (
                <Button disabled={loading} text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onAdd} />
            )}

        </header> 
    )
}

Header.defaultProps = {
    title: 'Pawan To-do App'
}

export default Header