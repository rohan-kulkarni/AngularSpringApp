package com.example.SpringApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringApp.Model.Person;
import com.example.SpringApp.Model.Phone;
import com.example.SpringApp.Repository.PhoneRepo;
import com.example.SpringApp.Service.PersonService;
import com.example.SpringApp.Service.PhoneService;

@RestController
public class PersonController {
	@Autowired
	PersonService personService;
	@Autowired
	PhoneService phoneService;
	
	@CrossOrigin(origins = "http://localhost:*")
	@GetMapping("/phones")
    public List<Person> getAllDetail() {
        return personService.getAllDetails();
    }
	
	@CrossOrigin(origins = "http://localhost:*")
	@GetMapping("/phones/id")
    public Person getByID(@RequestParam(name ="id") long id ) {
        return personService.getByID(id);
    }
	
	@PutMapping("/phones/edit")
	public String update(@RequestBody Person person) {
		System.out.println(person.getFname());
		Person p = new Person();
		p.setId(person.getId());
		p.setFname(person.getFname());
		p.setLname(person.getLname());
		personService.create(p);
		List<Phone> phones = person.getPhones();
		for (Phone phone : phones) {
			phone.setPerson(p);
			phoneService.create(phone);
		}
		return "Success";
	}
	@DeleteMapping("/phones/delete/phone/id")
	public String deletePhone(@RequestParam(name ="id") long id) {
		phoneService.delete(id);
		return "Success";
	}
	@DeleteMapping("/phones/delete/id")
	public String deletePerson(@RequestParam(name ="id") long id) {
		personService.delete(id);
		return "Success";
	}
	@PostMapping("/saveperson")
	public String save(@RequestBody Person person) {
		Person p = new Person();
		p.setFname(person.getFname());
		p.setLname(person.getLname());
		personService.create(p);
		List<Phone> phones = person.getPhones();
		for (Phone phone : phones) {
			phone.setPerson(p);
			phoneService.create(phone);
		}
		return "Success";
	}
}
