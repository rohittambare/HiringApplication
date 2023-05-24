package com.task.cloudesign.springbootweb.Daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task.cloudesign.springbootweb.Entities.User;

public interface UserDao extends JpaRepository<User, Integer>{
	
	User findByUserId(int userId);
	User findByEmail(String email);
	User findByFirstName(String firstName);
	User findByLastName(String lastName);
}
