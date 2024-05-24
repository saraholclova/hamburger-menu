import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(true);

  const handleSelectItem = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <header>
        <div className={menuOpened ? 'menu' : 'menu--closed'}>
          <button
            onClick={() => setMenuOpened(!menuOpened)}
            className="menu__btn"
          ></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem} />
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem text="Náš tým" onSelect={handleSelectItem} />
            <MenuItem text="Blog" onSelect={handleSelectItem} />
            <MenuItem text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};
