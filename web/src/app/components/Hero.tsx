import React from 'react';
import Logo from './Logo';
import TypedOffer from './TypedOffer';

const Hero: React.FC = () => {
    return (
        <section className='flex min-h-screen flex-col items-left justify-between py-32 px-16'>
            <div className='py-32'>
                <Logo />
                <div className='py-16'>
                    <div className='pt-4'>
                        <h2 className='text-3xl leading-normal font-firacode font-bold mb-2 text-[#FF00B0]'>
                            Somos a melhor opção de consultoria digital para
                        </h2>
                    </div>
                    <div  className='pb-4'>
                        <h2 className='text-3xl leading-normal font-firacode font-bold mb-2 text-[#FF00B0]'>
                            <TypedOffer />
                            <span className='text-xl'> *</span>
                        </h2>
                    </div>
                    <div  className='pt-4 pb-16'>
                        <h3 className='text-xl leading-normal font-quicksand text-[#007FFF]'>* Na nossa humilde opinião</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;