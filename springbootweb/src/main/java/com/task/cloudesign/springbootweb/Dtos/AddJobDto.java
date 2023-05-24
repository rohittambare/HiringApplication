package com.task.cloudesign.springbootweb.Dtos;

import jakarta.persistence.Column;

public class AddJobDto {


	

	private String jobName;

	private float salary;
	private int vacancy;
	
	public AddJobDto() {
		
	}

	public AddJobDto(String jobName, float salary, int vacancy) {
		super();
		this.jobName = jobName;
		this.salary = salary;
		this.vacancy = vacancy;
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
	
	


}



