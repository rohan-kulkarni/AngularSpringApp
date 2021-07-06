package com.example.SpringApp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SpringApp.Model.Person;
import com.example.SpringApp.Model.Phone;
@Repository
public interface PhoneRepo extends JpaRepository<Phone, Long> {
	Phone save(Phone p);
	}
