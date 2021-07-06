package com.example.SpringApp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringApp.Model.Person;
import com.example.SpringApp.Model.Phone;
import com.example.SpringApp.Repository.PersonRepo;
import com.example.SpringApp.Repository.PhoneRepo;
@Service
public class PersonService {
	@Autowired
	PersonRepo personRepo;
	@Autowired
	PhoneRepo phoneRepo;

	public List<Person> getAllDetails(){
		List<Person> person = personRepo.findAll();
		return person;
	}
	public Person getByID(long id){
		Person person = personRepo.findById(id);
		return person;
	}
	public void create(Person person) {
		
		personRepo.save(person);
		
		
	}
	public void delete(long id) {
		personRepo.deleteById(id);
	}
}
