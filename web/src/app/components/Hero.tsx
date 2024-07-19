import React from 'react';
import Logo from './Logo';
import TypedOffer from './TypedOffer';

const Hero: React.FC = () => {
    return (
        <section className='flex min-h-screen flex-col items-left justify-between p-32'>
            <div>
                <Logo />
                <div>
                    <h2 className='text-3xl leading-normal font-firacode font-bold mb-2 text-[#FF00B0]'>
                        Sua melhor opção de consultoria
                    </h2>
                </div>
                <div>
                    <h2 className='text-3xl leading-normal font-firacode font-bold mb-2 text-[#FF00B0]'>
                        <TypedOffer />
                        <span className='text-xl'> *</span>
                    </h2>
                </div>
                <h3 className='text-xl leading-normal font-quicksand text-[#007FFF]'>* Na nossa humilde opinião</h3>
            </div>
        </section>
    );
};

export default Hero;