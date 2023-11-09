import styles from "./CountryItem.module.css";

function CountryItem({ city }) {
  const { emoji } = city;

  const flagemojiToPNG = (flag) => {
    var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

  // console.log(city);
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}> {flagemojiToPNG(emoji)} </span>
      <span>{city.country}</span>
    </li>
  );
}

export default CountryItem;
