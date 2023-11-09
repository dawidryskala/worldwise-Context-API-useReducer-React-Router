import { useCities } from "../contexts/CitiesContext.jsx";
import CountryItem from "./CountryItem.jsx";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  // console.log(countries);
  // const countriesToDisplay = [];
  // const countries = [];
  // cities.map((city) => {
  //   if (countries.includes(city.country)) {
  //     return;
  //   } else {
  //     countries.push(city.country);
  //     countriesToDisplay.push(city);
  //   }
  // });

  // console.log(cities);
  return (
    <ul className={styles.countryList}>
      {countries.map((city) => (
        <CountryItem city={city} key={city.country} />
      ))}
    </ul>
  );
}

export default CountryList;
