import React, { useState } from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';

function App() {
  const initialState = [
    { value: 0, id: 1, name: 'Ложка' },
    { value: 0, id: 2, name: 'Вилка' },
    { value: 0, id: 3, name: 'Тарелка' },
    { value: 0, id: 4, name: 'Стартовый набор минималиста' },
    { value: 0, id: 5, name: 'Ненужные вещи' },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (counterId) => {
    const newCounters = counters.map((c) => {
      if (c.id === counterId) {
        c.value++;
      }
      return c;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = counters.map((c) => {
      if (c.id === counterId && c.value > 0) {
        c.value--;
      }
      return c;
    });
    setCounters(newCounters);
  };

    const handleDelete = (counterId) => {
      const newCounters = counters.filter((c) => c.id !== counterId);
      setCounters(newCounters);
    };

    const handleReset = () => {
      setCounters(initialState);
    };

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((acc, c) => acc + c.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
