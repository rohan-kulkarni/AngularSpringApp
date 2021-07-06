package com.example.SpringApp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringApp.Model.Person;
import com.example.SpringApp.Model.Phone;
import com.example.SpringApp.Repository.PhoneRepo;
@Service
public class PhoneService {
	@Autowired
	PhoneRepo phoneRepo;
	public void create(Phone phone) {
		phoneRepo.save(phone);
	}
	public void delete(long id) {
		phoneRepo.deleteById(id);
	}
}
