package com.example.ecommerce.Controllers;

import com.example.ecommerce.models.Mail;
import com.example.ecommerce.utils.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


    @CrossOrigin("*")
    @RestController
    @RequestMapping(value = "/email")
   public class MailController {
        @Autowired
    private EmailService emailService;


        //@RequestMapping(value = "/sendMail",method = RequestMethod.POST)
        @PostMapping("/sendMail")
        public String sendMail(){
            System.out.println("spring mail - Sending simple Email with JavaMailSender example");
            Mail mail =new Mail();
            mail.setFrom("ghribiayett@gmail.com");
            mail.setTo("******@gmail.com");
            mail.setSubject("sending simple email with javamailsender example");
            mail.setContent("this tutorial demonstrate how to send a simple email using spring framework.");
            emailService.sendSimpleMessage(mail);
            return "ok";
        }
}
