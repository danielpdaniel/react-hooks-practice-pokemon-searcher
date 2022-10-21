import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onSubmit }) {
  const[name, setName] = useState(null);
  const[hp,setHp] = useState(null);
  const[frontUrl, setFrontUrl] = useState(null);
  const[backUrl, setBackUrl] = useState(null);

  function handleSubmit(e){
    e.preventDefault();
    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }

    onSubmit(newPokemon)
  }

  function handleFormChange(e){
    const formInput = e.target.value;


    if(e.target.name === "name"){
      setName(formInput)
    }else if (e.target.name === "hp"){
      setHp(formInput)
    }else if (e.target.name === "frontUrl"){
      setFrontUrl(formInput)
    }else if (e.target.name === "backUrl"){
      setBackUrl(formInput)
    }
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleFormChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleFormChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
