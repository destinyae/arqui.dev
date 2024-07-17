"use client"

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedOffer: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: [
          'Arquitetura de produtos digitais',
          'Plataformas DevSecOps',
          'Desenvolvimento de Negócios Digitais',
          'Infraestrutura em Nuvem',
          'Gestão de Engenharia de Software'
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      };

      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <span className='text-[#007FFF]' ref={typedElement}></span>)
  ;
};

export default TypedOffer;
