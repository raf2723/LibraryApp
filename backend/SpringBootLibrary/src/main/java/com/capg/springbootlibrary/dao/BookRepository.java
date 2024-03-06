package com.capg.springbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capg.springbootlibrary.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
