import React from 'react'
import Card from '../Card'
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
  <Card uxpId="card">
    <Img src="https://picsum.photos/id/237/536/354" uxpId="card-img" />

    <Body uxpId="card-body">
      <Title uxpId="card-title" as="h5">
        Card Title
      </Title>
      <Text uxpId="card-text">
        Some quick example text to build on the card title and make up the bulk of the card content.
      </Text>
    </Body>
    <Body uxpId="card-body-2">
      <Button variant="primary" uxpId="card-button">
        Go somewhere
      </Button>
    </Body>
  </Card>
)
