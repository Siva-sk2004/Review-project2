package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class FoodEntity {
	@Id
	private int foodId;
	
	private String FoodName;
	private String VegOrNon_veg;
	private String StyleOfFood;
	private int Quantity;
	

	public int getFoodId() {
		return foodId;
	}


	public void setFoodId(int foodId) {
		this.foodId = foodId;
	}


	public String getFoodName() {
		return FoodName;
	}


	public void setFoodName(String foodName) {
		FoodName = foodName;
	}


	public String getVegOrNon_veg() {
		return VegOrNon_veg;
	}


	public void setVegOrNon_veg(String vegOrNon_veg) {
		VegOrNon_veg = vegOrNon_veg;
	}


	public String getStyleOfFood() {
		return StyleOfFood;
	}


	public void setStyleOfFood(String styleOfFood) {
		StyleOfFood = styleOfFood;
	}


	public int getQuantity() {
		return Quantity;
	}


	public void setQuantity(int quantity) {
		Quantity = quantity;
	}



	
	public FoodEntity(int foodId, String foodName, String vegOrNon_veg, String styleOfFood, int quantity, int price) {
		super();
		this.foodId = foodId;
		FoodName = foodName;
		VegOrNon_veg = vegOrNon_veg;
		StyleOfFood = styleOfFood;
		Quantity = quantity;
	}




	public FoodEntity() {
		
	}
	

	
}
