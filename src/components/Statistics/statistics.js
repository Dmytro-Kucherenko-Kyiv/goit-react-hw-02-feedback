import React from "react";

export const StatisticsList = ({ good, neutral, bad } ) => {
  return (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
    </ul>
  )
}