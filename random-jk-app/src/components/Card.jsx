import { useEffect, useState } from "react";
import axios from "axios";
export function Card() {
  const [joke, setjoke] = useState("");
  // fetches joke from API endpoint
  const fetchJoke = async () => {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    let { setup, punchline } = await response.data;
    let jk = `${setup} ${punchline}`;
    setjoke(jk);
  };

  // make an BE call and set it to state when component mounts for the first time
  useEffect(() => {
    fetchJoke();
  }, []);

  // console.log(joke);
  return (
    <div>
      <div>
        <h1>{joke ? joke : "Loading..."}</h1>
      </div>
      <div>
        <ButtonComponent fetchJoke={fetchJoke} />
      </div>
    </div>
  );
}

const ButtonComponent = (props) => {
  const anotherJoke = () => {
    console.log(props);
    props.fetchJoke();
  };
  return <button onClick={anotherJoke}>Tell me another!</button>;
};
