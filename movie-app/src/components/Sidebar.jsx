export default function Sidebar() {
    return (
      <aside className="sidebar">
        <div className="logo">🎬</div>
  
        <nav className="menu">
          <span className="active">🏠</span>
          <span>🎞️</span>
          <span>📺</span>
          <span>🔖</span>
        </nav>
  
        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
          />
        </div>
      </aside>
    )
  }
  