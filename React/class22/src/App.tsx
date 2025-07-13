import { useState } from 'react';
import Button from './ui/button';
import Header from './ui/header';

function App() {
  const [count, setCount] = useState(0);

  const increment = (): void => setCount((prev) => prev + 1);
  const decrement = (): void => setCount((prev) => prev - 1);
  const reset = (): void => setCount(0);

  return (
    <div className='w-full mx-auto flex flex-col items-center justify-center gap-10 bg-black'>
      <Header className='flex justify-center'>header halo</Header>
      <main className='relative'>
        <h1 className='top-50 mt-50 text-2xl text-red-500'>Class 22</h1>
        <div className='flex gap-2 items-center mt-500'>
          <Button onClick={increment}>+</Button>
          <Button onClick={decrement}>-</Button>
          <Button onClick={reset}>Reset</Button>
          <h1 className='text-white'>Count: {count}</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
