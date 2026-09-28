function GoToTop({ isActive }) {
  return (
    <a href="#top" className={`go-top${isActive ? ' active' : ''}`}>
      <ion-icon name="chevron-up-outline"></ion-icon>
    </a>
  );
}

export default GoToTop;
