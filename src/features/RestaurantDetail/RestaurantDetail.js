import React from 'react'

export default function RestaurantDetail() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
  return (
    <div>Restaurant ID: {urlParams.get('id')}</div>
  )
}
