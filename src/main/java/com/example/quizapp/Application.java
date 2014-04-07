package com.example.quizapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by Ties on 07/04/2014.
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan
public class Application {
	
	public static void main(String[] args) throws Exception {
		SpringApplication.run(Application.class, args);
	}
	
	/*
	 * @Bean public ServletRegistrationBean getServletRegistrationBean(){ ServletRegistrationBean bean = new ServletRegistrationBean(); return bean; }
	 */
}
