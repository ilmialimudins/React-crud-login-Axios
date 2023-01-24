import React from 'react';
const SidebarMain= ()=> {
    return (  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link " href="index.html">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      {/* <!-- End Dashboard Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Components</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="/login">
              <i class="bi bi-circle"></i><span>Login</span>
            </a>
          </li>
          <li>
            <a href="/home">
              <i class="bi bi-circle"></i><span>Home</span>
            </a>
          </li>
          <li>
            <a href="/calculator">
              <i class="bi bi-circle"></i><span>Calculator</span>
            </a>
          </li>
          <li>
            <a href="/tabel">
              <i class="bi bi-circle"></i><span>Tabel</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Components Nav */}
    </ul>
  </aside> );
}

export default SidebarMain;