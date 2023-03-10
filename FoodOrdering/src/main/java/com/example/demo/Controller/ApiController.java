package com.example.demo.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.FoodEntity;
import com.example.demo.Service.ApiService;
@CrossOrigin
@RestController
//@Slf4j
public class ApiController {

	@Autowired
	ApiService serv;
	
	@GetMapping("/show")
	public List<FoodEntity> showcar()
	{
		return serv.show();
	}
	
	@PostMapping("/add")
	public String addcar(@RequestBody FoodEntity obj)
	{
		serv.add(obj);
		return "Added sucessfully";
	}
	
	@DeleteMapping("/del/{id}")
	public String delcar(@PathVariable ("id") int id )
	{
		serv.del(id);
		return "SuccessFully removed";
	}
	
	@PutMapping("/update/{id}")
	public FoodEntity update(@PathVariable ("id") int id,@RequestBody FoodEntity obj)
	{
		return serv.updateFood(obj);
	}
}
