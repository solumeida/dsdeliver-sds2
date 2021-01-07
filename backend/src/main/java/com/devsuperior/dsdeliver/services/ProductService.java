package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

//import com.devsuperior.dsdeliver.repositories.ProductRepository;

//@Component ou @Service
@Service
public class ProductService {
	@Autowired //injecto 
	private ProductRepository repository;//  = new, mais devemos engetar
	
	@Transactional(readOnly = true) // grantir transação, redOnly = true - pra não fazer o lock de escrita no banco!
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x-> new ProductDTO(x)).collect(Collectors.toList());
	}
}
