package com.task.cloudesign.springbootweb.Dtos;




import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


public class Response {
	
	
	
	public static ResponseEntity<?> success(Object data) {
		Map<String, Object> map = new HashMap<>();
		map.put("status", "success");
		if(data != null)
			map.put("data", data);
		return ResponseEntity.ok(map);
		
//ok(T body): Returns a new ResponseEntity with an HTTP status code of 200 (OK)
//and the specified body.
	}
	
	public static ResponseEntity<?> error(Object err) {
		Map<String, Object> map = new HashMap<>();
		map.put("status", "error");
		if(err != null)
			map.put("error", err);
		return ResponseEntity.ok(map);
	}
	
	public static ResponseEntity<?> status(HttpStatus status) {
		return ResponseEntity.status(status).build();
//status(HttpStatus status): Returns a new ResponseEntity with the specified HTTP status code.
	}

}
