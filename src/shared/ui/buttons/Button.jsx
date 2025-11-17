function Button({
  type = "primary",
  htmlType = "button",
  onClick = () => {},
  disabled = false,
  children,
}) {
  const base =
    "font-500 tracking-wide text-xs sm:text-base px-3 md:px-5 sm:py-2  py-2 font-medium text-white transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50 ";

  const styles = {
    transparent: base + " hover:text-gray-200",
    primary: base + " sm:rounded-lg rounded-md bg-violet-500 hover:bg-violet-550",
  };
  return (
    <button type={htmlType} disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
