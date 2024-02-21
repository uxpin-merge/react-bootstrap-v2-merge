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
    <Img variant="top" src="https://picsum.photos/id/237/536/354" uxpId="card-img" />

    <Body uxpId="card-body">
      <Title uxpId="card-title">Card Title</Title>
      <Text uxpId="card-text">
        Some quick example text to build on the card title and make up the bulk of the crad content.
      </Text>
      <Button variant="primary">Go somewhere</Button>
    </Body>

    <Footer uxpId="card-body-2">
      <Link href="#" uxpId="card-link-1">
        Card Link
      </Link>
      <Link href="#" uxpId="card-link-2">
        Another Link
      </Link>
    </Footer>
  </Card>
)
