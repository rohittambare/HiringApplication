package com.task.cloudesign.springbootweb.Daos;
import org.springframework.data.jpa.repository.JpaRepository;
import com.task.cloudesign.springbootweb.Entities.*;

public interface JobDao extends JpaRepository<Job, Integer> {
	Job findByJobId(int id);
	Job findByJobName(String jobName);

}




