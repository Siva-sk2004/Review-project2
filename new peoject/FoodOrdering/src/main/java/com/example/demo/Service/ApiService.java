package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.FoodEntity;
import com.example.demo.Repository.FoodRepo;

@Service
public class ApiService {
	@Autowired
	private FoodRepo repo;

	// getuser
	public List<FoodEntity> show() {
		List<FoodEntity> arr = new ArrayList<>();
		arr = (List<FoodEntity>) repo.findAll();
		return arr;
	}

	// Add 
	public FoodEntity add(FoodEntity obj) {

		return repo.save(obj);
	}

	// Delete
	public void del(int id) {
		repo.deleteById(id);
	}

	// update
	public FoodEntity updateFood(FoodEntity obj) {
		return repo.saveAndFlush(obj);
	}

}
