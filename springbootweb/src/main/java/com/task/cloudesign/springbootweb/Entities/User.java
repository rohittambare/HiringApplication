package com.task.cloudesign.springbootweb.Entities;




import java.util.Date;
import java.util.List;



import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;



@jakarta.persistence.Entity
@jakarta.persistence.Table(name= "user")
public class User {
	@jakarta.persistence.GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
	@jakarta.persistence.Id
	private int userId;
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column
	private String email;
	@Column
	private String password;
	@Column
	private String mobileNo;
	@Column
	private String address;
	@Column
	private String role;
	//@jakarta.persistence.Temporal(jakarta.persistence.TemporalType.TIMESTAMP)
	//@Column(insertable = false)
	//private Date createdTimestamp;
	
	
	
	
	public User() {
	}



	public User(int userId, String firstName, String lastName, String email, String password, String mobileNo,
			String address, String role) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
		this.address = address;
		this.role = role;
		//this.createdTimestamp = createdTimestamp;
	
	}



	public int getUserId() {
		return userId;
	}



	public void setUserId(int userId) {
		this.userId = userId;
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getMobileNo() {
		return mobileNo;
	}



	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", mobileNo=" + mobileNo + ", address=" + address + ", role=" + role + "]";
	}

	
	
	
	
	
}


