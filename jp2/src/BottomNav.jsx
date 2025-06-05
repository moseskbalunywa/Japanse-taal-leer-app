import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Learn', emoji: '📕', path: '/learn' },
  { label: 'Search', emoji: '🔍', path: '/search' },
  { label: 'Home', emoji: '🏠', path: '/home' },
  { label: 'Dictionary', emoji: '📖', path: '/dictionary' },
  { label: 'Profile', emoji: '👤', path: '/profile' },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '60px',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTop: '1px solid #ddd',
      zIndex: 1000
    }}>
      {navItems.map(({ label, emoji, path }) => (
        <Link key={label} to={path} style={{ textDecoration: 'none', color: location.pathname === path ? '#FEC300' : 'inherit' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px' }}>
            <span style={{ fontSize: '18px' }}>{emoji}</span>
            <span>{label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
// This component can be imported and used in any of your pages, such as HomePage or Profile, to maintain a consistent navigation experience across your app.