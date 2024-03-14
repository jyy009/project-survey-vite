import { useState } from "react";
  
export const Survey = () => {
  const [results, setResults] = useState({
    house: "",
    character: "",
    spell: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const houseGroup = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResults({
      ...results,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(results);
    setSubmitted(true);
  };

  const clearForm = () => {
    setResults("");
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <div className="results">
          <h3>Here are your results!</h3>
          <p>Your favorite Harry Potter character and spell are {results.character} and {results.spell}. Your would like to be in house {results.house}!</p>
          <button className="clear-button" onClick={clearForm}>Again!</button>
        </div>
      ) : (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {/* radio buttons */}
            <div className="radio-button-wrapper">
              <label>
                <h2>1.</h2>
                <p>Which Hogwarts house would you be in?</p>
              </label>
              {houseGroup.map((house) => (
                <label className="radio-button-container" key={house}>
                  <input
                    name="house"
                    type="radio"
                    value={house}
                    onChange={handleInputChange}
                    checked={results.house === house}
                  />
                  <span
                    className={`custom-radio ${
                      results.house === house ? "checked" : ""
                    }`}
                  >
                    {house}
                  </span>
                </label>
              ))}
            </div>

            {/* dropdown selection */}
            <div className="dropdown">
              <label>
                <h2>2.</h2>
                <p>Who is your favorite character?</p>
              </label>
              <select
                className="select-box"
                name="character"
                value={results.character}
                onChange={handleInputChange}
              >
                <option className="option" disabled value="">
                  Choose character
                </option>
                <option className="option" value="Harry Potter">
                  Harry Potter
                </option>
                <option className="option" value="Hermione Granger">
                  Hermione Granger
                </option>
                <option className="option" value="Ron Weasley">
                  Ron Weasley
                </option>
                <option className="option" value="Lord Voldemort">
                  Lord Voldemort
                </option>
                <option className="option" value="Severus Snape">
                  Severus Snape
                </option>
                <option className="option" value="Albus Dumbledore">
                  Albus Dumbledore
                </option>
                <option className="option" value="Rubeus Hagrid">
                  Rubeus Hagrid
                </option>
                <option className="option" value="Minerva McGonagall">
                  Minerva McGonagall
                </option>
              </select>
            </div>

            {/* text input */}
            <div className="text-input">
              <label>
                <h2>3.</h2>
                <p>What is your favorite spell?</p>
              </label>
              <input
                name="spell"
                type="text"
                onChange={handleInputChange}
                value={results.spell}
              ></input>
            </div>

            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};
