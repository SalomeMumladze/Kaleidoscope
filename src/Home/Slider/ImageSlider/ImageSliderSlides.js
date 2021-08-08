import React from 'react';
import Card from './Card';

const ImageSliderSlides = (props) => {
  const { slides, curr } = props;

  if (Array.isArray(slides) && slides.length > 0) return (
    slides.map((slide, i) => (
      <Card key={i} curr={curr} slide={slide} />
    ))
  );

  return null
}

export default ImageSliderSlides;