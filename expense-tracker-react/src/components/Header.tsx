import './Header.css';

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <div className='header'>
            <h1 className='header--title'>
                {title}
            </h1>
        </div>
    );
};

export default Header;
