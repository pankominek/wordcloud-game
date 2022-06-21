interface HeaderProperties {
  text: String;
}

function Header({ text }: HeaderProperties) {
  return <h2 className="first-letter:uppercase font-bold">{text}</h2>;
}

export default Header;
