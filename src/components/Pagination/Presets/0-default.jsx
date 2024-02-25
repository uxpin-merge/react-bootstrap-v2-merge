import React from 'react'
import Pagination from '../Pagination'
import PageItem from '../../PageItem/PageItem'

export default (
  <Pagination uxpId="pagination-1">
    <PageItem uxpId="pagination-item-1">«</PageItem>
    <PageItem uxpId="pagination-item-2">‹</PageItem>
    <PageItem active={true} uxpId="pagination-item-3">
      1
    </PageItem>
    <PageItem uxpId="pagination-item-4">2</PageItem>
    <PageItem uxpId="pagination-item-5">...</PageItem>
    <PageItem uxpId="pagination-item-6">4</PageItem>
    <PageItem uxpId="pagination-item-7">5</PageItem>
    <PageItem uxpId="pagination-item-8">›</PageItem>
    <PageItem uxpId="pagination-item-9">»</PageItem>
  </Pagination>
)
