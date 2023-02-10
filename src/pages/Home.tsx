import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartDescriptor from '../components/PartDescriptor';
import { addPart, decrementPart, incrementPart } from '../actions/parts';
import { partsSelector } from '../selectors/local';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';


import './Home.scss';

const Home = () => {
  const [selectedPart, setSelectedPart] = useState<string>(null);
  const [notes, setNotes] = useState('');
  const [newPartName, setNewPartName] = useState('');
  const parts = useSelector(partsSelector);
  const dispatch = useDispatch();

  const handleSelection = (name: string) => {
    if (selectedPart !== name) {
      setSelectedPart(name);
      setNotes('');
    }
  };

  const handleButtonClick = () => {
    dispatch(addPart(newPartName));
    setNewPartName('');
  };

  return (
    <div>
      <h1>Parts Counter</h1>
      <hr />
      <ul className="partsList">
        {parts.map(part => (
          <li key={part.name} onClick={() => handleSelection(part.name)} className={part.name === selectedPart ? 'selected' : ''}>
            <p className="partName">{part.name}</p>
            <p className="partAmount">{part.amount}</p>
            <div className="buttonsComponent">
              <span
                onClick={e => {
                  e.stopPropagation();
                  dispatch(incrementPart(part.name));
                }}
              >
                <FaMinusSquare size="2.5em" color="#337ab7" />
              </span>
              <span
                onClick={e => {
                  e.stopPropagation();
                  dispatch(decrementPart(part.name));
                }}
              >
                <FaPlusSquare size="2.5em" color="#337ab7" />
              </span>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <form onSubmit={e => e.preventDefault()}>
        <h2>Create New Part</h2>
        <input
          type="text"
          value={newPartName}
          onChange={e => setNewPartName(e.target.value)}
          placeholder="Enter new part name"
        />
        <button onClick={handleButtonClick} type="submit">Submit</button>
      </form>
      <hr />
      <h2>Part Info</h2>
      {selectedPart &&
        (() => {
          const part = parts.find(x => x.name === selectedPart);
          return <PartDescriptor name={part.name} amount={part.amount} notes={notes} setNotes={setNotes} />;
        })()}
    </div>
  );
};

export default Home;
