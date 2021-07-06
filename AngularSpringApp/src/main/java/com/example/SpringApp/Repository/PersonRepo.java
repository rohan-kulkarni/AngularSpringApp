package com.example.SpringApp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SpringApp.Model.Person;
@Repository
public interface PersonRepo extends JpaRepository<Person, Long> {
	  List<Person> findAll();
	  Person findById(long id);
	  Person save(Person p);
	}
