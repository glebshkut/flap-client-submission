/*
I've tried multiple ways to fix this bug without touching PartDescriptor
But it's really hard to find one
The only no-touch solution I had on my mind is to try resetting input's value
via DOM, but there were no selectors and it's not a React-way of doing this
I'm really curious about hearing from you about no-touch solution :)
*/

import React from 'react';

const PartDescriptor = ({ name, amount, notes, setNotes }: { name: string; amount: number; notes: string; setNotes: (x: string) => void  }) => (
    <div>
      <h3>Name: {name}</h3>
      <h3>Amount: {amount}</h3>
      <h3>Description: Lorem Ipsum dolor sit amet</h3>
      <h4>
        Notes: <input value={notes} onChange={e => setNotes(e.target.value)} />
      </h4>
    </div>
  );

export default PartDescriptor;
