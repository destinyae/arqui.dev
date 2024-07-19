import TypedOffer  from './components/TypedOffer';
import Logo  from './components/Logo';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-left justify-between p-32'>
      <Logo />
        <h2 className='text-3xl leading-normal font-firacode font-bold mb-2 text-[#FF00B0]'>
          <span>Sua melhor opção de consultoria </span> 
          <TypedOffer /> 
          <span className='text-xl'> *</span> 
        </h2>
        <h3 className='text-xl leading-normal font-quicksand text-[#007FFF]'>* Na nossa humilde opinião</h3>


    </main>
  );
}
