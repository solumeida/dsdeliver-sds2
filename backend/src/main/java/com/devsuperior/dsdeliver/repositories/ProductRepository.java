package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Product;


//https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	//OrderBy findByAgeOrderByLastnameDesc … where x.age = ?1 order by x.lastname desc
	                            //Asc/Desc crescente/decresente
	
	// o nome do method determina por qual campo será classificado..
	List<Product> findAllByOrderByNameAsc();
		
	

}
