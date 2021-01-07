package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.OrderRepository;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

//import com.devsuperior.dsdeliver.repositories.ProductRepository;

//@Component ou @Service
@Service
public class OrderService {
	@Autowired //injecto 
	private OrderRepository repository;//  = new, mais devemos engetar
	
	@Transactional(readOnly = true) // grantir transação, redOnly = true - pra não fazer o lock de escrita no banco!
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWhthProducts();
		return list.stream().map(x-> new OrderDTO(x)).collect(Collectors.toList());
	}
}
