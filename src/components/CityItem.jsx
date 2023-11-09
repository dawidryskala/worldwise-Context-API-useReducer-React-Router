import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  // console.log(position);

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  const flagemojiToPNG = (flag) => {
    var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

  function handleClick(e) {
    e.preventDefault();
    console.log("TEST");
    deleteCity(id);
    // deleteCity()
  }

  // console.log(city);
  return (
    <li>
      {/* its important to send only id without "/" e.g /id
    because it will not work */}
      {/* after "?" we create query string  */}
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}> {flagemojiToPNG(emoji)} </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>

        {/* when I clicking the button I also clicking the link which 
        redirect me to location of this city and open deailt of this this  */}
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
