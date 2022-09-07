function Side () {

    return  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    {/* <!-- Sidebar - Brand --> */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">STUDENT TEACHER </div>
    </a>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider my-0"/>

    {/* <!-- Nav Item - Dashboard --> */}
    <li className="nav-item active">
        <a className="nav-link" href="/teacher">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Teacher</span></a>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider"/>

    <li className="nav-item active">
        <a className="nav-link" href="/stud">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Student</span></a>
    </li>

    

</ul>



}

export default Side