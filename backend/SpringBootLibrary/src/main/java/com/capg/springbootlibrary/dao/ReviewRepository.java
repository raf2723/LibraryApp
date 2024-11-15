package com.capg.springbootlibrary.dao;

import java.awt.print.Pageable;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

import com.capg.springbootlibrary.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
	
	Page<Review> findBookById(@RequestParam("book_id") Long bookId ,
			Pageable pageable);

}
