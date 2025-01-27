import dozecf from '../image/dozecf.png'
function Header()
{
    return(
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html"><img src={dozecf} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="coffees.html">Coffees</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="shop.html">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="login_bt">
              <ul>
                <li><a href="#"><span className="user_icon"><i className="fa fa-user" aria-hidden="true" /></span>Login</a></li>
                <li><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </div>
    )
}
export default Header;