import { Bell, UserCircle } from 'lucide-react';

export default function Navbar({ name = 'User' }) {
  return (
    <nav className="top-navbar">
      <div>
        <h6 className="mb-0">Welcome back, {name}!</h6>
        <small className="text-muted">Student Attendance Management</small>
      </div>

      <div className="d-flex align-items-center gap-3">
        <Bell size={20} />
        <div className="d-flex align-items-center gap-2">
          <UserCircle size={28} />
          <span>{name}</span>
        </div>
      </div>
    </nav>
  );
}