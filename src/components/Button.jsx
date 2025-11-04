function Button({ type = "primary", htmlType = "button", onClick = () => {}, children }) {
  const base =
    "font-500 text-xs sm:text-base sm:px-5 sm:py-2 px-2 py-1 font-medium text-white transition-colors duration-200";

  const styles = {
    transparent: base + " hover:text-gray-200",
    primary: base + " sm:rounded-lg rounded-md bg-violet-500 hover:bg-violet-550",
  };
  return (
    <button type={htmlType} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
