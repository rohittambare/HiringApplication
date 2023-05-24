package com.task.cloudesign.springbootweb.Entities;

import java.util.List;



import com.task.cloudesign.springbootweb.Entities.*;

import jakarta.persistence.Column;


@jakarta.persistence.Entity
@jakarta.persistence.Table(name= "job")
public class Job {
	@jakarta.persistence.GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
	@jakarta.persistence.Id
	private int jobId;
	@Column
	private String jobName;
	@Column
	private float salary;
	@Column
	private int vacancy;
	
	
	
	//@jakarta.persistence.Temporal(jakarta.persistence.TemporalType.TIMESTAMP)
	//@Column(insertable = false)
	//private Date createdTimestamp;
	
	

	
	
	public Job() {
	}

	public Job(int jobId, String jobName, float salary, int vacancy) {
		super();
		this.jobId = jobId;
		this.jobName = jobName;
		this.salary = salary;
		this.vacancy = vacancy;
	}

	public int getJobId() {
		return jobId;
	}

	public void setJobId(int jobId) {
		this.jobId = jobId;
	}

	public String getJobName() {
		return jobName;
	}

	public void setJobName(String jobName) {
		this.jobName = jobName;
	}

	public float getSalary() {
		return salary;
	}

	public void setSalary(float salary) {
		this.salary = salary;
	}

	public int getVacancy() {
		return vacancy;
	}

	public void setVacancy(int vacancy) {
		this.vacancy = vacancy;
	}

	@Override
	public String toString() {
		return "Job [jobId=" + jobId + ", jobName=" + jobName + ", salary=" + salary + ", vacancy=" + vacancy + "]";
	}





	
	
	
	
}


