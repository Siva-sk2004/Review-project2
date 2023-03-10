package com.example.demo.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.FoodEntity;


@Repository
public interface FoodRepo extends JpaRepository<FoodEntity , Integer> {

}
