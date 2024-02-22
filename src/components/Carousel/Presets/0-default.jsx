import React from 'react'
import Carousel from '../Carousel'
import Item from '../../CarouselItem/CarouselItem'
import Caption from '../../CarouselCaption/CarouselCaption'
import Image from '../../Image/Image'

export default (
  <Carousel uxpId="carousel-1">
    <Item uxpId="carousel-item-1">
      <Image text="First slide" src="https://picsum.photos/id/237/600/300" width="100%" uxpId="carousel-image-1" />
      <Caption uxpId="carousel-caption-1">First slide label</Caption>
    </Item>
    <Item uxpId="carousel-item-2">
      <Image text="Second slide" src="https://picsum.photos/id/123/600/300" width="100%" uxpId="carousel-image-2" />
      <Caption uxpId="carousel-caption-2">Second slide label</Caption>
    </Item>
    <Item uxpId="carousel-item-3">
      <Image text="Third slide" src="https://picsum.photos/id/222/600/300" width="100%" uxpId="carousel-image-3" />
      <Caption uxpId="carousel-caption-3">Third slide label</Caption>
    </Item>
  </Carousel>
)
