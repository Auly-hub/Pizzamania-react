import React from 'react'
import PizzaCards from './PizzaCards'

export default function PizzaTypes() {
  return (
    <div className="container pizza-types" id="pizza-types">
		<div className="row">
			<h3 className="text-center">Pizza Types</h3>
            <PizzaCards name="Cheezy"/>
            <PizzaCards name="Pepperoni"/>
            <PizzaCards name="Meat Lovers"/>
            <PizzaCards name="Vegan"/>
            
        </div>
    </div>
  )
}
