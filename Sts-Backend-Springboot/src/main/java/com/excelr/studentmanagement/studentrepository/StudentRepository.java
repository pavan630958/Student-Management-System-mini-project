package com.excelr.studentmanagement.studentrepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excelr.studentmanagement.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{
	


}
