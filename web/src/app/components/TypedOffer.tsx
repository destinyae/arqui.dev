"use client";

import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import client from '../sanityClient';

const TypedOffer: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement>(null);
  const [strings, setStrings] = useState<string[]>([]);

  useEffect(() => {
    // Fetch data from Sanity
    client.fetch(`*[_type == "offerList"]{headline}`).then((data) => {
      const offerStrings = data.map((item: { headline: string }) => item.headline);
      setStrings(offerStrings);
    });
  }, []);

  useEffect(() => {
    if (typedElement.current && strings.length > 0) {
      const options = {
        strings,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      };

      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, [strings]);

  return (
    <span className='text-[#007FFF]' ref={typedElement}></span>
  );
};

export default TypedOffer;
