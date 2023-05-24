package com.task.cloudesign.springbootweb.Services;


import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.task.cloudesign.springbootweb.Daos.*;
import com.task.cloudesign.springbootweb.Entities.*;
@Transactional
@Service
public class JobService {
       @Autowired
	private JobDao jobDao;











		
		
		
		//Get all Menu Items
		public List<Job> findAll()
		{
		List<Job> Entirejob= jobDao.findAll();
		return Entirejob;
		}
		
		
		
		public Job saveJob(Job job)
		{
		
		Job newJob= jobDao.save(job);
		return newJob;
		
		}
		
		
		public Job findByJobName( String jobName )
		{
			
		Job job= jobDao.findByJobName(jobName);
		return job;
		}
		
		
		
		
		//Delete menu Item by using Id
		public Map<String, Object> deleteMenuItem(int id)
		{
			if(jobDao.existsById(id))
			{
				jobDao.deleteById(id);
				return Collections.singletonMap("affectedRows", 1);
			}
			
				return Collections.singletonMap("affectedRows", 0);
		}
		
		
		
		// Find menu Item By Id
		public Job findById(int id)
		{
			Job menu= jobDao.findByJobId(id);
			return menu;
		
		
		}
		
		
		
		//Update Job
	//	public Job updateJob(Job job)
	//	{
	//		if(jobDao.existsById(job.getJobId()))
	//		{
	//			Job updatedmenu= jobDao.save(job);
				
	//			return updatedmenu;
		//	}
	//		
		//		return null;
			
		//}
		



}

