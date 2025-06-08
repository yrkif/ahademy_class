import { Card } from './components/card';
import { Greeting } from './components/greeting';

function App() {
  return (
    <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white'>
      <Greeting />
      <Greeting name='Aly' />

      <div>
        <Card
          imageUrl='https://source.unsplash.com/random/600x400'
          title='Learn React'
          description='Build UI with components and props.'
          features={['JSX', 'Hooks', 'Functional Components']}
          ctaText='Start Learning'
          onCtaClick={() => alert('Card 1 clicked')}
        />

        <Card
          imageUrl='https://source.unsplash.com/random/601x400'
          title='Use Tailwind'
          description='Style components easily and responsively.'
          features={['Utility-first CSS', 'Responsive', 'Customizable']}
          ctaText='Explore Tailwind'
          onCtaClick={() => alert('Card 2 clicked')}
        />
      </div>
    </div>
  );
}
export default App;
