package com.task.cloudesign.springbootweb.Controller;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.task.cloudesign.springbootweb.Services.*;

import com.task.cloudesign.springbootweb.Daos.*;
import com.task.cloudesign.springbootweb.Dtos.*;
import com.task.cloudesign.springbootweb.Entities.*;



@CrossOrigin
@RestController
public class JobController {
	
	@Autowired	
	private JobService jobService;

	
	
	@GetMapping("/job/gelAllJob")
	public ResponseEntity<?> getAll()
	{
		List<Job> menu= jobService.findAll();
		if(menu == null)
			return Response.error("Menu not found");
		return Response.success(menu);
	}

	
	// Get Menu Item By Using Id
	@GetMapping("/job/getJobById/{id}")
	public ResponseEntity<?> getById(@PathVariable ("id") int id)
	{
		
		Job menu= jobService.findById(id);
		if(menu == null)
			return Response.error("Menu Not Found");
		return Response.success(menu);
	}

	// add new Menu Item into Database
	@PostMapping("/job/AddJob")
	public ResponseEntity<?> AddJob(@RequestBody AddJobDto menuItem)
	{
		
		
		
		Job checkForDuplicateMenu= jobService.findByJobName(menuItem.getJobName());
		
		if(checkForDuplicateMenu != null)
		{
			return Response.error("Menu Item Already Present");
		}
		else
		{
			
//			System.out.println(menuItem);
			
			
			
			Job menu = new Job();
			menu.setJobName(menuItem.getJobName());
			menu.setVacancy(menuItem.getVacancy());
		
			menu.setSalary(menuItem.getSalary());
			Job newMenuItem= jobService.saveJob(menu);
			if(newMenuItem == null)
				return Response.error("Not Saved");
			return Response.success("successfully added");
			
		//	System.out.println("item added to database in Menu table= "+ newMenuItem );
			
		}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		
	//return null;
	}
	
	//delete Menu Item
	@DeleteMapping("/job/delete/{id}")
	public ResponseEntity<?> deleteJob(@PathVariable("id") int id)
	{
	Map<String, Object> result= jobService.deleteMenuItem(id);
	return Response.success(result);
	}
	
	/*
	 * //Update Menu Item
	 * 
	 * @PutMapping("/pizzaMenu/updatePizzaInDatabase") public ResponseEntity<?>
	 * updatePizzaMenu(@RequestBody Job updatedpizza) {
	 * System.out.println("inserting "+ updatedpizza); Job menu=
	 * jobService.updatePizza(updatedpizza); if(menu == null) return
	 * Response.error("Menu not found"); return Response.success(menu); }
	 */
	
	
}
