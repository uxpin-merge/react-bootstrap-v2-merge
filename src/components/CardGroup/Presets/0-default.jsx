import React from 'react'
import CardGroup from '../CardGroup'
import Card from '../../Card/Card'
import Button from '../../Button/Button'
import Body from '../../CardBody/CardBody'
import Img from '../../CardImg/CardImg'
import Title from '../../CardTitle/CardTitle'
import Subtitle from '../../CardSubtitle/CardSubtitle'
import Text from '../../CardText/CardText'
import Link from '../../CardLink/CardLink'
import Footer from '../../CardFooter/CardFooter'
import Group from '../../CardGroup/CardGroup'
import Header from '../../CardHeader/CardHeader'
import ImgOverlay from '../../CardImgOverlay/CardImgOverlay'

export default (
  <CardGroup uxpId="cardgroup-1">
    <Card uxpId="cardgroup-card-1">
      <Img variant="top" src="https://picsum.photos/id/111/536/160" uxpId="cardgroup-card-image-1" />
      <Body uxpId="cardgroup-card-body-1">
        <Title uxpId="cardgroup-card-title-1">Card Title</Title>
        <Text uxpId="cardgroup-card-text-1">
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
          little bit longer.
        </Text>
      </Body>
      <Footer uxpId="cardgroup-card-fotter-1">Last updated 3 mins ago</Footer>
    </Card>

    <Card uxpId="cardgroup-card-2">
      <Img variant="top" src="https://picsum.photos/id/22/536/160" uxpId="cardgroup-card-image-2" />
      <Body uxpId="cardgroup-card-body-2">
        <Title uxpId="cardgroup-card-title-2">Card Title</Title>
        <Text uxpId="cardgroup-card-text-2">
          This card has supporting text below as a natural lead-in to additional content.
        </Text>
      </Body>
      <Footer uxpId="cardgroup-card-fotter-2">Last updated 3 mins ago</Footer>
    </Card>

    <Card uxpId="cardgroup-card-3">
      <Img variant="top" src="https://picsum.photos/id/180/536/160" uxpId="cardgroup-card-image-3" />
      <Body uxpId="cardgroup-card-body-3">
        <Title uxpId="cardgroup-card-title-3">Card Title</Title>
        <Text uxpId="cardgroup-card-text-3">
          This is a wider card with supporting text below as a natural lead-in to additional content. This card has even
          longer content than the first to show that equal height action.
        </Text>
      </Body>
      <Footer uxpId="cardgroup-card-fotter-3">Last updated 3 mins ago</Footer>
    </Card>
  </CardGroup>
)
